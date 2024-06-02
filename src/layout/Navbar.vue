<template>
  <div class="navbar">
    <div class="left-menu">
      <div class="icon-warp">
        <el-icon size="18" color="#589ef8">
          <Sell />
        </el-icon>
      </div>
      <span class="title">料金情報</span>
    </div>
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <span class="uname">管理者</span>
          <el-avatar shape="circle" :size="30" class="avatar"> X </el-avatar>
          <el-icon size="18" color="#333" class="icon">
            <Right />
          </el-icon>
        </div>

        <template #dropdown>
          <el-dropdown-menu>
            <router-link to="/">
              <el-dropdown-item> Home </el-dropdown-item>
            </router-link>
          </el-dropdown-menu>
          <el-dropdown-menu>
            <router-link to="/profile">
              <el-dropdown-item> Profile </el-dropdown-item>
            </router-link>
          </el-dropdown-menu>
          <el-dropdown-menu>
            <router-link to="/logout">
              <el-dropdown-item> Logout </el-dropdown-item>
            </router-link>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Right, Sell } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.navbar {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  .left-menu {
    display: flex;
    float: left;
    align-items: center;
    justify-content: center;

    .icon-warp {
      width: 100px;
      line-height: 80px;
      background-color: #edf5fe;
      border: 1px solid #edf5fe;
    }

    .title {
      margin-left: 20px;
      font-size: 15px;
    }
  }

  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;
  }
}
.avatar-wrapper {
  display: flex;
  align-items: center;

  .avatar {
    background-color: skyblue;
    cursor: pointer;
  }

  .icon {
    cursor: pointer;
    margin-left: 30px;
    margin-right: 10px;
  }

  .uname {
    color: #c4c0cb;
    margin-right: 5px;
  }
}
</style>
