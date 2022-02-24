import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from "vue-i18n"

const app = createApp(App);

const i18n = createI18n();

app.use(i18n).mount('#app');