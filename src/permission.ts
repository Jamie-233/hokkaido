import router from '@/router'
import store from '@/store'

const whiteList = ['login']
console.log(store.getters)

router.beforeEach(async (to, from, next) => {
  next()
  // if (store.getters.token) {
  //   // user logged in redirect to home page
  //   if (to.path === '/login') {
  //     next('/')
  //   } else {
  //     // check user info,  get user info
  //     if (!store.getters.hasUserInfo) {
  //       await store.dispatch('user/getUserInfo')
  //     }
  //     next()
  //   }
  // } else {
  //   if (whiteList.indexOf(to.path) > -1) {
  //     next()
  //   } else {
  //     next('/login')
  //   }
  // }
})
