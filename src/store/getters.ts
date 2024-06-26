const getters = {
  token: (state: any) => state.user.token,
  hasUserInfo: (state: any) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  }
}

export default getters
