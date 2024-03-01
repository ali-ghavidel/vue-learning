import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Home from './components/Home.vue'
const routes = [
    {
        path: '/hello/:id/:title',
        component: HelloWorld
    },
    {
        path: '/welcome',
        component: TheWelcome
    },
    {
        path: '/',
        component: Home
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
});