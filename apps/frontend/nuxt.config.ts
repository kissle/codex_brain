import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  extends: '../../packages/basic-layer',
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true }
})
