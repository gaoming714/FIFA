import comp from "D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/delta/PATH.html.vue"
const data = JSON.parse("{\"path\":\"/delta/PATH.html\",\"title\":\"the PATH of config\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"delta/PATH.md\"}")
export { comp, data }

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
