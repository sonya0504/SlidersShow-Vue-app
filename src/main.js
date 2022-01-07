import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import routes from "./routes/Routes";

const router = new VueRouter({
    routes
});

Vue.use(VueRouter);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router, // skrócona wersja router: router
    render: h =>
        h(App, {
            props: {
                endpoint: "https://picsum.photos/v2/list"
            }
        })
});