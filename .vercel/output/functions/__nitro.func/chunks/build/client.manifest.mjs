const client_manifest = {
  "_cart2.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "cart2.js",
    "name": "cart",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "_nuxt-link.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "nuxt-link.js",
    "name": "nuxt-link",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "_useAuth.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "useAuth.js",
    "name": "useAuth",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "_useOrders.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "useOrders.js",
    "name": "useOrders"
  },
  "_v3.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "v3.js",
    "name": "v3",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "layouts/default.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "default.js",
    "name": "default",
    "src": "layouts/default.vue",
    "isDynamicEntry": true,
    "imports": [
      "_nuxt-link.js",
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "node_modules/nuxt/dist/app/entry.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "entry.js",
    "name": "entry",
    "src": "node_modules/nuxt/dist/app/entry.js",
    "isEntry": true,
    "dynamicImports": [
      "layouts/default.vue"
    ],
    "css": [
      "entry.Bj8B4iZC.css"
    ],
    "_globalCSS": true
  },
  "entry.Bj8B4iZC.css": {
    "file": "entry.Bj8B4iZC.css",
    "resourceType": "style",
    "prefetch": true,
    "preload": true
  },
  "pages/about.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "about.js",
    "name": "about",
    "src": "pages/about.vue",
    "isDynamicEntry": true,
    "imports": [
      "_v3.js",
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "pages/auth/login.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "login.js",
    "name": "login",
    "src": "pages/auth/login.vue",
    "isDynamicEntry": true,
    "imports": [
      "_nuxt-link.js",
      "node_modules/nuxt/dist/app/entry.js",
      "_useAuth.js"
    ]
  },
  "pages/auth/register.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "register.js",
    "name": "register",
    "src": "pages/auth/register.vue",
    "isDynamicEntry": true,
    "imports": [
      "_nuxt-link.js",
      "node_modules/nuxt/dist/app/entry.js",
      "_useAuth.js"
    ]
  },
  "pages/cart.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "cart.js",
    "name": "cart",
    "src": "pages/cart.vue",
    "isDynamicEntry": true,
    "imports": [
      "_nuxt-link.js",
      "_cart2.js",
      "_useAuth.js",
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "pages/cart/index.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "index.js",
    "name": "index",
    "src": "pages/cart/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "_nuxt-link.js",
      "_cart2.js",
      "_useAuth.js",
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "pages/checkout.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "checkout2.js",
    "name": "checkout",
    "src": "pages/checkout.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_cart2.js",
      "_useOrders.js",
      "_useAuth.js"
    ]
  },
  "pages/contact.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "contact.js",
    "name": "contact",
    "src": "pages/contact.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_v3.js"
    ]
  },
  "pages/index.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "index2.js",
    "name": "index",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "pages/order.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "order.js",
    "name": "order",
    "src": "pages/order.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_v3.js"
    ],
    "css": []
  },
  "order.BXBzSM5J.css": {
    "file": "order.BXBzSM5J.css",
    "resourceType": "style",
    "prefetch": true,
    "preload": true
  },
  "pages/order/checkout.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "checkout.js",
    "name": "checkout",
    "src": "pages/order/checkout.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_cart2.js",
      "_useOrders.js",
      "_useAuth.js"
    ]
  },
  "pages/order/checkout/index.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "index3.js",
    "name": "index",
    "src": "pages/order/checkout/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_cart2.js",
      "_useOrders.js",
      "_useAuth.js"
    ]
  },
  "pages/order/confirmation/[id].vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "_id_.js",
    "name": "_id_",
    "src": "pages/order/confirmation/[id].vue",
    "isDynamicEntry": true,
    "imports": [
      "_nuxt-link.js",
      "_useOrders.js",
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "pages/products.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "products.js",
    "name": "products",
    "src": "pages/products.vue",
    "isDynamicEntry": true,
    "imports": [
      "_nuxt-link.js",
      "_v3.js",
      "node_modules/nuxt/dist/app/entry.js"
    ]
  }
};

export { client_manifest as default };
//# sourceMappingURL=client.manifest.mjs.map
