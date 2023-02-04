import type { DirectiveBinding } from 'vue';

const clickOutsideDirective = {
  mounted(el: any, binding: DirectiveBinding) {
    el.__ClickOutsideElement__ = (event: MouseEvent) => {
      if (!(el == event.target || el.contains(<Node>event!.target))) {
        binding.value();
      }
    };
    document.body.addEventListener('click', el.__ClickOutsideElement__);
  },
  unmounted(el: any) {
    document.body.removeEventListener('click', el.__ClickOutsideElement__);
  },
};
export default clickOutsideDirective;
