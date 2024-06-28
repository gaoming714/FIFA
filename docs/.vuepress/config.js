import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { photoSwipePlugin } from '@vuepress/plugin-photo-swipe'

export default defineUserConfig({
  lang: 'en-US',

  title: 'VuePress',
  description: 'My first VuePress Site',

  theme: defaultTheme({
    logo: 'winnie.png',

    navbar: ['/', '/get-started'],
    sidebar: [
      // SidebarItem
      {
        text: 'lambda',
        prefix: '/lambda/',
        link: '/lambda/',
        children: [
          'Alpha_nodejs.md', // resolved to `/foo/bar.md`
          'Alpha_python.md', // resolved to `/ray.md`
        ],
      },
    ],
  }),
  plugins: [
    docsearchPlugin({
      // options
    }),
    photoSwipePlugin({
      // options
    }),
  ],

  bundler: viteBundler(),
})
