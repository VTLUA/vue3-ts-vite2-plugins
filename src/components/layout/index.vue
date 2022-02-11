<template>
    <div class="app-wrapper">
        <!-- 侧边栏 -->
        <div class="sidebar-container">
            <SiderBar />
        </div>

        <!-- 内容容器 -->
        <div class="main-container">
            <Main />
        </div>
    </div>
</template>

<script lang="ts" setup>
    import SiderBar from "../siderBar/index.vue";
    import Main from "../main/index.vue";
</script>

<style lang="scss" scoped>
    @import url(@/assets/style/common.scss);
    .app-wrapper{
        position: relative;
        height: 100vh;
        width: 100%;
        display: flex;
        .sidebar-container{
            height: 100%;
        }
        .main-container{
            width: 100%;
        }
    }
</style>