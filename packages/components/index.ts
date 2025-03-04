import { type App } from "vue";
import * as components from "./component";

export default {
  install(app: App) {
    Object.entries(components).forEach(([key, value]) => {
      app.component(key, value);
    });
  },
};
