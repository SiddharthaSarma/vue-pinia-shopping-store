<script setup lang="ts">
import { ref } from "vue";
import CartModal from "./components/CartModal.vue";
import ProductsContainer from "./components/ProductsContainer.vue";
import { useCartStore } from "./stores/CartStore";
const openModal = ref(false);
const cartStore = useCartStore();
</script>

<template>
  <CartModal :open="openModal" @close="openModal = false">
    <template #header> <h4>Your Cart</h4></template>
    <template #body>content</template>
    <template #footer>
      <button @click="openModal = false">Clear Cart</button>
      <button @click="openModal = false">Checkout</button>
    </template>
  </CartModal>
  <header class="header">
    <h2>Pinia Shopping cart</h2>
    <div class="cart-img-container" @click="openModal = true">
      <img src="./assets/cart.svg" alt="cart icon" width="32" />
      <span class="cart-count">{{ cartStore.cartCount }}</span>
    </div>
  </header>
  <ProductsContainer />
</template>

<style scoped>
.header {
  padding: 1rem;
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header h2 {
  margin: 0.5rem;
}
.cart-img-container {
  position: relative;
  cursor: pointer;
}
.cart-count {
  position: absolute;
  border: 1px solid rgb(196, 113, 37);
  background-color: rgb(196, 113, 37);
  color: #fff;
  padding: 3px;
  border-radius: 50%;
  top: -20px;
  width: 15px;
  height: 15px;
  text-align: center;
  right: 0;
}
</style>
