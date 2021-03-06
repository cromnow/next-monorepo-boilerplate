if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let s = Promise.resolve();
      return (
        a[e] ||
          (s = new Promise(async (s) => {
            if ("document" in self) {
              const a = document.createElement("script");
              (a.src = e), document.head.appendChild(a), (a.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!a[e]) throw new Error(`Module ${e} didn’t register its module`);
          return a[e];
        })
      );
    },
    s = (s, a) => {
      Promise.all(s.map(e)).then((e) => a(1 === e.length ? e[0] : e));
    },
    a = { require: Promise.resolve(s) };
  self.define = (s, n, r) => {
    a[s] ||
      (a[s] = Promise.resolve().then(() => {
        let a = {};
        const t = { uri: location.origin + s.slice(1) };
        return Promise.all(
          n.map((s) => {
            switch (s) {
              case "exports":
                return a;
              case "module":
                return t;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = r(...e);
          return a.default || (a.default = s), a;
        });
      }));
  };
}
define("./sw.js", ["./workbox-d3e57396"], function (e) {
  "use strict";
  importScripts(),
    e.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "/", revision: "DKnL7IImUF9rinz-NT7uT" },
        {
          url: "/_next/static/DKnL7IImUF9rinz-NT7uT/_buildManifest.js",
          revision: "fb96ae7926f5104f50f0cf1b3a23a9b5",
        },
        {
          url: "/_next/static/DKnL7IImUF9rinz-NT7uT/_ssgManifest.js",
          revision: "abee47769bf307639ace4945f9cfd4ff",
        },
        {
          url: "/_next/static/DKnL7IImUF9rinz-NT7uT/pages/_app.js",
          revision: "6e4dbc16c8a8345c1ceb9f9797e2aa89",
        },
        {
          url: "/_next/static/DKnL7IImUF9rinz-NT7uT/pages/_error.js",
          revision: "3b624bc8cfb9b2daf530e08481b4e31e",
        },
        {
          url: "/_next/static/DKnL7IImUF9rinz-NT7uT/pages/index.js",
          revision: "bd115a69f1b29c28f91a8365bde2e981",
        },
        {
          url:
            "/_next/static/chunks/1cb0a6909edcdca4f107541fbbac77bb88eae2f7.6f007753edc6eab5cb6b.js",
          revision: "0f622492f46070bea641fd7f517a3fc9",
        },
        {
          url:
            "/_next/static/chunks/89015d9370b618ec53df0c9ee65b45ae78f113a5.294ec5327720c94f2c91.js",
          revision: "e48e0b0ce3031653c150ac97296685f5",
        },
        {
          url: "/_next/static/chunks/framework.e13af8e28f99aea04f6e.js",
          revision: "0da6b7e14e30ecb553f9583b14dda9ed",
        },
        {
          url: "/_next/static/runtime/main-48632b5a3b28d312ca73.js",
          revision: "856d3ecd67e891d4b759a5a616b3bd86",
        },
        {
          url: "/_next/static/runtime/polyfills-7fd5c418fdee8ad77d12.js",
          revision: "e24bcfac51a07879f685ba68d782cf41",
        },
        {
          url: "/_next/static/runtime/webpack-b65cab0b00afd201cbda.js",
          revision: "f5e6e2fca3144cc944812cfa3547f475",
        },
        { url: "/sw.js.map", revision: "34f689b75da24e6a0df5638594efc329" },
        {
          url: "/workbox-720f7c91.js.map",
          revision: "16caea5bb0c8f5999bf5cf0ad7659cd8",
        },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/use\.fontawesome\.com\/releases\/.*/i,
      new e.CacheFirst({
        cacheName: "font-awesome",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 1,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "others",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    );
});
