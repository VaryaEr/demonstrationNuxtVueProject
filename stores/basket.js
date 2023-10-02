import { defineStore } from "pinia";

export const useBasketStore = defineStore("basket", {
    state: () => ({
        basketArray: [],
    }),
    persist: true,
    actions: {
        addItemToBasket(el) {
            let index = this.basketArray.findIndex((x) => x.id === el.id);
            if (index >= 0) {
                this.basketArray[index].count = this.basketArray[index].count + el.count;
            } else {
                this.basketArray.push(el);
            }
        },
        clearBasket() {
            this.basketArray = [];
        },
        minus(el) {
            let index = this.basketArray.findIndex((x) => x.id === el.id);
            if (this.basketArray[index].count > 1) {
                this.basketArray[index].count += -1;
            }
        },
        plus(el) {
            let index = this.basketArray.findIndex((x) => x.id === el.id);
            this.basketArray[index].count += 1;
        },
        deleteItem(el) {
            let index = this.basketArray.findIndex((x) => x.id === el.id);
            this.basketArray.splice(index, 1);
        },
    },
});
