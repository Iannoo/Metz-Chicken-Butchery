import { defineComponent, shallowRef, h, resolveComponent, computed, unref } from 'vue';
import { p as parseQuery, m as hasProtocol, o as joinURL, n as isScriptProtocol, x as withTrailingSlash, y as withoutTrailingSlash } from '../_/nitro.mjs';
import { u as q, e as Ht, c as Pe, r as Nt, n as Lt, b as v, d as Wo } from './server.mjs';

const V = (...t) => t.find((n) => n !== void 0);
function k(t) {
  let n = t.replace(/[\u0000-\u001f\s]+/g, "");
  for (; n.toLowerCase().startsWith("view-source:"); ) n = n.slice(12);
  const d = n.indexOf(":");
  return d > 0 && isScriptProtocol(n.slice(0, d + 1)) ? null : t;
}
function z(t) {
  const n = t.componentName || "NuxtLink";
  function d(e) {
    return typeof e == "string" && e.startsWith("#");
  }
  function R(e, i, h) {
    const f = h != null ? h : t.trailingSlash;
    if (!e || f !== "append" && f !== "remove") return e;
    if (typeof e == "string") return S(e, f);
    const u = "path" in e && e.path !== void 0 ? e.path : i(e).path;
    return { ...e, name: void 0, path: S(u, f) };
  }
  function q$1(e) {
    var _a, _b, _c;
    const i = q(), h = Pe(), f = computed(() => !!unref(e.target) && unref(e.target) !== "_self"), u = computed(() => {
      const r = unref(e.to) || unref(e.href) || "";
      return typeof r == "string" && hasProtocol(r, { acceptRelative: true });
    }), g = resolveComponent("RouterLink"), m = g && typeof g != "string" ? g.useLink : void 0, c = computed(() => {
      if (unref(e.external)) return true;
      const r = unref(e.to) || unref(e.href) || "";
      return typeof r == "object" ? false : r === "" || u.value;
    }), a = computed(() => {
      const r = unref(e.to) || unref(e.href) || "";
      return c.value ? r : R(r, i.resolve, unref(e.trailingSlash));
    }), y = c.value ? void 0 : m == null ? void 0 : m({ ...e, to: a, viewTransition: unref(e.viewTransition) }), x = computed(() => {
      var _a2, _b2, _c2;
      const r = (_a2 = unref(e.trailingSlash)) != null ? _a2 : t.trailingSlash;
      if (!a.value || u.value || d(a.value)) {
        const s = a.value;
        return typeof s == "string" ? k(s) : s;
      }
      if (c.value) {
        const s = typeof a.value == "object" && "path" in a.value ? Nt(a.value) : a.value, p = typeof s == "object" ? i.resolve(s).href : s, o = typeof p == "string" ? k(p) : p;
        return o === null ? null : S(o, r);
      }
      return typeof a.value == "object" ? (_c2 = (_b2 = i.resolve(a.value)) == null ? void 0 : _b2.href) != null ? _c2 : null : S(joinURL(h.app.baseURL, a.value), r);
    });
    return { to: a, hasTarget: f, isAbsoluteUrl: u, isExternal: c, href: x, isActive: (_a = y == null ? void 0 : y.isActive) != null ? _a : computed(() => a.value === i.currentRoute.value.path), isExactActive: (_b = y == null ? void 0 : y.isExactActive) != null ? _b : computed(() => a.value === i.currentRoute.value.path), route: (_c = y == null ? void 0 : y.route) != null ? _c : computed(() => i.resolve(a.value)), async navigate(r) {
      x.value !== null && await Lt(x.value, { replace: unref(e.replace), external: c.value || f.value });
    } };
  }
  return defineComponent({ name: n, props: { to: { type: [String, Object], default: void 0, required: false }, href: { type: [String, Object], default: void 0, required: false }, target: { type: String, default: void 0, required: false }, rel: { type: String, default: void 0, required: false }, noRel: { type: Boolean, default: void 0, required: false }, prefetch: { type: Boolean, default: void 0, required: false }, prefetchOn: { type: [String, Object], default: void 0, required: false }, noPrefetch: { type: Boolean, default: void 0, required: false }, activeClass: { type: String, default: void 0, required: false }, exactActiveClass: { type: String, default: void 0, required: false }, prefetchedClass: { type: String, default: void 0, required: false }, replace: { type: Boolean, default: void 0, required: false }, ariaCurrentValue: { type: String, default: void 0, required: false }, external: { type: Boolean, default: void 0, required: false }, custom: { type: Boolean, default: void 0, required: false }, trailingSlash: { type: String, default: void 0, required: false } }, useLink: q$1, setup(e, { slots: i }) {
    const h$1 = q(), { to: f, href: u, navigate: g, isExternal: m, hasTarget: c, isAbsoluteUrl: a } = q$1(e);
    shallowRef(false);
    const y = void 0, x = void 0;
    async function r(s = v()) {
    }
    return () => {
      var _a;
      if (!m.value && !c.value && !d(f.value)) {
        const o = { ref: x, to: f.value, activeClass: e.activeClass || t.activeClass, exactActiveClass: e.exactActiveClass || t.exactActiveClass, replace: e.replace, ariaCurrentValue: e.ariaCurrentValue, custom: e.custom };
        return e.custom || (o.rel = e.rel || void 0), h(resolveComponent("RouterLink"), o, i.default);
      }
      const s = e.target || null, p = V(e.noRel ? "" : e.rel, t.externalRelAttribute, a.value || c.value ? "noopener noreferrer" : "") || null;
      return e.custom ? i.default ? i.default({ href: u.value, navigate: g, prefetch: r, get route() {
        if (!u.value) return;
        const o = new URL(u.value, "http://localhost");
        return { path: o.pathname, fullPath: o.pathname, get query() {
          return parseQuery(o.search);
        }, hash: o.hash, params: {}, name: void 0, matched: [], redirectedFrom: void 0, meta: {}, href: u.value };
      }, rel: p, target: s, isExternal: m.value || c.value, isActive: false, isExactActive: false }) : null : h("a", { ref: y, href: u.value || null, rel: p, target: s, onClick: async (o) => {
        var _a2;
        if (!(m.value || c.value)) {
          o.preventDefault();
          {
            const C = Ht((_a2 = u.value) != null ? _a2 : "");
            return await (e.replace ? h$1.replace(C) : h$1.push(C));
          }
        }
      } }, (_a = i.default) == null ? void 0 : _a.call(i));
    };
  } });
}
const J = z(Wo);
function S(t, n) {
  if (n !== "append" && n !== "remove") return t;
  const d = n === "append" ? withTrailingSlash : withoutTrailingSlash;
  return hasProtocol(t) && !t.startsWith("http") ? t : d(t, true);
}

export { J };
//# sourceMappingURL=nuxt-link-BLtyK8VO.mjs.map
