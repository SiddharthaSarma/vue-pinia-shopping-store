import { defineStore } from 'pinia';
import type { Product } from './ProductsStore';
import { groupBy } from 'lodash-es';
interface CartState {
  cart: Product[];
}
export const useCartStore = defineStore('Cart', {
  state: (): CartState => {
    return {
      cart: [],
    };
  },
  getters: {
    cartCount: (state) => state.cart.length,
    getItems: (state) => groupBy(state.cart, 'id'),
    total: (state) =>
      state.cart.reduce((a, item) => a + item.price, 0).toFixed(2),
    isEmpty: (state) => state.cart.length === 0,
  },
  actions: {
    addItemToCart(item: Product, count: number) {
      this.deleteItem(item);
      for (let i = 0; i < count; i++) {
        this.cart.push(item);
      }
    },
    deleteItem(item: Product) {
      this.cart = this.cart.filter((product) => product.id !== item.id);
    },
  },
});
