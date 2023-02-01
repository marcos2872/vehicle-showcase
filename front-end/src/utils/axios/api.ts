import axios from 'axios'

const url = import.meta.env.VITE_APP_BACK_END_URL || 'http://localhost:5180'

const api = axios.create({
  baseURL: url
})

export default api
