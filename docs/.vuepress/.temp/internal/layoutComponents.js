import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/dries/WorkSpace/WebstormProjects/auiu-meta-docs/node_modules/vuepress-theme-hope/lib/client/layouts/404.js")),
  "Layout": defineAsyncComponent(() => import("/Users/dries/WorkSpace/WebstormProjects/auiu-meta-docs/node_modules/vuepress-theme-hope/lib/client/layouts/Layout.js")),
  "Slide": defineAsyncComponent(() => import("/Users/dries/WorkSpace/WebstormProjects/auiu-meta-docs/node_modules/vuepress-theme-hope/lib/client/layouts/Slide.js")),
  "Blog": defineAsyncComponent(() => import("/Users/dries/WorkSpace/WebstormProjects/auiu-meta-docs/node_modules/vuepress-theme-hope/lib/client/module/blog/layouts/Blog.js")),
}
