import { J } from './nuxt-link-BLtyK8VO.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { a as Z } from './server.mjs';
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

const p = defineComponent({ __name: "[id]", __ssrInlineRender: true, setup(o) {
  Z();
  const e = ref(null), a = (n) => new Date(n).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" }), c = (n) => ({ pending: "Pending", processing: "Processing", shipped: "Shipped", delivered: "Delivered", cancelled: "Cancelled" })[n] || n;
  return (n, s, m, u) => {
    const x = J;
    s(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 py-12" }, u))}><div class="container mx-auto px-4"><div class="max-w-2xl mx-auto"><div class="text-center mb-8"><div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><h1 class="text-3xl font-bold text-gray-900">Order Confirmed!</h1><p class="text-gray-600 mt-2">Thank you for your order. We&#39;ll start preparing it right away.</p></div>`), unref(e) ? (s(`<div class="bg-white rounded-lg shadow-sm p-6"><div class="border-b pb-4 mb-4"><h2 class="text-lg font-semibold text-gray-900 mb-2">Order Details</h2><p class="text-gray-600">Order #${ssrInterpolate(unref(e).id)}</p><p class="text-gray-600">Placed on ${ssrInterpolate(a(unref(e).created_at))}</p></div><div class="space-y-6"><div><h3 class="text-lg font-semibold text-gray-900 mb-4">Items</h3><div class="space-y-4"><!--[-->`), ssrRenderList(unref(e).items, (i) => {
      s(`<div class="flex justify-between"><div><p class="text-gray-900">${ssrInterpolate(i.name)}</p><p class="text-gray-600">Quantity: ${ssrInterpolate(i.quantity)}</p></div><p class="text-gray-900">$${ssrInterpolate((i.price * i.quantity).toFixed(2))}</p></div>`);
    }), s(`<!--]--></div></div><div class="border-t pt-4"><div class="flex justify-between text-gray-600 mb-2"><span>Subtotal</span><span>$${ssrInterpolate(unref(e).total_amount.toFixed(2))}</span></div><div class="flex justify-between text-gray-600 mb-2"><span>Delivery</span><span>Free</span></div><div class="flex justify-between text-lg font-semibold text-gray-900 mt-4"><span>Total</span><span>$${ssrInterpolate(unref(e).total_amount.toFixed(2))}</span></div></div><div><h3 class="text-lg font-semibold text-gray-900 mb-4">Delivery Information</h3><p class="text-gray-600">${ssrInterpolate(unref(e).shipping_address)}</p></div><div><h3 class="text-lg font-semibold text-gray-900 mb-4">Order Status</h3><div class="flex items-center"><span class="${ssrRenderClass([{ "bg-yellow-100 text-yellow-800": unref(e).status === "pending", "bg-blue-100 text-blue-800": unref(e).status === "processing", "bg-purple-100 text-purple-800": unref(e).status === "shipped", "bg-green-100 text-green-800": unref(e).status === "delivered", "bg-red-100 text-red-800": unref(e).status === "cancelled" }, "px-3 py-1 rounded-full text-sm font-medium"])}">${ssrInterpolate(c(unref(e).status))}</span></div></div></div></div>`)) : s("<!---->"), s('<div class="mt-8 text-center">'), s(ssrRenderComponent(x, { to: "/products", class: "inline-block bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors" }, { default: withCtx((i, d, D, R) => {
      if (d) d(" Continue Shopping ");
      else return [createTextVNode(" Continue Shopping ")];
    }), _: 1 }, m)), s("</div></div></div></div>");
  };
} }), l = p.setup;
p.setup = (o, e) => {
  const a = useSSRContext();
  return (a.modules || (a.modules = /* @__PURE__ */ new Set())).add("pages/order/confirmation/[id].vue"), l ? l(o, e) : void 0;
};

export { p as default };
//# sourceMappingURL=_id_-oO4ksLUy.mjs.map
