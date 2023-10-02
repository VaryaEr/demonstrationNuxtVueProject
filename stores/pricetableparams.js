import { defineStore } from "pinia";

export const usePriceTableStore = defineStore("pricetable", {
    state: () => ({
        priceTableArray: [],
    }),
    persist: true,
    actions: {
        addItemToPriceTable(el) {
            let arrayEl = this.priceTableArray;
            arrayEl.push(el);
        },
        clearPriceTable() {
            this.priceTableArray = [];
        },
    },
});
