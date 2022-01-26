import { defineStore } from "pinia";

export const useMainStore = defineStore({
    id: 'main',
    state: () => ({
        name: "超级管理员"
    }),
    actions: {
        async insertPost (data: string) {
            // 用于做异步
            this.name = data;
        }
    }
});