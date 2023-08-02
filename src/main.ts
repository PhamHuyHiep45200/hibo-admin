import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import router from "./router";
import "vuetify/styles"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import "material-design-icons-iconfont/dist/material-design-icons.css"
import "@mdi/font/css/materialdesignicons.css"

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
  },
})


const app = createApp(App);
app.use(vuetify);
app.use(router);
app.mount("#app");
