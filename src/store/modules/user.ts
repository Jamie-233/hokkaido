import { login, getUserInfo } from '@/api/user'

export default {
  namespaced: true,
  state: () => ({
    token: '', // getItem(TOKEN)
    userInfo: {}
  }),
  mutations: {
    setToken(state: any, token: any) {
      state.token = token
      // setItem(TOKEN, token)
    },
    setUserInfo(state: any, userInfo: any) {
      state.userInfo = userInfo
    }
  },
  actions: {
    login({ commit }: any, userInfo: any) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({ username, password })
          .then((data) => {
            commit('setToken', data)
            resolve(data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    async getUserInfo({ commit }: any) {
      const res = await getUserInfo()
      commit('setUserInfo', res)
      return res
    }
  },
  getters: {
    token: (state: any) => state.token
  }
}
