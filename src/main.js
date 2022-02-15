import { createApp } from 'vue'
import { createI18n } from "vue-i18n"

const app = createApp(App);

const i18n = createI18n();
app.use(i18n);

app.mount('#app');
