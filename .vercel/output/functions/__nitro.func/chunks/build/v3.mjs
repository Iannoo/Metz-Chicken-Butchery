import { hasInjectionContext, inject } from 'vue';
import { t as Rt } from './server.mjs';
import { u as useHead, h as headSymbol } from '../routes/renderer.mjs';

function u(r) {
  var t;
  const e = r || Rt();
  return ((t = e == null ? void 0 : e.ssrContext) == null ? void 0 : t.head) || (e == null ? void 0 : e.runWithContext(() => {
    if (hasInjectionContext()) return inject(headSymbol);
  }));
}
function m(r, e = {}) {
  const t = u(e.nuxt);
  if (t) return useHead(r, { head: t, ...e });
}

export { m };
//# sourceMappingURL=v3.mjs.map
