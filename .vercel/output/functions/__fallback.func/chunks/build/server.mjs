import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { hasInjectionContext, getCurrentInstance, inject, getCurrentScope, defineComponent, createElementBlock, shallowRef, provide, cloneVNode, h, defineAsyncComponent, computed, unref, shallowReactive, ref, mergeProps, useSSRContext, createApp, isVNode, createCommentVNode, withCtx, createVNode, onErrorCaptured, onServerPrefetch, resolveDynamicComponent, reactive, effectScope, isReadonly, toRaw, Suspense, nextTick, toRef, isRef, isShallow, isReactive, Fragment } from 'vue';
import { k as parseURL, e as encodePath, l as decodePath, m as hasProtocol, n as isScriptProtocol, o as joinURL, w as withQuery, s as sanitizeStatusCode, q as getContext, $ as $fetch, r as defu, v as executeAsync, c as createError } from '../_/nitro.mjs';
import { b as baseURL } from '../routes/renderer.mjs';
import { setActivePinia, createPinia, shouldHydrate } from 'pinia';
import { useRoute, RouterView, createMemoryHistory, createRouter, START_LOCATION } from 'vue-router';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderSuspense, ssrRenderVNode } from 'vue/server-renderer';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
const defaultTask = { run: (function_) => function_() };
const _createTask = () => defaultTask;
const createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  );
}
function parallelTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0);
  }
}

class Hookable {
  constructor() {
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) {
        message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      }
      if (!this._deprecatedMessages) {
        this._deprecatedMessages = /* @__PURE__ */ new Set();
      }
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) {
      try {
        Object.defineProperty(function_, "name", {
          get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = (...arguments_) => {
      if (typeof _unreg === "function") {
        _unreg();
      }
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      const index = this._hooks[name].indexOf(function_);
      if (index !== -1) {
        this._hooks[name].splice(index, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    delete this._hooks[name];
    for (const hook of _hooks) {
      this.hook(name, hook);
    }
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
    for (const name in deprecatedHooks) {
      this.deprecateHook(name, deprecatedHooks[name]);
    }
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(
      (key) => this.hook(key, hooks[key])
    );
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
        unreg();
      }
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  removeAllHooks() {
    for (const key in this._hooks) {
      delete this._hooks[key];
    }
  }
  callHook(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(serialTaskCaller, name, ...arguments_);
  }
  callHookParallel(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(parallelTaskCaller, name, ...arguments_);
  }
  callHookWith(caller, name, ...arguments_) {
    const event = this._before || this._after ? { name, args: arguments_, context: {} } : void 0;
    if (this._before) {
      callEachWith(this._before, event);
    }
    const result = caller(
      name in this._hooks ? [...this._hooks[name]] : [],
      arguments_
    );
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
          callEachWith(this._after, event);
        }
      });
    }
    if (this._after && event) {
      callEachWith(this._after, event);
    }
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) {
          this._before.splice(index, 1);
        }
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) {
          this._after.splice(index, 1);
        }
      }
    };
  }
}
function createHooks() {
  return new Hookable();
}

globalThis.$fetch||(globalThis.$fetch=$fetch.create({baseURL:baseURL()}));"global"in globalThis||(globalThis.global=globalThis);const se=false,Wo={componentName:"NuxtLink"},be="nuxt-app";function Ce(e=be){return getContext(e,{asyncContext:false})}const gt="__nuxt_plugin";function _t(e){let t=0;const o={_id:e.id||be||"nuxt-app",_scope:effectScope(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return "3.21.10"},get vue(){return o.vueApp.version}},payload:shallowReactive({...e.ssrContext?.payload||{},data:shallowReactive({}),state:reactive({}),once:new Set,_errors:shallowReactive({})}),static:{data:{}},runWithContext(n){return o._scope.active&&!getCurrentScope()?o._scope.run(()=>ie(o,n)):ie(o,n)},isHydrating:false,deferHydration(){if(!o.isHydrating)return ()=>{};t++;let n=false;return ()=>{if(!n&&(n=true,t--,t===0))return o.isHydrating=false,o.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:shallowReactive({}),_payloadRevivers:{},...e};o.payload.serverRendered=true,o.ssrContext&&(o.payload.path=o.ssrContext.url,o.ssrContext.nuxt=o,o.ssrContext.payload=o.payload,o.ssrContext.config={public:o.ssrContext.runtimeConfig.public,app:o.ssrContext.runtimeConfig.app}),o.hooks=createHooks(),o.hook=o.hooks.hook;{const n=async function(i,l){for(const a of i)await o.runWithContext(()=>a(...l));};o.hooks.callHook=(i,...l)=>o.hooks.callHookWith(n,i,...l);}o.callHook=o.hooks.callHook,o.provide=(n,i)=>{const l="$"+n;U(o,l,i),U(o.vueApp.config.globalProperties,l,i);},U(o.vueApp,"$nuxt",o),U(o.vueApp.config.globalProperties,"$nuxt",o);const r=e.ssrContext.runtimeConfig;return o.provide("config",r),o}function Rt(e,t){t.hooks&&e.hooks.addHooks(t.hooks);}async function wt(e,t){if(typeof t=="function"){const{provide:o}=await e.runWithContext(()=>t(e))||{};if(o&&typeof o=="object")for(const r in o)e.provide(r,o[r]);}}async function xt(e,t){const o=new Set,r=[],n=[];let i,l=0;async function a(s){const c=s.dependsOn?.filter(f=>t.some(d=>d._name===f)&&!o.has(f))??[];if(c.length>0)r.push([new Set(c),s]);else {const f=wt(e,s).then(async()=>{s._name&&(o.add(s._name),await Promise.all(r.map(async([d,g])=>{d.has(s._name)&&(d.delete(s._name),d.size===0&&(l++,await a(g)));})));}).catch(d=>{if(!s.parallel&&!e.payload.error)throw d;i||=d;});s.parallel?n.push(f):await f;}}for(const s of t)e.ssrContext?.islandContext&&s.env?.islands===false||Rt(e,s);for(const s of t)e.ssrContext?.islandContext&&s.env?.islands===false||await a(s);if(await Promise.all(n),l)for(let s=0;s<l;s++)await Promise.all(n);if(i)throw e.payload.error||i}function O(e){if(typeof e=="function")return e;const t=e._name||e.name;return delete e.name,Object.assign(e.setup||(()=>{}),e,{[gt]:true,_name:t})}const bt=O;function ie(e,t,o){const r=()=>t(),n=Ce(e._id);return e.vueApp.runWithContext(()=>n.callAsync(e,r))}function Ct(e){let t;return hasInjectionContext()&&(t=getCurrentInstance()?.appContext.app.$nuxt),t||=Ce(e).tryUse(),t||null}function v(e){const t=Ct(e);if(!t)throw new Error("[nuxt] instance unavailable");return t}function Pe(e){return v().$config}function U(e,t,o){Object.defineProperty(e,t,{get:()=>o});}const V=Symbol("layout-meta"),S=Symbol("route");globalThis._importMeta_.url.replace(/\/app\/.*$/,"/");const q=()=>v()?.$router;function Pt(e){const t=e.scope;let o=getCurrentScope();for(;o;){if(o===t)return  true;o=o.parent;}return  false}const Z=()=>{if(hasInjectionContext()){const e=getCurrentInstance();if(!e||Pt(e))return inject(S,v()._route)}return v()._route};const kt=()=>{try{if(v()._processingMiddleware)return !0}catch{return  false}return  false},Et=/[&"'<>]/g,St={"&":"%26",'"':"%22","'":"%27","<":"%3C",">":"%3E"};function Tt(e){return e.replace(Et,t=>St[t])}const Lt=(e,t)=>{e||="/";const o=typeof e=="string"?e:"path"in e?Nt(e):q().resolve(e).href,r=hasProtocol(o,{acceptRelative:true}),n=t?.external||r;if(n){if(!t?.external)throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:c}=new URL(o,"http://localhost");if(c&&isScriptProtocol(c))throw new Error(`Cannot navigate to a URL with '${c}' protocol.`)}const i=kt(),l=q(),a=v();if(a.ssrContext){const c=typeof e=="string"||n?o:l.resolve(e).fullPath||"/",f=n?o:joinURL(Pe().app.baseURL,c),d=async function(g){await a.callHook("app:redirected");const T=Ot(f,r),R=Tt(T);return a.ssrContext["~renderResponse"]={statusCode:sanitizeStatusCode(t?.redirectCode||302,302),body:`<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${R}"></head></html>`,headers:{location:T}},g};return !n&&i?(l.afterEach(g=>g.fullPath===c?d(false):void 0),e):d(i?false:void 0)}if(n)return a._scope.stop(),t?.replace?(void 0).replace(o):(void 0).href=o,i?a.isHydrating?new Promise(()=>{}):false:Promise.resolve();const s=typeof e=="string"?Ht(e):e;return t?.replace?l.replace(s):l.push(s)};function Nt(e){return withQuery(e.path||"",e.query||{})+(e.hash||"")}function Ot(e,t=false){const o=new URL(e,"http://localhost");return t?e.startsWith("//")?o.toString().replace(o.protocol,""):o.toString():o.pathname.replace(/^\/{2,}/,"/")+o.search+o.hash}function Ht(e){const t=parseURL(e);return encodePath(decodePath(t.pathname))+t.search+t.hash}const ke="__nuxt_error",Q=()=>toRef(v().payload,"error"),k=e=>{const t=L(e);try{const o=Q();o.value||=t;}catch{throw t}return t},Ee=e=>!!e&&typeof e=="object"&&ke in e,L=e=>{typeof e!="string"&&e.statusText&&(e.message??=e.statusText);const t=createError(e);return Object.defineProperty(t,ke,{value:true,configurable:false,writable:false}),Object.defineProperty(t,"status",{get:()=>t.statusCode,configurable:true}),Object.defineProperty(t,"statusText",{get:()=>t.statusMessage,configurable:true}),t},$t=(e,t)=>({default:()=>t.default?.()}),Mt=/(:\w+)\([^)]+\)/g,jt=/(:\w+)[?+*]/g,Bt=/:\w+/g;function le(e){const t=e?.meta.key??e.path.replace(Mt,"$1").replace(jt,"$1").replace(Bt,o=>e.params[o.slice(1)]?.toString()||"");return typeof t=="function"?t(e):t}function Ut(e,t){return e===t||t===START_LOCATION?false:le(e)!==le(t)?true:!e.matched.every((r,n)=>r.components&&r.components.default===t.matched[n]?.components?.default)}const At=/^[a-z][a-z0-9-]*$/i;function Wt(e,t){return e&&At.test(e)?e:t}function ce(e){return Array.isArray(e)?e:[e]}function Ft(e){const t=[];for(const o of e)o&&t.push({...o,onAfterLeave:o.onAfterLeave?ce(o.onAfterLeave):void 0,onBeforeLeave:o.onBeforeLeave?ce(o.onBeforeLeave):void 0});return defu(...t)}const It={scrollBehavior(e,t,o){const r=v(),n=q(),i=n.options?.scrollBehaviorType??"auto";return e.path.replace(/\/$/,"")===t.path.replace(/\/$/,"")?t.hash&&!e.hash?{left:0,top:0}:e.hash?{el:e.hash,top:Se(e.hash),behavior:i}:false:(typeof e.meta.scrollToTop=="function"?e.meta.scrollToTop(e,t):e.meta.scrollToTop)===false?false:t===START_LOCATION?ue(e,t,o,i):new Promise(a=>{const s=()=>{requestAnimationFrame(()=>{if(n.currentRoute.value.fullPath!==e.fullPath){a(false);return}a(ue(e,t,o,i));});};r.hooks.hookOnce("page:loading:end",()=>{const c=r["~transitionPromise"];c?c.then(s):s();});})}};function Se(e){try{const t=(void 0).querySelector(e);if(t)return (Number.parseFloat(getComputedStyle(t).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop)||0)}catch{}return 0}function ue(e,t,o,r){return o||(e.hash?{el:e.hash,top:Se(e.hash),behavior:Ut(e,t)?r:"instant"}:{left:0,top:0})}const Kt={hashMode:false,scrollBehaviorType:"auto"},C={...Kt,...It},Te=(e,t)=>[],Dt=Te,Le=e=>C.sensitive?defu({},...Te().map(t=>t.data).reverse()):defu({},...Dt("",typeof e=="string"?e.toLowerCase():e).map(t=>t.data).reverse()),zt=Le;function Yt(e){const t=typeof e=="string"?e:e.path;try{return zt(t)}catch(o){return console.error("[nuxt] Error matching route rules.",o),{}}}function Ne(e,t){v().ssrContext["~payloadReducers"][e]=t;}const Vt=bt(()=>{Ne("skipHydrate",e=>!shouldHydrate(e)&&1);});function qt(e){const t=e.push;return e.push=()=>({dispose:()=>{},patch:()=>{},_poll:()=>{}}),()=>{e.push=t;}}const Gt=O({name:"nuxt:head",enforce:"pre",setup(e){const t=e.ssrContext.head;if(e.ssrContext.islandContext){const o=qt(t);e.hooks.hookOnce("app:created",o);}e.vueApp.use(t);}}),Jt=/(:\w+)\([^)]+\)/g,Zt=/(:\w+)[?+*]/g,Qt=/:\w+/g,Xt=(e,t)=>t.path.replace(Jt,"$1").replace(Zt,"$1").replace(Qt,o=>e.params[o.slice(1)]?.toString()||""),fe=(e,t)=>{const o=e.route.matched.find(n=>n.components?.default===e.Component.type),r=o?.meta.key??(o&&Xt(e.route,o));return typeof r=="function"?r(e.route):r};function eo(e){return Array.isArray(e)?e:[e]}const to={title:"METZ - Home of Kienyeji Chicken"},D=[{name:"cart",path:"/cart",component:()=>import('./cart-BpdYJLTS.mjs')},{name:"about",path:"/about",component:()=>import('./about-xHIGZuPQ.mjs')},{name:"index",path:"/",meta:to||{},component:()=>import('./index-gHvn8KCU.mjs')},{name:"order",path:"/order",component:()=>import('./order-D33Lrw-C.mjs'),children:[{name:"order-checkout",path:"checkout",component:()=>import('./checkout-DYd9lF0s.mjs')},{name:"order-confirmation-id",path:"confirmation/:id()",component:()=>import('./_id_-oO4ksLUy.mjs')}]},{name:"contact",path:"/contact",component:()=>import('./contact-BerThiKS.mjs')},{name:"checkout",path:"/checkout",component:()=>import('./checkout-bWmTkMKj.mjs')},{name:"products",path:"/products",component:()=>import('./products-AZgsxtJB.mjs')},{name:"auth-login",path:"/auth/login",component:()=>import('./login-DQr6N6gQ.mjs')},{name:"auth-register",path:"/auth/register",component:()=>import('./register-DMTZn0aD.mjs')}],oo=async e=>{let t,o;if(!e.meta?.validate)return;const r=([t,o]=executeAsync(()=>Promise.resolve(e.meta.validate(e))),t=await t,o(),t);return r===true?void 0:L({fatal:false,status:r&&(r.status||r.statusCode)||404,statusText:r&&(r.statusText||r.statusMessage)||`Page Not Found: ${e.fullPath}`,data:{path:e.fullPath}})},ro=e=>{},no=[oo,ro],ao={};Object.assign(Object.create(null),{});const so=Object.assign(Object.create(null),{}),io=O({name:"nuxt:router",enforce:"pre",async setup(e){let t,o,r=Pe().app.baseURL;const n=C.history?.(r)??createMemoryHistory(r),i=C.routes?([t,o]=executeAsync(()=>C.routes(D)),t=await t,o(),t??D):D;let l;const a=createRouter({...C,scrollBehavior:(u,y,h)=>{if(y===START_LOCATION){l=h;return}if(C.scrollBehavior){if(a.options.scrollBehavior=C.scrollBehavior,"scrollRestoration"in(void 0).history){const x=a.beforeEach(()=>{x(),(void 0).history.scrollRestoration="manual";});}return C.scrollBehavior(u,START_LOCATION,l||h)}},history:n,routes:i});e.vueApp.use(a);const s=shallowRef(a.currentRoute.value);a.afterEach((u,y)=>{s.value=y;}),Object.defineProperty(e.vueApp.config.globalProperties,"previousRoute",{get:()=>s.value});const c=e.ssrContext.url,f=shallowRef(a.currentRoute.value),d=()=>{f.value=a.currentRoute.value;};a.afterEach((u,y)=>{const h=u.matched.at(-1)?.components?.default,x=y.matched.at(-1)?.components?.default;if(h===x){const m=fe({route:u,Component:{type:h}}),b=fe({route:y,Component:{type:x}});m===b&&d();return}u.matched.length<y.matched.length&&u.matched.every((m,b)=>m.components?.default===y.matched[b]?.components?.default)&&d();});const g={sync:d};for(const u in f.value)Object.defineProperty(g,u,{get:()=>f.value[u],enumerable:true});e._route=shallowReactive(g),e._middleware||={global:[],named:{}};const T=Q(),R=e.ssrContext?.islandContext?.name?.startsWith("page_");(!e.ssrContext?.islandContext||R)&&a.afterEach(async(u,y,h)=>{delete e._processingMiddleware,delete e._middlewareTo,h&&await e.callHook("page:loading:end"),h?.type!==4&&u.redirectedFrom&&u.fullPath!==c&&await e.runWithContext(()=>Lt(u.fullPath||"/"));});try{[t,o]=executeAsync(()=>a.push(c)),await t,o(),[t,o]=executeAsync(()=>a.isReady()),await t,o();}catch(u){[t,o]=executeAsync(()=>e.runWithContext(()=>k(u))),await t,o();}const I=a.currentRoute.value,$e=false;if(d(),e.ssrContext?.islandContext&&!R)return {provide:{router:a}};const oe=e.payload.state._layout;return a.beforeEach(async(u,y)=>{if(await e.callHook("page:loading:start"),u.meta=reactive(u.meta),e.isHydrating&&oe&&!isReadonly(u.meta.layout)&&(u.meta.layout=oe),e._processingMiddleware=true,e._middlewareTo=u,!e.ssrContext?.islandContext||R){const h=new Set([...no,...e._middleware.global]);for(const m of u.matched){const b=m.meta.middleware;if(b)for(const p of eo(b))h.add(p);}const x=Yt({path:u.path});if(x.appMiddleware)for(const m in x.appMiddleware)x.appMiddleware[m]?h.add(m):h.delete(m);for(const m of h){const b=typeof m=="string"?e._middleware.named[m]||await ao[m]?.().then(p=>p.default||p):m;if(!b)throw new Error(`Unknown route middleware: '${m}'.`);try{const p=await e.runWithContext(()=>b(u,y));if(p===!1||p instanceof Error){const H=p||L({status:404,statusText:`Page Not Found: ${c}`});return await e.runWithContext(()=>k(H)),!1}if(p===!0)continue;if(p===!1)return p;if(p)return Ee(p)&&p.fatal&&(await e.runWithContext(()=>k(p)),void 0),p}catch(p){const H=L(p);return H.fatal&&await e.runWithContext(()=>k(H)),H}}}}),R&&a.beforeResolve(u=>{const y=so[e.ssrContext.islandContext.name],h=u.matched.find(x=>x.components?.default?.__nuxt_island)?.components?.default;if(!y||y!==h?.__nuxt_island)return e.ssrContext["~renderResponse"]={statusCode:400,statusMessage:"Invalid island request path"},false}),a.onError(async()=>{delete e._processingMiddleware,delete e._middlewareTo,await e.callHook("page:loading:end");}),a.afterEach(u=>{if(u.matched.length===0&&!T.value)return e.runWithContext(()=>k(L({status:404,fatal:false,statusText:`Page not found: ${u.fullPath}`,data:{path:u.fullPath}})))}),e.hooks.hookOnce("app:created",async()=>{try{"name"in I&&(I.name=void 0),!1||$e||await a.replace({...I,force:!0}),a.options.scrollBehavior=C.scrollBehavior;}catch(u){await e.runWithContext(()=>k(u));}}),{provide:{router:a}}}}),lo=[["NuxtError",e=>Ee(e)&&e.toJSON()],["EmptyShallowRef",e=>isRef(e)&&isShallow(e)&&!e.value&&(typeof e.value=="bigint"?"0n":JSON.stringify(e.value)||"_")],["EmptyRef",e=>isRef(e)&&!e.value&&(typeof e.value=="bigint"?"0n":JSON.stringify(e.value)||"_")],["ShallowRef",e=>isRef(e)&&isShallow(e)&&e.value],["ShallowReactive",e=>isReactive(e)&&isShallow(e)&&toRaw(e)],["Ref",e=>isRef(e)&&e.value],["Reactive",e=>isReactive(e)&&toRaw(e)]],co=O({name:"nuxt:revive-payload:server",setup(){for(const[e,t]of lo)Ne(e,t);}});defineComponent({name:"ServerPlaceholder",render(){return createElementBlock("div")}});const uo=Symbol.for("nuxt:client-only");defineComponent({name:"ClientOnly",inheritAttrs:false,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:t,attrs:o}){const r=shallowRef(false),n=getCurrentInstance();return n&&(n._nuxtClientOnly=true),provide(uo,true),()=>{if(r.value){const s=t.default?.();return s&&s.length===1?[cloneVNode(s[0],o)]:s}const i=t.fallback||t.placeholder;if(i)return h(i);const l=e.fallback||e.placeholder||"",a=Wt(e.fallbackTag||e.placeholderTag,"span");return createElementBlock(a,o,l)}}});const fo=O({name:"pinia",setup(e){const t=createPinia();return e.vueApp.use(t),setActivePinia(t),e.payload&&e.payload.pinia&&(t.state.value=e.payload.pinia),{provide:{pinia:t}}},hooks:{"app:rendered"(){const e=v();e.payload.pinia=toRaw(e.$pinia).state.value,setActivePinia(void 0);}}}),po=O({name:"nuxt:global-components"}),ho=[Vt,Gt,io,co,fo,po],F={default:defineAsyncComponent(()=>import('./default-fPRtJNT7.mjs').then(e=>e.default||e))},Oe=Le,mo=defineComponent({name:"LayoutLoader",inheritAttrs:false,props:{name:String,layoutProps:Object},setup(e,t){return ()=>h(F[e.name],e.layoutProps,t.slots)}}),yo={name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},vo=defineComponent({name:"NuxtLayout",inheritAttrs:false,props:yo,setup(e,t){const o=v(),r=inject(S),i=!r||r===Z()?useRoute():r,l=computed(()=>{let f=unref(e.name)??i?.meta.layout??Oe(i?.path).appLayout??"default";return f&&!(f in F)&&e.fallback&&(f=unref(e.fallback)),f}),a=shallowRef();t.expose({layoutRef:a});const s=o.deferHydration();let c;return ()=>{const d=!!l.value&&l.value in F&&!!(i?.meta.layoutTransition??se),g=d&&Ft([i?.meta.layoutTransition,se,{onBeforeLeave(){o["~transitionPromise"]=new Promise(R=>{o["~transitionFinish"]=R;});},onAfterLeave(){o["~transitionFinish"]?.(),delete o["~transitionFinish"],delete o["~transitionPromise"];}}]),T=c;return c=l.value,$t(g,{default:()=>h(Suspense,{suspensible:true,onResolve:async()=>{await nextTick(s);}},{default:()=>h(go,{layoutProps:mergeProps(t.attrs,i.meta.layoutProps??{},{ref:a}),key:l.value||void 0,name:l.value,shouldProvide:!e.name,isRenderingNewLayout:R=>R!==T&&R===l.value,hasTransition:d},t.slots)})}).default()}}}),go=defineComponent({name:"NuxtLayoutProvider",inheritAttrs:false,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean},isRenderingNewLayout:{type:Function,required:true}},setup(e,t){const o=e.name;e.shouldProvide&&provide(V,{isCurrent:l=>o===false||o===(l.meta.layout??Oe(l.path).appLayout??"default")});const r=inject(S),n=r&&r===Z(),i=inject(V,null);if(n){const l=useRoute(),a={};for(const s in l){const c=s;Object.defineProperty(a,c,{enumerable:true,get:()=>e.isRenderingNewLayout(e.name)&&(!i||i.isCurrent(l))?l[c]:r[c]});}provide(S,shallowReactive(a));}return ()=>!o||typeof o=="string"&&!(o in F)?t.slots.default?.():h(mo,{key:o,layoutProps:e.layoutProps,name:o},t.slots)}}),_o=(e="RouteProvider")=>defineComponent({name:e,props:{route:{type:Object,required:true},vnode:Object,vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const o=t.renderKey,r=t.route,n={};for(const i in t.route)Object.defineProperty(n,i,{get:()=>o===t.renderKey?t.route[i]:r[i],enumerable:true});return provide(S,shallowReactive(n)),()=>t.vnode?h(t.vnode,{ref:t.vnodeRef}):t.vnode}}),Ro=_o(),wo=defineComponent({name:"NuxtPage",inheritAttrs:false,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:t,slots:o,expose:r}){const n=v(),i=ref();return inject(S,null),r({pageRef:i}),inject(V,null),n.deferHydration(),()=>h(RouterView,{name:e.name,route:e.route,...t},{default:xo(l=>h(Suspense,{suspensible:true},{default(){return h(Ro,{vnode:o.default?bo(o.default,l):l.Component,route:l.route,vnodeRef:i})}}))})}});function xo(e){const t=(o=>{const r=e(o);return Array.isArray(r)?r:r==null||!isVNode(r)?[createCommentVNode()]:[r]});return t._n=true,t}function bo(e,t){const o=e(t);return o.length===1?h(o[0]):h(Fragment,void 0,o)}const Co=(e,t)=>{const o=e.__vccOpts||e;for(const[r,n]of t)o[r]=n;return o},X={};function Po(e,t,o,r){const n=vo,i=wo;t(ssrRenderComponent(n,r,{default:withCtx((l,a,s,c)=>{if(a)a(ssrRenderComponent(i,null,null,s,c));else return [createVNode(i)]}),_:1},o));}const de=X.setup;X.setup=(e,t)=>{const o=useSSRContext();return (o.modules||(o.modules=new Set)).add("app.vue"),de?de(e,t):void 0};const ko=Co(X,[["ssrRender",Po]]),ee=defineComponent({__name:"error",__ssrInlineRender:true,props:{error:{}},setup(e){return (t,o,r,n)=>{o(`<div${ssrRenderAttrs(mergeProps({class:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"},n))}><div class="max-w-md w-full space-y-8"><div class="text-center"><h1 class="text-4xl font-bold text-gray-900 mb-4">${ssrInterpolate(e.error?.statusCode===404?"Page Not Found":"An Error Occurred")}</h1><p class="text-lg text-gray-600 mb-8">${ssrInterpolate(e.error?.message||"Sorry, something went wrong. Please try again later.")}</p><button class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"> Go Back Home </button></div></div></div>`);}}}),pe=ee.setup;ee.setup=(e,t)=>{const o=useSSRContext();return (o.modules||(o.modules=new Set)).add("error.vue"),pe?pe(e,t):void 0};const te={__name:"nuxt-root",__ssrInlineRender:true,setup(e){const t=()=>null,o=v();o.deferHydration(),o.ssrContext.url;const r=false;provide(S,Z()),o.hooks.callHookWith(s=>s.map(c=>c()),"vue:setup",[]);const n=Q(),i=n.value&&!o.ssrContext.error;function l(s,c,f){const d=o.vueApp.config.errorHandler;if(d&&!d.__nuxt_default)try{d(s,c,f);}catch(g){console.error("[nuxt] Error in `app.config.errorHandler`",g);}}onErrorCaptured((s,c,f)=>{o.hooks.callHook("vue:error",s,c,f).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d));{const d=o.runWithContext(()=>k(s));return onServerPrefetch(()=>d),l(s,c,f),false}});const a=o.ssrContext.islandContext;return (s,c,f,d)=>{ssrRenderSuspense(c,{default:()=>{unref(i)?c("<div></div>"):unref(n)?c(ssrRenderComponent(unref(ee),{error:unref(n)},null,f)):unref(a)?c(ssrRenderComponent(unref(t),{context:unref(a)},null,f)):unref(r)?ssrRenderVNode(c,createVNode(resolveDynamicComponent(unref(r)),null,null),f):c(ssrRenderComponent(unref(ko),null,null,f));},_:1});}}},he=te.setup;te.setup=(e,t)=>{const o=useSSRContext();return (o.modules||(o.modules=new Set)).add("node_modules/nuxt/dist/app/components/nuxt-root.vue"),he?he(e,t):void 0};let He;He=async function(t){const o=createApp(te),r=_t({vueApp:o,ssrContext:t});try{await xt(r,ho),await r.hooks.callHook("app:created",o);}catch(n){await r.hooks.callHook("app:error",n),r.payload.error||=L(n);}if(t&&(t["~renderResponse"]||t._renderResponse))throw new Error("skipping render");return o};const Fo=(e=>He(e));

export { Co as _, Z as a, v as b, Pe as c, Wo as d, Fo as default, Ht as e, Lt as n, Nt as r, Ct as t, q as u };
//# sourceMappingURL=server.mjs.map
