import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueMask from 'v-mask'
import { GenCC } from 'creditcard-generator'
import VueToastr from "vue-toastr";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueMask);
Vue.use(GenCC);
Vue.config.productionTip = false
Vue.use(VueToastr);

new Vue({
    render: h => h(App),
    mounted() {
        this.$toastr.defaultPosition = "toast-top-right";
    }
}).$mount('#app')