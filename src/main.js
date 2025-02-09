import { createApp } from "vue";
import "@fortawesome/fontawesome-free/css/all.css";
import './assets/index.css';

import App from "./App.vue";
import router from "./router.js";
import store from "./index.js";

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
