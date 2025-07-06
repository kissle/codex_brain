import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  srcDir: 'app',
  extends: [
    '../../packages/basic-layer',
    '../../packages/note-core',
    '../../packages/note-api',
    '../../packages/note-ui'
  ],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true }
})
