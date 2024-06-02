<template>
  <table border="1">
    <!-- <thead>
      <tr>
        <th>Set</th>
        <th>Price</th>
      </tr>
    </thead> -->
    <tbody>
      <tr v-for="(item, index) in tableData" :key="item.key">
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { reactive } from 'vue'
const props = defineProps({
  priceList: Array
})

const tableData = reactive(props?.priceList || [])
</script>

<style lang="scss" scoped>
table {
  width: 160px;
  border-collapse: collapse;
  white-space: nowrap;

  th,
  td {
    padding: 8px;
    text-align: left;
    border: 1px solid #cbcbcb;
  }
}

// thead {
//   background-color: #f3f3f3;
//   th {
//     color: #cbcbcb; // table header
//   }
// }

// tbody tr:nth-child(odd) {
//   background-color: #f9f9f9; // Interval rows bg
// }
</style>
