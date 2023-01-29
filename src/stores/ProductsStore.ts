import { defineStore } from 'pinia';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}
export interface ProductStore {
  products: Product[];
}

export const useProductsStore = defineStore('Products', {
  state: (): ProductStore => {
    return {
      products: [],
    };
  },
  actions: {
    async fetchProducts() {
      this.products = (await import('../data/products.json')).default;
    },
  },
});
