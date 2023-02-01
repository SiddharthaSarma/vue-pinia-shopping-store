<script setup lang="ts">
import { ref } from 'vue';
import CartItem from '@/components/CartItem.vue';
import CartModal from '@/components/CartModal.vue';
import ProductsContainer from '@/components/ProductsContainer.vue';
import { useCartStore } from '@/stores/CartStore';
const openModal = ref(false);
const cartStore = useCartStore();
const clearCart = () => {
  openModal.value = false;
  cartStore.$reset();
};
</script>

<template>
  <CartModal :open="openModal" @close="openModal = false">
    <template #header> <h3>Your Cart</h3></template>
    <template #body>
      <div v-if="!cartStore.isEmpty">
        <div v-for="item in cartStore.getItems" :key="item[0].id">
          <CartItem
            :name="item[0].name"
            :count="item.length"
            :id="item[0].id"
            :price="item[0].price"
            @deleteItem="cartStore.deleteItem(item[0])"
            @updateItemCount="cartStore.addItemToCart(item[0], $event)"
          />
        </div>
        <div class="cart-total">Total: ${{ cartStore.total }}</div>
      </div>
      <div v-if="cartStore.isEmpty">
        You're cart is empty, please add some items 😀
      </div>
    </template>
    <template #footer>
      <div class="footer-btns" v-if="!cartStore.isEmpty">
        <button class="button" @click="clearCart">Clear Cart</button>
        <button class="button" @click="openModal = false">Checkout</button>
      </div>
    </template>
  </CartModal>
  <header class="header">
    <h2 data-test-id="heading">Pinia Shopping cart</h2>
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
.cart-total {
  padding: 1rem;
  text-align: right;
  padding-right: 4.5rem;
  border-top: 2px dashed #aaa;
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
.footer-btns {
  display: flex;
  justify-content: flex-end;
}

.button {
  margin: 0.5rem;
  background: linear-gradient(to bottom right, #ef4765, #ff9a5a);
  border: 0;
  border-radius: 12px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial,
    sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
}

.button:not([disabled]):focus {
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
    -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
    0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
}

.button:not([disabled]):hover {
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
    -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
    0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
}
</style>
