import { createApp } from "vue";
import App from "./App.vue";

// @ts-ignore
import EL from "../../dist/es/index.js";

const app = createApp(App);
app.use(EL);

app.mount("#app");
