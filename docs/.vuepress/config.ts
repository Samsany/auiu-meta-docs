import { defineUserConfig } from 'vuepress'
import theme from './theme'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'AUIU_META',
  description: 'AUIU-META微服务开发平台技术教程、部署文档',

  base: '/',

  theme
})
