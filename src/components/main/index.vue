<template>
    <div class="main">
        <header>
            <el-breadcrumb :separator-icon="ArrowRight">
                <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
                <el-breadcrumb-item>promotion management</el-breadcrumb-item>
                <el-breadcrumb-item>promotion list</el-breadcrumb-item>
            </el-breadcrumb>
        </header>
        <div class="main-page">
            <el-card>
                <router-view></router-view>
            </el-card>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { ArrowRight } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
    .main{
        header{
           padding: 20px; 
        }
        &-page{
            padding: 0 20px;
        }
        .el-card{
            height: calc(100vh - 60px);
        }
    }
</style>