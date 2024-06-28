import comp from "D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/lambda/vim.html.vue"
const data = JSON.parse("{\"path\":\"/lambda/vim.html\",\"title\":\"vim\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Vundle (deprecated)\",\"slug\":\"vundle-deprecated\",\"link\":\"#vundle-deprecated\",\"children\":[]},{\"level\":2,\"title\":\"vim Plug\",\"slug\":\"vim-plug\",\"link\":\"#vim-plug\",\"children\":[]},{\"level\":2,\"title\":\"Tips\",\"slug\":\"tips\",\"link\":\"#tips\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"lambda/vim.md\"}")
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
