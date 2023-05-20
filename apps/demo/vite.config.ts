import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createCSSJSImportPlugin } from "vite-css-in-js"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), createCSSJSImportPlugin()],
})
