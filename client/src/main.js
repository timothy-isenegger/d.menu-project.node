import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import RecipesList from "./components/RecipesList";
import RecipeDetail from "./components/RecipeDetail";
import Home from "@/components/Home";
import RecipeCreate from "@/components/RecipeCreate";

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path: '/all', component: RecipesList},
    {path: '/recipe/:id', component: RecipeDetail},
    {path: '/create', component: RecipeCreate},
]

const router = new VueRouter({
    routes: routes
});

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
