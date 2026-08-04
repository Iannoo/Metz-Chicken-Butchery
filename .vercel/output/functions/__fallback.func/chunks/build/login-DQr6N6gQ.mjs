import { J } from './nuxt-link-BLtyK8VO.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrInterpolate } from 'vue/server-renderer';
import { i } from './useAuth-CQVoCHX5.mjs';
import { u as q } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'pinia';
import 'vue-router';

const v = defineComponent({ __name: "login", __ssrInlineRender: true, setup(i$1) {
  i(), q();
  const a = ref(""), o = ref(""), m = ref(false), n = ref(false), d = ref(null);
  return (F, r, l, w) => {
    const c = J;
    r(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8" }, w))}><div class="sm:mx-auto sm:w-full sm:max-w-md"><h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900"> Sign in to your account </h2><p class="mt-2 text-center text-sm text-gray-600"> Or `), r(ssrRenderComponent(c, { to: "/auth/register", class: "font-medium text-primary-600 hover:text-primary-500" }, { default: withCtx((_, t, h, k) => {
      if (t) t(" create a new account ");
      else return [createTextVNode(" create a new account ")];
    }), _: 1 }, l)), r(`</p></div><div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md"><div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"><form class="space-y-6"><div><label for="email" class="block text-sm font-medium text-gray-700"> Email address </label><div class="mt-1"><input id="email"${ssrRenderAttr("value", unref(a))} name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"></div></div><div><label for="password" class="block text-sm font-medium text-gray-700"> Password </label><div class="mt-1"><input id="password"${ssrRenderAttr("value", unref(o))} name="password" type="password" autocomplete="current-password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"></div></div><div class="flex items-center justify-between"><div class="flex items-center"><input id="remember-me"${ssrIncludeBooleanAttr(Array.isArray(unref(m)) ? ssrLooseContain(unref(m), null) : unref(m)) ? " checked" : ""} name="remember-me" type="checkbox" class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"><label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label></div><div class="text-sm">`), r(ssrRenderComponent(c, { to: "/auth/forgot-password", class: "font-medium text-primary-600 hover:text-primary-500" }, { default: withCtx((_, t, h, k) => {
      if (t) t(" Forgot your password? ");
      else return [createTextVNode(" Forgot your password? ")];
    }), _: 1 }, l)), r(`</div></div><div><button type="submit"${ssrIncludeBooleanAttr(unref(n)) ? " disabled" : ""} class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50">${ssrInterpolate(unref(n) ? "Signing in..." : "Sign in")}</button></div></form>`), unref(d) ? r(`<div class="mt-4 text-sm text-red-600">${ssrInterpolate(unref(d))}</div>`) : r("<!---->"), r("</div></div></div>");
  };
} }), g = v.setup;
v.setup = (i, a) => {
  const o = useSSRContext();
  return (o.modules || (o.modules = /* @__PURE__ */ new Set())).add("pages/auth/login.vue"), g ? g(i, a) : void 0;
};

export { v as default };
//# sourceMappingURL=login-DQr6N6gQ.mjs.map
