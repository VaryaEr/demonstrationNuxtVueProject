import { defineStore } from "pinia";

export const useUtmStore = defineStore("utmtoken", {
    state: () => ({
        utm_medium: null,
        utm_content: null,
        utm_campaign: null,
        utm_source: null,
    }),
    persist: true,
    actions: {
        createUrlParams() {
            const urlParams = new URLSearchParams(window.location.search);
            let utm_medium = urlParams.get("utm_medium") || null;
            let utm_content = urlParams.get("utm_content") || null;
            let utm_campaign = urlParams.get("utm_campaign") || null;
            let utm_source = urlParams.get("utm_source") || null;
            if (utm_medium || utm_content || utm_campaign || utm_source) {
                this.utm_medium = utm_medium;
                this.utm_content = utm_content;
                this.utm_campaign = utm_campaign;
                this.utm_source = utm_source;
            }
        },
    },
});
