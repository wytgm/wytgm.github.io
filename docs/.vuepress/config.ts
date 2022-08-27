import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'


export default defineUserConfig({

  //站点配置
  base:"/wytBlog/",
  //语言标题描述配置
  lang: 'zh-CN',
  title: 'wyt   的知识库',
  description: '学无止境',
  //主题配置
  theme: defaultTheme({

    logo: "",
    lastUpdated: false,
    //导航栏配置
    navbar: [
      {
        text:"Web前端",link:"",
      },
      {
        text:"后端技术",link:"",
      },
      {
        text:"项目实战",link:"",
      },
      {
        text:"三维",link:"",
      },
      {
        text:"二维",link:"",
      },
    ],

  // 可折叠的侧边栏
  sidebar: [

  ],

  }),
  plugins: [
    registerComponentsPlugin({
      // 配置项
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ]
  
})