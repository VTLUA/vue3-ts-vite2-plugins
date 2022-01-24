import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Login",
        component: () => import('../view/login.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;