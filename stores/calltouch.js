import { defineStore } from "pinia";

export const useCallTouch = defineStore("callTouch", {
    state: () => ({
        ct_site_id: 56484,
    }),
    persist: true,
    actions: {
        callTouchRequest(data) {
            let formData = JSON.parse(JSON.stringify(data));
            if (
                window.ct("calltracking_params", "sloxfzgf") &&
                window.ct("calltracking_params", "sloxfzgf").sessionId
            ) {
                formData.sessionId = window.ct("calltracking_params", "sloxfzgf").sessionId;
            }

            let dataNew = new FormData();
            Object.keys(formData).forEach((key) => dataNew.append(key, formData[key]));
            $fetch(`https://api.calltouch.ru/calls-service/RestAPI/requests/${this.ct_site_id}/register/`, {
                method: "POST",
                body: dataNew,
            })
                .then((res) => {})
                .catch((error) => {});
        },
    },
});
