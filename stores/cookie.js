import { defineStore } from "pinia";

export const useCookieStore = defineStore("cookieagreement", {
    state: () => ({
        agreement: false,
    }),
    persist: true,
    actions: {
        cookieAgree() {
            this.agreement = true;
        },
    },
});
