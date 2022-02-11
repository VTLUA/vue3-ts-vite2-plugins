import { RouteRecordRaw } from "vue-router";
import Layout from "../components/layout/index.vue";

const layoutMap: RouteRecordRaw[] = [
    {
        path: "",
        name: "Index",
        meta: { title: "控制台", icon: "HomeFilled" },
        component: () => import("../view/common/index.vue")
    }
];

const routes: RouteRecordRaw[] = [
    {
        path: "/login",
        name: "Login",
        component: () => import('../view/common/login.vue')
    },
    {
        path: "/",
        name: "Home",
        component: Layout,
        children: [...layoutMap]
    }
];

export {routes, layoutMap};