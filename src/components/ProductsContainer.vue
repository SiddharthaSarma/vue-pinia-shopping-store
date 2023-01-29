<script setup lang="ts">
import products from "../data/products.json";
import ProductCard from "./ProductCard.vue";
</script>
<template>
  <div class="products-container">
    <ProductCard
      v-for="product in products"
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
