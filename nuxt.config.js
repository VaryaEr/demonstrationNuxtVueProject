// https://nuxt.com/docs/api/configuration/nuxt-config
import axios from "axios";
const getPostRoutes = async (apirefix) => {
    const response = await axios.get(`${apirefix}blog`);
    return response?.data?.data.map((post) => `/blog/${post.url_name}`);
};
export default defineNuxtConfig({
    pwa: {
        icon: {
            fileName: "favicon.ico",
        },
    },
    runtimeConfig: {
        public: {
            api_client: process.env.API_CLIENT || "http://localhost:8000/api/client/",
            api_admin: process.env.API_ADMIN || "http://localhost:8000/api/",
            mode: process.env.MODE || "dev",
        },
    },
    modules: [
        "@pinia-plugin-persistedstate/nuxt",
        "@nuxt/ui",
        "nuxt-swiper",
        ["@pinia/nuxt", { autoImports: ["defineStore", "acceptHMRUpdate"] }],
        [
            "yandex-metrika-module-nuxt3",
            {
                id: "91793071",
                webvisor: true,
                consoleLog: false,
                clickmap: true,
                useCDN: false,
                trackLinks: true,
                accurateTrackBounce: true,
            },
        ],
        "@funken-studio/sitemap-nuxt-3",
    ],

    buildModules: ["@aceforth/nuxt-optimized-images"],
    optimizedImages: {
        optimizeImages: true,
    },
    piniaPersistedstate: {
        cookieOptions: {
            sameSite: "strict",
        },
        storage: "localStorage",
    },
    nitro: {
        prerender: {
            crawlLinks: true,
            routes: [],
        },
        devProxy: {
            "/api": {
                target: "http://localhost:8000/api",
                changeOrigin: true,
                prependPath: true,
            },
            "api/client": {
                target: "http://localhost:8000/client",
                changeOrigin: true,
                prependPath: true,
            },
            "/api-nuxt": {
                target: "http://localhost:3000/",
                changeOrigin: true,
                prependPath: true,
            },
        },
    },
    routeRules: {
        "/about/**": { swr: true }, //{ static: true },
    },
    plugins: ["@/plugins/antd"],
    css: ["@fortawesome/fontawesome-svg-core/styles.css"],
    image: {
        presets: {
            allimg: {
                modifiers: {
                    format: "webp",
                },
            },
        },
    },

    // ssr: true,
    hooks: {
        async "nitro:config"(nitroConfig) {
            // try {
            const url = process.env.api_client ?? process.env.API_CLIENT;
            const slugs = await getPostRoutes(url);
            nitroConfig.prerender.routes.push(...slugs);
            // } catch (error) {
            //     console.error();
            // }
        },
    },
    sitemap: {
        hostname: "https://balance-msk.ru",
        cacheTime: 1,
        exclude: ["/basket", "/200.html", "/404.html", "/admin-panel", "/admin-panel/*"],
        // routes: dynamicRoutes,
        defaults: {
            changefreq: "daily",
            priority: 1,
            lastmod: new Date().toISOString(),
        },
    },
    swiper: {
        // Swiper options
        //----------------------
        // prefix: 'Swiper',
        // styleLang: 'css',
        // modules: ['navigation', 'pagination'], // all modules are imported by default
    },
    // serverMiddleware: [
    //     { path: '/api-nuxt/upload', handler: '~/server/api-nuxt/upload.ts' }
    // ],
});
