import request from '@/utils/request'

export const getSellList = () => {
  return request({
    url: '/sell-list'
  })
}
