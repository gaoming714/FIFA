import comp from "D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/lambda/mysql.html.vue"
const data = JSON.parse("{\"path\":\"/lambda/mysql.html\",\"title\":\"Mysql\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"lambda/mysql.md\"}")
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
