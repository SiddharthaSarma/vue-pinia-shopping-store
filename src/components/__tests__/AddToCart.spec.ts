import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import AddToCart from '../AddToCart.vue';

describe('First test', () => {
  it('first test', () => {
    const wrapper = mount(AddToCart);
    expect(wrapper.text()).toContain('Add to cart');
  });
});
