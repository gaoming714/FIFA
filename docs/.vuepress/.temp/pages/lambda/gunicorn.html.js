import comp from "D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/lambda/gunicorn.html.vue"
const data = JSON.parse("{\"path\":\"/lambda/gunicorn.html\",\"title\":\"gunicorn\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"1. nginx\",\"slug\":\"_1-nginx\",\"link\":\"#_1-nginx\",\"children\":[]},{\"level\":2,\"title\":\"2.1 gunicorn one app type I,\",\"slug\":\"_2-1-gunicorn-one-app-type-i\",\"link\":\"#_2-1-gunicorn-one-app-type-i\",\"children\":[]},{\"level\":2,\"title\":\"2.2 gunicorn one app type II\",\"slug\":\"_2-2-gunicorn-one-app-type-ii\",\"link\":\"#_2-2-gunicorn-one-app-type-ii\",\"children\":[]},{\"level\":2,\"title\":\"2.3 gunicorn one app type III\",\"slug\":\"_2-3-gunicorn-one-app-type-iii\",\"link\":\"#_2-3-gunicorn-one-app-type-iii\",\"children\":[]},{\"level\":2,\"title\":\"2.4 gunicorn Mutiweb App type I  (not work)\",\"slug\":\"_2-4-gunicorn-mutiweb-app-type-i-not-work\",\"link\":\"#_2-4-gunicorn-mutiweb-app-type-i-not-work\",\"children\":[]},{\"level\":2,\"title\":\"3. command systemd\",\"slug\":\"_3-command-systemd\",\"link\":\"#_3-command-systemd\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"lambda/gunicorn.md\"}")
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
