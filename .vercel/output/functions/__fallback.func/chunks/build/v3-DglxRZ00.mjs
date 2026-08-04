import { hasInjectionContext, inject } from 'vue';
import { t as Ct } from './server.mjs';
import { u as useHead, h as headSymbol } from '../routes/renderer.mjs';

function i(e) {
  var _a;
  const t = e || Ct();
  return ((_a = t == null ? void 0 : t.ssrContext) == null ? void 0 : _a.head) || (t == null ? void 0 : t.runWithContext(() => {
    if (hasInjectionContext()) return inject(headSymbol);
  }));
}
function m(e, t = {}) {
  const n = i(t.nuxt);
  if (n) return useHead(e, { head: n, ...t });
}

export { m };
//# sourceMappingURL=v3-DglxRZ00.mjs.map
