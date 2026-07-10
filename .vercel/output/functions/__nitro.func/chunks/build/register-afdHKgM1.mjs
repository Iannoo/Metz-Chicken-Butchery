import { W } from './nuxt-link-BezG51Fv.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { i } from './useAuth-CQVoCHX5.mjs';
import { u as Q } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-router';

const x = defineComponent({ __name: "register", __ssrInlineRender: true, setup(i$1) {
  i(), Q();
  const a = ref(""), t = ref(""), m = ref(""), l = ref(""), n = ref(""), d = ref(false), u = ref(null), y = computed(() => a.value && t.value && m.value && l.value && n.value && l.value === n.value);
  return (S, o, b, v) => {
    const g = W;
    o(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8" }, v))}><div class="sm:mx-auto sm:w-full sm:max-w-md"><h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900"> Create your account </h2><p class="mt-2 text-center text-sm text-gray-600"> Or `), o(ssrRenderComponent(g, { to: "/auth/login", class: "font-medium text-primary-600 hover:text-primary-500" }, { default: withCtx((j, c, F, V) => {
      if (c) c(" sign in to your existing account ");
      else return [createTextVNode(" sign in to your existing account ")];
    }), _: 1 }, b)), o(`</p></div><div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md"><div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"><form class="space-y-6"><div><label for="fullName" class="block text-sm font-medium text-gray-700"> Full Name </label><div class="mt-1"><input id="fullName"${ssrRenderAttr("value", unref(a))} name="fullName" type="text" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"></div></div><div><label for="email" class="block text-sm font-medium text-gray-700"> Email address </label><div class="mt-1"><input id="email"${ssrRenderAttr("value", unref(t))} name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"></div></div><div><label for="phone" class="block text-sm font-medium text-gray-700"> Phone Number </label><div class="mt-1"><input id="phone"${ssrRenderAttr("value", unref(m))} name="phone" type="tel" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"></div></div><div><label for="password" class="block text-sm font-medium text-gray-700"> Password </label><div class="mt-1"><input id="password"${ssrRenderAttr("value", unref(l))} name="password" type="password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"></div></div><div><label for="confirmPassword" class="block text-sm font-medium text-gray-700"> Confirm Password </label><div class="mt-1"><input id="confirmPassword"${ssrRenderAttr("value", unref(n))} name="confirmPassword" type="password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"></div></div><div><button type="submit"${ssrIncludeBooleanAttr(unref(d) || !unref(y)) ? " disabled" : ""} class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50">${ssrInterpolate(unref(d) ? "Creating account..." : "Create account")}</button></div></form>`), unref(u) ? o(`<div class="mt-4 text-sm text-red-600">${ssrInterpolate(unref(u))}</div>`) : o("<!---->"), o("</div></div></div>");
  };
} }), f = x.setup;
x.setup = (i, a) => {
  const t = useSSRContext();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("pages/auth/register.vue"), f ? f(i, a) : void 0;
};

export { x as default };
//# sourceMappingURL=register-afdHKgM1.mjs.map
