<script setup lang="ts">
import { useProductsStore } from "@/stores/ProductsStore";
import { useCartStore } from "@/stores/CartStore";
import ProductCard from "./ProductCard.vue";
const productStore = useProductsStore();
const cartStore = useCartStore();
productStore.fetchProducts();
</script>
<template>
  <div class="products-container">
    <ProductCard
      v-for="product in productStore.products"
      :product="product"
      :key="product.id"
    />
  </div>
</template>
<style scoped>
.products-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
