// import { getCategory } from '@/api/category'

// export default {
//   namespace: true,
//   state: () => ({}),
//   mutation: {},
//   actions: {
//     getOrderList: (context, orderList) => {
//       return new Promise(async (resolve, reject) => {
//         const { categorys } = await getCategory()
//         console.log(categorys)
//       })
//     },
//     setOrderById: () => {}
//   }
// }

// store/modules/order.js
export default {
  namespaced: true,
  state() {
    return {
      orders: []
    }
  },
  mutations: {
    addOrder(state, order) {
      state.orders.push(order)
    }
  },
  actions: {
    addOrder({ commit }, order) {
      commit('addOrder', order)
    }
  },
  getters: {
    orders: (state) => state.orders
  }
}
