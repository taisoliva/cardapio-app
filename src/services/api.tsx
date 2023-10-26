import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.URL,
})

export default instance
