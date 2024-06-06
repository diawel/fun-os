import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@/', replacement: `${__dirname}/src/` }],
  },
  plugins: [react(), vanillaExtractPlugin()],
})
