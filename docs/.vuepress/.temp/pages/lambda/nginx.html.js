import comp from "D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/lambda/nginx.html.vue"
const data = JSON.parse("{\"path\":\"/lambda/nginx.html\",\"title\":\"nginx\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Install niginx\",\"slug\":\"install-niginx\",\"link\":\"#install-niginx\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"lambda/nginx.md\"}")
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
