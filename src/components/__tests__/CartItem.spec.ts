import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CartItem from '../CartItem.vue';

describe('CartItem', () => {
  it('should show the right values', () => {
    const wrapper = mount(CartItem, {
      props: {
        name: 'test item',
        count: 0,
        id: 1,
        price: 100,
      },
    });
    expect(wrapper.find('.item-name').text()).toBe('test item');
    expect(wrapper.find('.price').text()).toBe('$0.00');
  });
  it('should emit the deleteItem event', () => {
    const wrapper = mount(CartItem, {
      props: {
        name: 'test item',
        count: 0,
        id: 1,
        price: 100,
      },
    });
    wrapper.find('.delete-item').trigger('click');
    expect(wrapper.emitted()).toHaveProperty('deleteItem');
  });
});
