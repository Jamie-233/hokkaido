<template>
  <el-dialog v-model="visible" title="料金设定" width="550">
    <el-form :model="form" class="el-form-warp">
      <el-form-item
        label="商品名"
        :label-width="formLabelWidth"
        :rules="[
          {
            required: true,
            message: 'Please input email address',
            trigger: 'blur'
          }
        ]"
      >
        <el-input v-model="form.name" autocomplete="off" style="width: 350px" />
      </el-form-item>
      <el-form-item
        label="料金名"
        :label-width="formLabelWidth"
        :rules="[
          {
            required: true,
            message: 'Please input email address',
            trigger: 'blur'
          }
        ]"
      >
        <el-input v-model="form.name" autocomplete="off" style="width: 350px" />
      </el-form-item>

      <el-form-item
        label="料金期间"
        :label-width="formLabelWidth"
        :rules="[
          {
            required: true,
            message: 'Please input email address',
            trigger: 'blur'
          }
        ]"
      >
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="To"
          start-placeholder="开始日"
          end-placeholder="终了日"
          size="default"
          style="width: 350px"
        />
      </el-form-item>
      <el-form-item
        label="料金详情"
        :label-width="formLabelWidth"
        :rules="[
          {
            required: true,
            message: 'Please input email address',
            trigger: 'blur'
          }
        ]"
      >
      </el-form-item>

      <div class="fee-warp">
        <el-table
          border
          :data="tableData"
          class="fee-table"
          :header-cell-style="{
            backgroundColor: '#f3f6fb'
          }"
        >
          <el-table-column prop="name" label="车种" />
          <el-table-column prop="" label="料金" width="164">
            <template #default="scope">
              <el-input
                v-model="form.name"
                autocomplete="off"
                :rules="[
                  {
                    required: true,
                    message: 'Please input email address',
                    trigger: 'blur'
                  }
                ]"
              />
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="closeDialog"> 保存 </el-button>
        <el-button @click="closeDialog">关闭</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
// import { Plus } from '@element-plus/icons-vue'
const value1 = ref(0)

const props = defineProps({
  visible: Boolean
})

const emits = defineEmits(['close'])

const visible = computed({
  get: () => props.visible,
  set: (val) => {
    if (!val) {
      emits('close')
    }
  }
})

function closeDialog() {
  emits('close')
}

const formLabelWidth = '140px'

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
})

const tableData = [
  {
    name: 'Standard (1-2 pax)'
  },
  {
    name: 'Zero Crown (1-2 pax)'
  },
  {
    name: 'HIACE (3-7 pax)'
  },
  {
    name: 'Alphard (1-3 pax)'
  },
  {
    name: 'Micro-Bus (8-12 pax)'
  },
  {
    name: 'Mid-Size Bus (13-24 pax)'
  },
  {
    name: 'Large-Size Bus (more than 25 pax)'
  }
]
</script>

<style lang="scss" scoped>
.el-form-warp {
  width: 490px;

  .fee-warp {
    display: flex;
    justify-content: end;

    .fee-table {
      width: 410px;
    }
  }
}

.el-dialog__body {
  .el-form-item__label {
    color: #909399;
  }

  .el-form-item {
    margin-bottom: 14px;
  }

  .el-dialog__footer {
  }
}
</style>
