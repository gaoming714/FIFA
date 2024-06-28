import comp from "D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/lambda/systemctl.html.vue"
const data = JSON.parse("{\"path\":\"/lambda/systemctl.html\",\"title\":\"systemctl.serivce\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Step:\",\"slug\":\"step\",\"link\":\"#step\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"lambda/systemctl.md\"}")
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
