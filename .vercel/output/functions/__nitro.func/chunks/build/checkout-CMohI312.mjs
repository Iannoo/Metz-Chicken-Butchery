import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList } from 'vue/server-renderer';
import { n as n$1 } from './cart-D_b6LYbW.mjs';
import { i } from './useAuth-CQVoCHX5.mjs';
import { u as J } from './server.mjs';
import 'pinia';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const n = defineComponent({ __name: "checkout", __ssrInlineRender: true, setup(l) {
  const t = n$1();
  i(), J();
  const a = ref(false), s = ref({ fullName: "", phone: "", address: "", cardNumber: "", expiry: "", cvv: "", notes: "" });
  return ($, i, k, p) => {
    i(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 py-12" }, p))}><div class="container mx-auto px-4"><h1 class="text-3xl font-bold text-gray-900 mb-8">Checkout</h1><div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-2"><div class="bg-white rounded-lg shadow-sm p-6"><form class="space-y-6"><div><h2 class="text-lg font-semibold text-gray-900 mb-4">Shipping Information</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><label for="fullName" class="block text-sm font-medium text-gray-700">Full Name</label><input id="fullName"${ssrRenderAttr("value", unref(s).fullName)} type="text" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"></div><div><label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label><input id="phone"${ssrRenderAttr("value", unref(s).phone)} type="tel" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"></div></div><div class="mt-4"><label for="address" class="block text-sm font-medium text-gray-700">Delivery Address</label><textarea id="address" rows="3" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500">${ssrInterpolate(unref(s).address)}</textarea></div></div><div><h2 class="text-lg font-semibold text-gray-900 mb-4">Payment Information</h2><div class="space-y-4"><div><label for="cardNumber" class="block text-sm font-medium text-gray-700">Card Number</label><input id="cardNumber"${ssrRenderAttr("value", unref(s).cardNumber)} type="text" required placeholder="1234 5678 9012 3456" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"></div><div class="grid grid-cols-2 gap-4"><div><label for="expiry" class="block text-sm font-medium text-gray-700">Expiry Date</label><input id="expiry"${ssrRenderAttr("value", unref(s).expiry)} type="text" required placeholder="MM/YY" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"></div><div><label for="cvv" class="block text-sm font-medium text-gray-700">CVV</label><input id="cvv"${ssrRenderAttr("value", unref(s).cvv)} type="text" required placeholder="123" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"></div></div></div></div><div><label for="notes" class="block text-sm font-medium text-gray-700">Order Notes (Optional)</label><textarea id="notes" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" placeholder="Special instructions for delivery...">${ssrInterpolate(unref(s).notes)}</textarea></div><button type="submit"${ssrIncludeBooleanAttr(unref(a)) ? " disabled" : ""} class="w-full bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50">${ssrInterpolate(unref(a) ? "Processing..." : "Place Order")}</button></form></div></div><div class="lg:col-span-1"><div class="bg-white rounded-lg shadow-sm p-6"><h2 class="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2><div class="space-y-4"><!--[-->`), ssrRenderList(unref(t).items, (d) => {
      i(`<div class="flex justify-between"><span class="text-gray-600">${ssrInterpolate(d.name)} x ${ssrInterpolate(d.quantity)}</span><span class="text-gray-900">$${ssrInterpolate((d.price * d.quantity).toFixed(2))}</span></div>`);
    }), i(`<!--]--><div class="border-t pt-4"><div class="flex justify-between text-gray-600"><span>Subtotal</span><span>$${ssrInterpolate(unref(t).totalPrice.toFixed(2))}</span></div><div class="flex justify-between text-gray-600"><span>Delivery</span><span>Free</span></div><div class="flex justify-between text-lg font-semibold text-gray-900 mt-4"><span>Total</span><span>$${ssrInterpolate(unref(t).totalPrice.toFixed(2))}</span></div></div></div></div></div></div></div></div>`);
  };
} }), c = n.setup;
n.setup = (l, t) => {
  const a = useSSRContext();
  return (a.modules || (a.modules = /* @__PURE__ */ new Set())).add("pages/checkout.vue"), c ? c(l, t) : void 0;
};

export { n as default };
//# sourceMappingURL=checkout-CMohI312.mjs.map
