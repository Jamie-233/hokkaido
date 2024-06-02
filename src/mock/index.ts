import Mock from 'mockjs'

Mock.mock(/\/login/, 'post', {
  code: 200,
  message: 'login success',
  success: true,
  data: {
    token: '23333333333'
  }
})

Mock.mock(/\/getUserInfo/, 'get', {
  success: true,
  message: 'success',
  code: 200,
  data: [
    {
      username: '1',
      avatar: ''
    }
  ]
})

Mock.mock('/api/sell-list', 'get', {
  success: true,
  message: 'success',
  code: 200,
  data: [
    {
      id: 1,
      name: '二世谷',
      feeName: '春料金',
      startTime: '2023/01/01',
      endTime: '2023/10/01',
      priceList: [
        {
          name: '4-6人海狮',
          price: '41,000'
        },
        {
          name: '4-6人海狮',
          price: '42,000'
        },
        {
          name: '4-6人海狮',
          price: '43,000'
        },
        {
          name: '4-6人海狮',
          price: '45,000'
        }
      ]
    },
    {
      id: 2,
      name: '二世谷',
      feeName: '冬料金',
      startTime: '2023/01/03',
      endTime: '2023/12/02',
      priceList: [
        {
          name: '4-6人海狮',
          price: '45,000'
        },
        {
          name: '4-6人海狮',
          price: '45,000'
        }
      ]
    },
    {
      id: 3,
      name: '二世谷',
      feeName: '秋料金',
      startTime: '2023/01/02',
      endTime: '2023/11/01',
      priceList: []
    },
    {
      id: 4,
      name: '二世谷',
      feeName: '夏料金',
      startTime: '2023/01/02',
      endTime: '2023/11/01',
      priceList: []
    },
    {
      id: 5,
      name: '二世谷',
      feeName: '夏料金',
      startTime: '2023/01/02',
      endTime: '2023/11/01',
      priceList: []
    }
  ]
})

export default Mock
