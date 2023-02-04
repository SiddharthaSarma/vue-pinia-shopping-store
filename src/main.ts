import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

import './assets/main.css';
import clickOutsideDirective from './directives/click-outside-directive';

const app = createApp(App);

app.use(createPinia());
app.directive('click-outside', clickOutsideDirective);

app.mount('#app');
