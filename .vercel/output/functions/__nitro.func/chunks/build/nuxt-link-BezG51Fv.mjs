import { defineComponent, shallowRef, h, resolveComponent, computed } from 'vue';
import { p as parseQuery, h as hasProtocol, k as joinURL, v as withTrailingSlash, x as withoutTrailingSlash } from '../_/nitro.mjs';
import { u as Z, b as m, c as ee, r as Ct, n as xt, d as _o } from './server.mjs';

const k = (...n) => n.find((g) => g !== void 0);
function F(n) {
  const g = n.componentName || "NuxtLink";
  function p(e) {
    return typeof e == "string" && e.startsWith("#");
  }
  function S(e, r, d) {
    const u = d != null ? d : n.trailingSlash;
    if (!e || u !== "append" && u !== "remove") return e;
    if (typeof e == "string") return x(e, u);
    const f = "path" in e && e.path !== void 0 ? e.path : r(e).path;
    return { ...e, name: void 0, path: x(f, u) };
  }
  function q(e) {
    var _a, _b, _c;
    const r = Z(), d = ee(), u = computed(() => !!e.target && e.target !== "_self"), f = computed(() => {
      const a = e.to || e.href || "";
      return typeof a == "string" && hasProtocol(a, { acceptRelative: true });
    }), s = resolveComponent("RouterLink"), c = s && typeof s != "string" ? s.useLink : void 0, v = computed(() => {
      if (e.external) return true;
      const a = e.to || e.href || "";
      return typeof a == "object" ? false : a === "" || f.value;
    }), t = computed(() => {
      const a = e.to || e.href || "";
      return v.value ? a : S(a, r.resolve, e.trailingSlash);
    }), l = v.value || c == null ? void 0 : c({ ...e, to: t }), y = computed(() => {
      var _a2, _b2;
      var m;
      const a = (_a2 = e.trailingSlash) != null ? _a2 : n.trailingSlash;
      if (!t.value || f.value || p(t.value)) return t.value;
      if (v.value) {
        const h = typeof t.value == "object" && "path" in t.value ? Ct(t.value) : t.value, i = typeof h == "object" ? r.resolve(h).href : h;
        return x(i, a);
      }
      return typeof t.value == "object" ? (_b2 = (m = r.resolve(t.value)) == null ? void 0 : m.href) != null ? _b2 : null : x(joinURL(d.app.baseURL, t.value), a);
    });
    return { to: t, hasTarget: u, isAbsoluteUrl: f, isExternal: v, href: y, isActive: (_a = l == null ? void 0 : l.isActive) != null ? _a : computed(() => t.value === r.currentRoute.value.path), isExactActive: (_b = l == null ? void 0 : l.isExactActive) != null ? _b : computed(() => t.value === r.currentRoute.value.path), route: (_c = l == null ? void 0 : l.route) != null ? _c : computed(() => r.resolve(t.value)), async navigate(a) {
      await xt(y.value, { replace: e.replace, external: v.value || u.value });
    } };
  }
  return defineComponent({ name: g, props: { to: { type: [String, Object], default: void 0, required: false }, href: { type: [String, Object], default: void 0, required: false }, target: { type: String, default: void 0, required: false }, rel: { type: String, default: void 0, required: false }, noRel: { type: Boolean, default: void 0, required: false }, prefetch: { type: Boolean, default: void 0, required: false }, prefetchOn: { type: [String, Object], default: void 0, required: false }, noPrefetch: { type: Boolean, default: void 0, required: false }, activeClass: { type: String, default: void 0, required: false }, exactActiveClass: { type: String, default: void 0, required: false }, prefetchedClass: { type: String, default: void 0, required: false }, replace: { type: Boolean, default: void 0, required: false }, ariaCurrentValue: { type: String, default: void 0, required: false }, external: { type: Boolean, default: void 0, required: false }, custom: { type: Boolean, default: void 0, required: false }, trailingSlash: { type: String, default: void 0, required: false } }, useLink: q, setup(e, { slots: r }) {
    Z();
    const { to: d, href: u, navigate: f, isExternal: s, hasTarget: c, isAbsoluteUrl: v } = q(e);
    shallowRef(false);
    const t = void 0, l = void 0;
    async function y(a = m()) {
    }
    return () => {
      var h$1;
      if (!s.value && !c.value && !p(d.value)) {
        const i = { ref: l, to: d.value, activeClass: e.activeClass || n.activeClass, exactActiveClass: e.exactActiveClass || n.exactActiveClass, replace: e.replace, ariaCurrentValue: e.ariaCurrentValue, custom: e.custom };
        return e.custom || (i.rel = e.rel || void 0), h(resolveComponent("RouterLink"), i, r.default);
      }
      const a = e.target || null, m = k(e.noRel ? "" : e.rel, n.externalRelAttribute, v.value || c.value ? "noopener noreferrer" : "") || null;
      return e.custom ? r.default ? r.default({ href: u.value, navigate: f, prefetch: y, get route() {
        if (!u.value) return;
        const i = new URL(u.value, "http://localhost");
        return { path: i.pathname, fullPath: i.pathname, get query() {
          return parseQuery(i.search);
        }, hash: i.hash, params: {}, name: void 0, matched: [], redirectedFrom: void 0, meta: {}, href: u.value };
      }, rel: m, target: a, isExternal: s.value || c.value, isActive: false, isExactActive: false }) : null : h("a", { ref: t, href: u.value || null, rel: m, target: a }, (h$1 = r.default) == null ? void 0 : h$1.call(r));
    };
  } });
}
const W = F(_o);
function x(n, g) {
  const p = g === "append" ? withTrailingSlash : withoutTrailingSlash;
  return hasProtocol(n) && !n.startsWith("http") ? n : p(n, true);
}

export { W };
//# sourceMappingURL=nuxt-link-BezG51Fv.mjs.map
