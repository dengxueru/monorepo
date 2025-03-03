import { createApp } from "vue";
import App from "./App.vue";

import EL from "@init/components";

const app = createApp(App);
app.use(EL);

app.mount("#app");
