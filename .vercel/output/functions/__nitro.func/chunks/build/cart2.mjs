import { defineStore } from 'pinia';

const n = defineStore("cart", { state: () => ({ items: [], loading: false, error: null }), getters: { totalItems: (t) => t.items.reduce((e, i) => e + i.quantity, 0), totalPrice: (t) => t.items.reduce((e, i) => e + i.price * i.quantity, 0) }, actions: { addItem(t) {
  const e = this.items.find((i) => i.id === t.id);
  e ? e.quantity += t.quantity : this.items.push(t), this.saveCart();
}, removeItem(t) {
  this.items = this.items.filter((e) => e.id !== t), this.saveCart();
}, updateQuantity(t, e) {
  const i = this.items.find((s) => s.id === t);
  i && (i.quantity = e, this.saveCart());
}, clearCart() {
  this.items = [], this.saveCart();
}, saveCart() {
}, loadCart() {
} } });

export { n };
//# sourceMappingURL=cart2.mjs.map
