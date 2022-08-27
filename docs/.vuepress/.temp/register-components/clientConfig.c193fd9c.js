import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("catDazi", defineAsyncComponent(() => import("E:/save/Vuepress/docs/.vuepress/components/catDazi.vue"))),
      app.component("Sakura", defineAsyncComponent(() => import("E:/save/Vuepress/docs/.vuepress/components/Sakura.vue"))),
      app.component("video", defineAsyncComponent(() => import("E:/save/Vuepress/docs/.vuepress/components/video.vue")))
  },
}
