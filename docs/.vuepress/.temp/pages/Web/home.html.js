export const data = JSON.parse("{\"key\":\"v-7ed2e034\",\"path\":\"/Web/home.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"actions\":[{\"text\":\"快速上手\",\"link\":\"/zh/guide/getting-started.html\",\"type\":\"primary\"},{\"text\":\"项目简介\",\"link\":\"/guide/\",\"type\":\"secondary\"}]},\"excerpt\":\"\",\"headers\":[],\"git\":{},\"filePathRelative\":\"Web/home.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
