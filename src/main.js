import Vue from "vue";
import App from "./App";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import EForm from "./components";

Vue.config.productionTip = false;
Vue.use(EForm);
Vue.use(ElementUI);

new Vue({
    render: h => h(App)
}).$mount("#app");
