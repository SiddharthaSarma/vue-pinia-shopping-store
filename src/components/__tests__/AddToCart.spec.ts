import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import AddToCart from '../AddToCart.vue';

describe('AddToCart', () => {
  it('AddToCart should show the Add to Cart text', () => {
    const wrapper = mount(AddToCart);
    expect(wrapper.text()).toContain('Add to cart');
  });
});
