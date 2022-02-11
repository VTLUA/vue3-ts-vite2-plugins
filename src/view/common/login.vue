<script setup lang="ts">
    import { useMainStore } from "@/store/main";
    const mainStore = useMainStore();

    const updateData = () => {
        mainStore.$patch({
            name: "修改后的名称"
        });
    }

    const asyncUpdateData = () => {
        mainStore.insertPost("异步修改后的数据");
    }
    
</script>

<template>
    <div>
        LOGIN-{{mainStore.name}}
        <button @click="updateData">修改Store数据</button>
        <button @click="asyncUpdateData">异步修改Store数据</button>
    </div>
</template>

<style>

</style>
