import request from '@/utils/request'

export const login = (data: any) => {
  return request({
    url: '/user/login',
    method: 'POST',
    data
  })
}

export const getUserInfo = (data?: any) => {
  return request({
    url: '/user/profile',
    // url: '/user/profile',
    data
  })
}
