<script setup>
import { ref, reactive, computed, nextTick, onMounted } from 'vue'
import {
  Sell,
  HomeFilled,
  Tickets,
  Search,
  Van,
  Plus
} from '@element-plus/icons-vue'
import { useStore } from 'vuex'
import { useElementSize } from '@vueuse/core'
import Navbar from '@/layout/Navbar.vue'
import { getSellList } from '@/api/order'
import DynamicTable from './DynamicTable.vue'
import AppendFeeDiaLog from './AppendFeeDialog.vue'

const store = useStore()
const tableData = ref([])
const searchField = reactive({
  productName: '',
  feeName: '',
  startTime: '',
  endTime: ''
})
const currentPage = ref(1)
const contentRef = ref(null)
const formTableVisible = ref(false)
const activeIndex = ref('2-2')
const tableHeightRef = ref('300px')

const getCategoryData = async () => {
  const data = await getSellList()
  tableData.value = data || []
}

onMounted(async () => {
  await nextTick()
  const { height } = useElementSize(contentRef)
  const tableHeight = computed(() => `${height.value - 180}px`)
  tableHeightRef.value = tableHeight.value
})

onMounted(() => {
  // store
  //   .dispatch('user/login', {
  //     username: 'admin',
  //     password: 'e10adc3949ba59abbe56e057f20f883e'
  //   })
  //   .then((res) => {
  //     console.log(res)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })

  getCategoryData()
})

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}

const handleDialogVisible = () => {
  formTableVisible.value = true
}

const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}

const handleSearch = () => {
  const postData = { ...searchField.value }
  console.log(postData)
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
          <el-menu-item index="1">
            <el-icon>
              <HomeFilled />
            </el-icon>
            <span>主页</span>
          </el-menu-item>
          <el-sub-menu index="2" class="layout-el-menu">
            <template #title>
              <el-icon>
                <Sell />
              </el-icon>
              <span>商品设定</span>
            </template>
            <el-menu-item index="2-1">商品设定</el-menu-item>
            <el-menu-item index="2-2">料金情報</el-menu-item>
            <el-menu-item index="2-3">销售情况</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="3">
            <el-icon>
              <Tickets />
            </el-icon>
            <span>自社情况</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon>
              <Tickets />
            </el-icon>
            <span>支付管理</span>
          </el-menu-item>
          <el-menu-item index="5">
            <el-icon>
              <Tickets />
            </el-icon>
            <span>请求书管理</span>
          </el-menu-item>
        </el-menu>
      </div>
    </div>

    <!-- Main Container -->
    <el-container>
      <!-- Nav Bar -->
      <el-header>
        <Navbar />
      </el-header>

      <!-- Content Area -->
      <el-main>
        <div class="el-main-content" ref="contentRef">
          <div class="top-bar-container">
            <div class="top-bar-warp">
              <el-icon size="18">
                <Van />
              </el-icon>
              <span>销售料金管理</span>
            </div>
            <div>
              <el-button
                type="primary"
                :icon="Plus"
                @click="handleDialogVisible"
              >
                料金新规追加
              </el-button>
            </div>
          </div>

          <div class="search-bar">
            <span>商品名</span>
            <el-input
              v-model="searchField.productName"
              style="width: 240px"
              placeholder="キーワード"
            />

            <span>料金名</span>
            <el-input
              v-model="searchField.feeName"
              style="width: 240px"
              placeholder="キーワード"
            />

            <span>开始时间</span>
            <el-date-picker
              v-model="searchField.startTime"
              type="date"
              placeholder=""
              format="YYYY/MM/DD"
              value-format="x"
            />

            <span>结束时间</span>
            <el-date-picker
              v-model="searchField.endTime"
              type="date"
              placeholder=""
              format="YYYY/MM/DD"
              value-format="x"
            />

            <el-button
              type="primary"
              @click="handleSearch"
              style="margin-left: 10px"
            >
              Clear
            </el-button>

            <el-button type="primary" :icon="Search" @click="handleSearch">
              Search
            </el-button>
          </div>

          <el-table
            border
            :data="tableData"
            style="width: 100%"
            :height="tableHeightRef"
            :header-cell-style="{
              backgroundColor: '#f3f6fb'
            }"
          >
            <el-table-column prop="name" label="商品名" width="120" />
            <el-table-column prop="feeName" label="料金名" width="120" />
            <el-table-column prop="startTime" label="开始日" width="120" />
            <el-table-column prop="endTime" label="终了日" width="120" />
            <el-table-column prop="price" label="料金">
              <template #default="scope">
                <div class="dynamic-table-warp">
                  <DynamicTable :priceList="scope.row.priceList" />
                </div>
              </template>
            </el-table-column>
            <el-table-column sortable prop="time" label="操作" width="140">
              <template #default="scope">
                <el-button type="primary" size="small">编辑</el-button>
                <el-button type="danger" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>

          <div class="table-pagination">
            <el-pagination
              v-model:current-page="currentPage"
              :page-size="100"
              small="small"
              :background="false"
              layout="total, prev, pager, next"
              :total="1000"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
          </div>
        </div>
      </el-main>
    </el-container>

    <AppendFeeDiaLog
      :visible="formTableVisible"
      @close="formTableVisible = false"
    />
  </el-container>
</template>

<style lang="scss" scoped>
:root {
  --el-menu-item-height: 50px;
}

span {
  white-space: nowrap;
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

.top-bar-container {
  display: flex;
  font-size: 16px;
  gap: 5px;
  margin: 5px 0;
  align-items: center;
  justify-content: space-between;

  .top-bar-warp {
    display: flex;
    align-items: center;

    .el-icon {
      margin-right: 5px;
    }
  }
}

.search-bar {
  display: flex;
  align-items: center;
  margin: 20px 0;

  span {
    line-height: normal;
    margin: 10px;
  }
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
  padding-right: 0;
}

.el-main-content {
  background-color: #fff;
  border: 1px solid #edf5fe;
  padding: 15px;
  font-size: 14px;
  height: 100%;
}

.el-table {
  ::v-deep .cell {
    line-height: 30px;
  }
}

.dynamic-table-warp {
  display: flex;
  justify-content: center;
}

.table-pagination {
  display: flex;
  justify-content: end;
  padding-top: 10px;
}
</style>
