import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //to getrid of cors error that we used to get while connecting to backend
  //we willuse proxy
 server:{
  proxy:{
    '/api':'http://localhost:3000'
  }
 },
  plugins: [react()],
})
