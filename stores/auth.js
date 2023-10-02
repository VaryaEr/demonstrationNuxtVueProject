import { defineStore } from "pinia";

export const useAuthStore = defineStore("authtoken", {
    state: () => ({
        access_token: "",
    }),
    persist: true,
    actions: {
        replaceAuth(val) {
            this.access_token = val;
        },
    },
});
