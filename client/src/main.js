import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import RecipesList from "./components/RecipesList";
import RecipeDetail from "./components/RecipeDetail";
import Home from "@/components/Home";

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path: '/all', component: RecipesList},
    {path: '/recipe/:id', component: RecipeDetail}
]

const router = new VueRouter({
    routes: routes
});

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
