<script setup lang="ts">
import { ref, watch } from "vue";
const count = ref(0);
const emit = defineEmits(["itemChange"]);

watch(count, (newValue) => {
  emit("itemChange", newValue);
});
</script>
<template>
  <div class="item-counter">
    <div class="operators" @click="count--">-</div>
    <div>
      <input type="text" name="count" id="itemCountInput" v-model="count" />
    </div>
    <div class="operators" @click="count++">+</div>
  </div>
</template>
<style scoped>
.item-counter {
  display: flex;
}
#itemCountInput {
  width: 30px;
  text-align: center;
  padding: 5px;
}
.operators {
  padding: 5px 15px;
  cursor: pointer;
  max-width: 25px;
  border: 1px solid #aaa;
}
.operators:hover {
  background-color: yellow;
}
</style>
