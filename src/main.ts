import { createApp, getCurrentInstance } from "vue"
import { createPinia } from "pinia"
import "./style.css"
import App from "./App.vue"
import router from "./router"
import VueCookies from "vue-cookies"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(VueCookies)
app.use(ElementPlus)

app.mount("#app")
