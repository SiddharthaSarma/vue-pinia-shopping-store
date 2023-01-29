<script setup lang="ts">
import ItemCounter from './ItemCounter.vue';
import { ref, watch } from 'vue';
const props = defineProps({
  name: { type: String },
  count: { type: Number, default: 0 },
  id: { type: Number },
  price: { type: Number, default: 0 },
});
const itemCount = ref(props.count);
const emits = defineEmits(['updateItemCount']);
watch(itemCount, (newValue) => {
  emits('updateItemCount', newValue);
});
</script>
<template>
  <div class="cart-items">
    <div class="item-name">{{ name }}</div>
    <ItemCounter v-model="itemCount" />
    <div class="price">${{ (price * count).toFixed(2) }}</div>
    <div class="delete-item" @click="$emit('deleteItem')">
      <img src="../assets/delete-button.svg" width="32" />
    </div>
  </div>
</template>
<style scoped>
.cart-items {
  display: flex;
  justify-content: space-around;
  padding: 0.5rem;
  align-items: center;
}
.delete-item {
  cursor: pointer;
}
.price {
  width: 100px;
  text-align: right;
}
.item-name {
  width: 250px;
}
.item-count {
  width: 50px;
}
</style>
