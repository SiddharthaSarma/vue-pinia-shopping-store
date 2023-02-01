<script setup lang="ts">
const emit = defineEmits(['update:modelValue', 'input']);
defineProps({
  modelValue: { type: [Number], default: 0 },
});

const updateValue = (value: number) => {
  emit('update:modelValue', value);
};
</script>
<template>
  <div class="item-counter">
    <div class="operators" @click="updateValue(modelValue - 1)">-</div>
    <div>
      <input
        type="text"
        name="count"
        id="itemCountInput"
        data-test-class="item-count-input"
        :value="modelValue"
        @input="updateValue(parseInt(($event.target as HTMLInputElement).value, 10))"
      />
    </div>
    <div class="operators" @click="updateValue(modelValue + 1)">+</div>
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
