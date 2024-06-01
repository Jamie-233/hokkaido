import axios from 'axios'

console.log(import.meta.env.VITE_BASE_API)

const service = axios.create({
  baseURL: '/api',
  timeout: 5000
})

export default service
