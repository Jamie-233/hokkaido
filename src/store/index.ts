import { createStore } from 'vuex'
import user from './modules/user'
import order from './modules/order'
import getters from './getters'

const store = createStore({
  getters,
  modules: {
    user,
    order
  }
})

export default store
