import { W } from './nuxt-link-BezG51Fv.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { n } from './cart-D_b6LYbW.mjs';
import { i } from './useAuth-CQVoCHX5.mjs';
import { u as Z } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'pinia';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const p = defineComponent({ __name: "cart", __ssrInlineRender: true, setup(a) {
  const s = n();
  i(), Z();
  const i$1 = ref(false);
  return (P, t, m, u) => {
    const v = W;
    t(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 py-12" }, u))}><div class="container mx-auto px-4"><h1 class="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>`), unref(s).items.length === 0 ? (t('<div class="text-center py-12"><h2 class="text-2xl font-semibold text-gray-900 mb-4">Your cart is empty</h2><p class="text-gray-600 mb-8">Add some delicious chicken products to your cart!</p>'), t(ssrRenderComponent(v, { to: "/products", class: "inline-block bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors" }, { default: withCtx((e, n, R, B) => {
      if (n) n(" Browse Products ");
      else return [createTextVNode(" Browse Products ")];
    }), _: 1 }, m)), t("</div>")) : (t('<div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-2"><div class="bg-white rounded-lg shadow-sm"><div class="p-6"><div class="space-y-6"><!--[-->'), ssrRenderList(unref(s).items, (e) => {
      t(`<div class="flex items-center"><div class="flex-shrink-0 w-24 h-24"><img${ssrRenderAttr("src", e.image)}${ssrRenderAttr("alt", e.name)} class="w-full h-full object-cover rounded-md"></div><div class="ml-6 flex-1"><div class="flex items-center justify-between"><h3 class="text-lg font-semibold text-gray-900">${ssrInterpolate(e.name)}</h3><button class="text-gray-400 hover:text-red-500 transition-colors"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div><div class="mt-2 flex items-center justify-between"><div class="flex items-center"><button class="text-gray-500 hover:text-gray-700"${ssrIncludeBooleanAttr(e.quantity <= 1) ? " disabled" : ""}><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg></button><span class="mx-4 text-gray-900">${ssrInterpolate(e.quantity)}</span><button class="text-gray-500 hover:text-gray-700"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg></button></div><p class="text-lg font-semibold text-gray-900"> $${ssrInterpolate((e.price * e.quantity).toFixed(2))}</p></div></div></div>`);
    }), t(`<!--]--></div></div></div></div><div class="lg:col-span-1"><div class="bg-white rounded-lg shadow-sm p-6"><h2 class="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2><div class="space-y-4"><div class="flex justify-between text-gray-600"><span>Subtotal</span><span>$${ssrInterpolate(unref(s).totalPrice.toFixed(2))}</span></div><div class="flex justify-between text-gray-600"><span>Delivery</span><span>Free</span></div><div class="border-t pt-4"><div class="flex justify-between text-lg font-semibold text-gray-900"><span>Total</span><span>$${ssrInterpolate(unref(s).totalPrice.toFixed(2))}</span></div></div></div><button${ssrIncludeBooleanAttr(unref(i$1)) ? " disabled" : ""} class="w-full mt-6 bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50">${ssrInterpolate(unref(i$1) ? "Processing..." : "Proceed to Checkout")}</button></div></div></div>`)), t("</div></div>");
  };
} }), c = p.setup;
p.setup = (a, s) => {
  const i = useSSRContext();
  return (i.modules || (i.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue"), c ? c(a, s) : void 0;
};

export { p as default };
//# sourceMappingURL=cart-D3UHVzW0.mjs.map
