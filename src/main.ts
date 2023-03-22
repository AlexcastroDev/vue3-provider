import './style.css';
import { createApp } from 'vue';
import App from './App.vue';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import FlexysearchStateProvider from './provider/TableProvider.vue';

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .component('flexysearch-state-provider', FlexysearchStateProvider)
  .use(vuetify)
  .mount('#app');
