import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance';
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { searchPlugin } from '@vuepress/plugin-search'
import gotop from 'vuepress-plugin-go-top'

export default defineUserConfig({
  //站点配置
  base:"/wytBlog/",
  //语言标题描述配置
  lang: 'zh-CN',
  title: 'wyt   的知识库',
  description: '学无止境',
  /*==============================配置主题==================================== */ 
  theme: defaultTheme({
    logo: "",
    lastUpdated: false,
/*==============================配置导航栏==================================== */ 
    navbar: [
      {
        text:'前端工程化',
        link:'/Web/'
      },
      {
        text:'后端语言',
        link:'/Language/'
      },
      {
        text:'项目实战',
        link:'/Project/'
      },
      {
        text:'软考',
        link:'/Study/'
      },
      {
        text:'二维三维',
        link:'/2D3D/'
      },
  ],
/*==============================配置侧边栏==================================== */ 
    sidebar:{
      '/Web/': [
        {
          text: '基础',
          //collapsible: true,
          children: ['浏览器.md', '计算机网络.md','CSS.md'],
        },
        {
          text: '语言',
          //collapsible: true,
          children: ['JavaScript.md', 'ES6.md','TypeScript.md','jQuery.md'],
        },
        {
          text: '数据结构与算法',
          children: ['数据结构.md', '常见算法.md','leetcode刷题指南'],
        },
        {
          text: '框架',
          //collapsible: true,
          children: ['vue.md', 'react.md','Angular.md','nodejs.md','Three.md'],
        },
        {
          text: '跨端',
          //collapsible: true,
          children: [],
        },
        
        {
          text: '工程化',
          //collapsible: true,
          children: ['前端性能优化.md','Webpack.md', 'Vite.md'],
        },
        
        {
          text: '团队协作',
          //collapsible: true,
          children: ['git.md'],
        },
      ],
      '/Project/': [
        {
          text: '系统项目',
          //collapsible: true,
          children: ['基于springboot的摄影网站.md', 'Vuepress搭建个人网站'],
        },
        {
          text: '三维项目',
          //collapsible: true,
          children: ['小鹤观图.md', ],
        },
        {
          text: '二维项目',
          children: ['大广赛.md', ],
        },
      ]









    },
  }),
/*==============================配置插件==================================== */ 
  plugins: [
    //全局注册组件
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    //markdown 增强
    mdEnhancePlugin({
      container:true,
      tabs:true,
      mark:true,
      //demo: true,
      codetabs: true,
    }),
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索文档',
        },
      },
    }),
    gotop({}),
  




  ]
})