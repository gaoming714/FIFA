import comp from "D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/lambda/Packages.html.vue"
const data = JSON.parse("{\"path\":\"/lambda/Packages.html\",\"title\":\"Packages\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Linux\",\"slug\":\"linux\",\"link\":\"#linux\",\"children\":[]},{\"level\":2,\"title\":\"git on windows\",\"slug\":\"git-on-windows\",\"link\":\"#git-on-windows\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"lambda/Packages.md\"}")
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
