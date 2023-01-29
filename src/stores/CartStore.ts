import { defineStore } from 'pinia';
import type { Product } from './ProductsStore';
interface CartState {
  cart: Product[];
}
export const useCartStore = defineStore('Cart', {
  state: (): CartState => {
    return {
      cart: [],
    };
  },
  actions: {
    addItemToCart(item: Product, count: number) {
      this.clearItem(item);
      for (let i = 0; i < count; i++) {
        this.cart.push(item);
      }
    },
    clearItem(item: Product) {
      this.cart = this.cart.filter((product) => product.id !== item.id);
    },
  },
});
