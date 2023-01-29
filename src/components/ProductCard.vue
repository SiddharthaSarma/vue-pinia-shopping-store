<script setup lang="ts">
import ItemCounter from './ItemCounter.vue';
import AddToCart from './AddToCart.vue';
import { ref } from 'vue';
const getPath = (name: string) => {
  return new URL(`../assets/${name}`, import.meta.url).href;
};
defineProps<{
  product: {
    id: number;
    image: string;
    name: string;
    price: number;
  };
}>();
const count = ref(0);
const emits = defineEmits(['addToCart']);
const addToCart = () => {
  emits('addToCart', count.value);
  count.value = 0;
};
</script>
<template>
  <div class="product">
    <img :src="getPath(product.image)" width="225" height="200" />
    <h3>{{ product.name }}</h3>
    <span class="price">${{ product.price }}</span>
    <ItemCounter v-model="count" />
    <AddToCart @click="addToCart" />
  </div>
</template>
<style scoped>
.product {
  border: 2px solid #ccc;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  position: relative;
  box-shadow: rgba(151, 52, 52, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;
}
.price {
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
  background: green;
  color: white;
}
</style>
