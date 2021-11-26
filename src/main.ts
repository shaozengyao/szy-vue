import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import { key, store } from "./store/index";
import styleImport from "./utils/style-import";
const app = createApp(App);
styleImport(app).use(router).use(store, key).mount("#app");
