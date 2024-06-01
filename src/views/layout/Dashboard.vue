<script>
import { ref } from 'vue'
import { getCategory } from '@/api/category'

const getCategoryData = async () => {
  const res = await getCategory()
  console.log(res)
}

getCategoryData()

const activeIndex = ref('1-1')

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}

const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<template>
  <el-container class="layout-container">
    <!-- Sidebar -->
    <div class="layout-sidebar">
      <el-aside>
        <div class="logo-container">
          <img src="@/assets/images/logo.png" alt="logo" class="logo" />
        </div>
      </el-aside>

      <div class="layout-aside">
        <el-menu
          :default-active="activeIndex"
          @open="handleOpen"
          @close="handleClose"
          text-color="#333"
          active-text-color="#409EFF"
        >
          <el-submenu index="1" class="layout-el-menu">
            <template #title>一级导航</template>
            <el-menu-item index="1-1">二级导航</el-menu-item>
            <el-menu-item index="1-2">二级导航</el-menu-item>
            <el-menu-item index="1-3">二级导航</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template #title>一级导航</template>
            <el-menu-item index="2-1">二级导航</el-menu-item>
            <el-menu-item index="2-2">二级导航</el-menu-item>
            <el-menu-item index="2-3">二级导航</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </div>

    <!-- Main Container -->
    <el-container>
      <!-- Top Bar -->
      <el-header>
        <div class="layout-header">Top Navigation Bar</div>
      </el-header>

      <!-- Content Area -->
      <el-main>
        <div class="el-main-content">
          Main Content Area
          <br />
          Main Content Area
          <br />
          Main Content Area
          <br />
          Main Content Area
          <br />
          Main Content Area
          <br />
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
:root {
  --el-menu-item-height: 50px;
}

.layout-container {
  height: 100vh;
}

.logo-container {
  height: 80px;
  width: 200px;
}

.layout-sidebar {
  width: 200px;
  display: flex;
  flex-direction: column;
}

.logo {
  position: relative;
  width: 200px;
  height: 80px;
}

.el-aside {
  overflow: hidden;
  background-color: #fff;
}

.layout-header {
  height: 80px;
  text-align: center;
}

.layout-aside {
  width: 200px;
  position: relative;
  height: 100%;
  box-shadow: 10px 0 20px -5px rgba(200, 200, 200, 0.5);
}

.el-menu {
  border-right: 0;
}

.el-header {
  height: 80px;
  padding: 0;
  text-align: center;
}

.el-menu-item.is-active {
  background-color: #edf5fe;
}

.el-main {
  background-color: #f4f6f9;
}

.el-main-content {
  background-color: #fff;
  border: 1px solid #edf5fe;
  padding: 10px;
}
</style>
