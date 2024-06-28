export const redirects = JSON.parse("{\"/lambda/_sidebar.html\":\"/lambda/sidebar.html\",\"/sigma/_sidebar.html\":\"/sigma/sidebar.html\",\"/zeta/_sidebar.html\":\"/zeta/sidebar.html\",\"/delta/msys64_build/_sidebar.html\":\"/delta/msys64_build/sidebar.html\",\"/delta/ohmyzsh/_sidebar.html\":\"/delta/ohmyzsh/sidebar.html\",\"/delta/nginx/_sidebar.html\":\"/delta/nginx/sidebar.html\",\"/delta/Nightly/_sidebar.html\":\"/delta/Nightly/sidebar.html\",\"/delta/SourceCodePro/_sidebar.html\":\"/delta/SourceCodePro/sidebar.html\",\"/delta/ubuntu-source/_sidebar.html\":\"/delta/ubuntu-source/sidebar.html\",\"/delta/msys64_build/root/_sidebar.html\":\"/delta/msys64_build/root/sidebar.html\",\"/delta/nginx/vhosts.d/_sidebar.html\":\"/delta/nginx/vhosts.d/sidebar.html\",\"/delta/msys64_build/root/src/_sidebar.html\":\"/delta/msys64_build/root/src/sidebar.html\"}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/delta/PATH.html", { loader: () => import(/* webpackChunkName: "delta_PATH.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/delta/PATH.html.js"), meta: {"title":"the PATH of config"} }],
  ["/delta/", { loader: () => import(/* webpackChunkName: "delta_index.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/delta/index.html.js"), meta: {"title":"Home"} }],
  ["/lambda/Alpha_nodejs.html", { loader: () => import(/* webpackChunkName: "lambda_Alpha_nodejs.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/lambda/Alpha_nodejs.html.js"), meta: {"title":"nodejs AlphaBeta"} }],
  ["/lambda/Alpha_python.html", { loader: () => import(/* webpackChunkName: "lambda_Alpha_python.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/lambda/Alpha_python.html.js"), meta: {"title":"Python AlphaBeta"} }],
  ["/lambda/Alpha_shell.html", { loader: () => import(/* webpackChunkName: "lambda_Alpha_shell.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/lambda/Alpha_shell.html.js"), meta: {"title":""} }],
  ["/lambda/Git_config.html", { loader: () => import(/* webpackChunkName: "lambda_Git_config.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/lambda/Git_config.html.js"), meta: {"title":"git配置"} }],
  ["/lambda/Git_guide.html", { loader: () => import(/* webpackChunkName: "lambda_Git_guide.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/lambda/Git_guide.html.js"), meta: {"title":"Git Guild"} }],
  ["/lambda/Git_server.html", { loader: () => import(/* webpackChunkName: "lambda_Git_server.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/lambda/Git_server.html.js"), meta: {"title":"Git server"} }],
  ["/lambda/gunicorn.html", { loader: () => import(/* webpackChunkName: "lambda_gunicorn.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/lambda/gunicorn.html.js"), meta: {"title":"gunicorn"} }],
  ["/lambda/Install_linux_suse.html", { loader: () => import(/* webpackChunkName: "lambda_Install_linux_suse.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/lambda/Install_linux_suse.html.js"), meta: {"title":"opensuse install"} }],
  ["/lambda/Install_msys2.html", { loader: () => import(/* webpackChunkName: "lambda_Install_msys2.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/lambda/Install_msys2.html.js"), meta: {"title":"配置一个msys2"} }],
  ["/lambda/Install_server_debian.html", { loader: () => import(/* webpackChunkName: "lambda_Install_server_debian.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/lambda/Install_server_debian.html.js"), meta: {"title":""} }],
  ["/lambda/jupyter_server.html", { loader: () => import(/* webpackChunkName: "lambda_jupyter_server.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/lambda/jupyter_server.html.js"), meta: {"title":"Install jupyter server"} }],
  ["/lambda/logging_python.html", { loader: () => import(/* webpackChunkName: "lambda_logging_python.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/lambda/logging_python.html.js"), meta: {"title":"Python log"} }],
  ["/lambda/mysql.html", { loader: () => import(/* webpackChunkName: "lambda_mysql.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/lambda/mysql.html.js"), meta: {"title":"Mysql"} }],
  ["/lambda/nginx.html", { loader: () => import(/* webpackChunkName: "lambda_nginx.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/lambda/nginx.html.js"), meta: {"title":"nginx"} }],
  ["/lambda/nodejs.html", { loader: () => import(/* webpackChunkName: "lambda_nodejs.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/lambda/nodejs.html.js"), meta: {"title":"Full Stack Developer"} }],
  ["/lambda/Packages.html", { loader: () => import(/* webpackChunkName: "lambda_Packages.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/lambda/Packages.html.js"), meta: {"title":"Packages"} }],
  ["/lambda/", { loader: () => import(/* webpackChunkName: "lambda_index.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/lambda/index.html.js"), meta: {"title":""} }],
  ["/lambda/selenium.html", { loader: () => import(/* webpackChunkName: "lambda_selenium.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/lambda/selenium.html.js"), meta: {"title":"selenium"} }],
  ["/lambda/Stack.html", { loader: () => import(/* webpackChunkName: "lambda_Stack.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/lambda/Stack.html.js"), meta: {"title":"Details about tech stacks"} }],
  ["/lambda/sublime.html", { loader: () => import(/* webpackChunkName: "lambda_sublime.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/lambda/sublime.html.js"), meta: {"title":"sublime"} }],
  ["/lambda/systemctl.html", { loader: () => import(/* webpackChunkName: "lambda_systemctl.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/lambda/systemctl.html.js"), meta: {"title":"systemctl.serivce"} }],
  ["/lambda/vim.html", { loader: () => import(/* webpackChunkName: "lambda_vim.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/lambda/vim.html.js"), meta: {"title":"vim"} }],
  ["/lambda/sidebar.html", { loader: () => import(/* webpackChunkName: "lambda_sidebar.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/lambda/sidebar.html.js"), meta: {"title":""} }],
  ["/sigma/HEXO_travis%20CI.html", { loader: () => import(/* webpackChunkName: "sigma_HEXO_travis CI.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/sigma/HEXO_travis CI.html.js"), meta: {"title":"HEXO with Travis CI"} }],
  ["/sigma/", { loader: () => import(/* webpackChunkName: "sigma_index.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/sigma/index.html.js"), meta: {"title":""} }],
  ["/sigma/sidebar.html", { loader: () => import(/* webpackChunkName: "sigma_sidebar.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/sigma/sidebar.html.js"), meta: {"title":""} }],
  ["/zeta/DNS.html", { loader: () => import(/* webpackChunkName: "zeta_DNS.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/zeta/DNS.html.js"), meta: {"title":"free DNS ip address"} }],
  ["/zeta/excel%20%E7%A0%B4%E8%A7%A3%E4%BF%9D%E6%8A%A4%E6%96%87%E6%A1%A3%E5%AE%8F%E4%BB%A3%E7%A0%81.html", { loader: () => import(/* webpackChunkName: "zeta_excel 破解保护文档宏代码.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/zeta/excel 破解保护文档宏代码.html.js"), meta: {"title":"破解保护密码的Excel文件"} }],
  ["/zeta/Install%20windows%2010.html", { loader: () => import(/* webpackChunkName: "zeta_Install windows 10.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/zeta/Install windows 10.html.js"), meta: {"title":"Install windows 10"} }],
  ["/zeta/Linux_Label.html", { loader: () => import(/* webpackChunkName: "zeta_Linux_Label.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/zeta/Linux_Label.html.js"), meta: {"title":"Linux_Label"} }],
  ["/zeta/", { loader: () => import(/* webpackChunkName: "zeta_index.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/zeta/index.html.js"), meta: {"title":""} }],
  ["/zeta/sidebar.html", { loader: () => import(/* webpackChunkName: "zeta_sidebar.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/zeta/sidebar.html.js"), meta: {"title":""} }],
  ["/delta/msys64_build/", { loader: () => import(/* webpackChunkName: "delta_msys64_build_index.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/delta/msys64_build/index.html.js"), meta: {"title":""} }],
  ["/delta/msys64_build/sidebar.html", { loader: () => import(/* webpackChunkName: "delta_msys64_build_sidebar.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/delta/msys64_build/sidebar.html.js"), meta: {"title":""} }],
  ["/delta/ohmyzsh/", { loader: () => import(/* webpackChunkName: "delta_ohmyzsh_index.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/delta/ohmyzsh/index.html.js"), meta: {"title":""} }],
  ["/delta/ohmyzsh/sidebar.html", { loader: () => import(/* webpackChunkName: "delta_ohmyzsh_sidebar.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/delta/ohmyzsh/sidebar.html.js"), meta: {"title":""} }],
  ["/delta/nginx/", { loader: () => import(/* webpackChunkName: "delta_nginx_index.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/delta/nginx/index.html.js"), meta: {"title":""} }],
  ["/delta/nginx/sidebar.html", { loader: () => import(/* webpackChunkName: "delta_nginx_sidebar.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/delta/nginx/sidebar.html.js"), meta: {"title":""} }],
  ["/delta/Nightly/", { loader: () => import(/* webpackChunkName: "delta_Nightly_index.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/delta/Nightly/index.html.js"), meta: {"title":""} }],
  ["/delta/Nightly/sidebar.html", { loader: () => import(/* webpackChunkName: "delta_Nightly_sidebar.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/delta/Nightly/sidebar.html.js"), meta: {"title":""} }],
  ["/delta/SourceCodePro/", { loader: () => import(/* webpackChunkName: "delta_SourceCodePro_index.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/delta/SourceCodePro/index.html.js"), meta: {"title":""} }],
  ["/delta/SourceCodePro/sidebar.html", { loader: () => import(/* webpackChunkName: "delta_SourceCodePro_sidebar.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/delta/SourceCodePro/sidebar.html.js"), meta: {"title":""} }],
  ["/delta/ubuntu-source/", { loader: () => import(/* webpackChunkName: "delta_ubuntu-source_index.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/delta/ubuntu-source/index.html.js"), meta: {"title":""} }],
  ["/delta/ubuntu-source/sidebar.html", { loader: () => import(/* webpackChunkName: "delta_ubuntu-source_sidebar.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/delta/ubuntu-source/sidebar.html.js"), meta: {"title":""} }],
  ["/delta/msys64_build/root/", { loader: () => import(/* webpackChunkName: "delta_msys64_build_root_index.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/delta/msys64_build/root/index.html.js"), meta: {"title":""} }],
  ["/delta/msys64_build/root/sidebar.html", { loader: () => import(/* webpackChunkName: "delta_msys64_build_root_sidebar.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/delta/msys64_build/root/sidebar.html.js"), meta: {"title":""} }],
  ["/delta/nginx/vhosts.d/", { loader: () => import(/* webpackChunkName: "delta_nginx_vhosts.d_index.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/delta/nginx/vhosts.d/index.html.js"), meta: {"title":""} }],
  ["/delta/nginx/vhosts.d/sidebar.html", { loader: () => import(/* webpackChunkName: "delta_nginx_vhosts.d_sidebar.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/delta/nginx/vhosts.d/sidebar.html.js"), meta: {"title":""} }],
  ["/delta/msys64_build/root/src/", { loader: () => import(/* webpackChunkName: "delta_msys64_build_root_src_index.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/delta/msys64_build/root/src/index.html.js"), meta: {"title":""} }],
  ["/delta/msys64_build/root/src/sidebar.html", { loader: () => import(/* webpackChunkName: "delta_msys64_build_root_src_sidebar.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/delta/msys64_build/root/src/sidebar.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/bin/delta/nsq/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
