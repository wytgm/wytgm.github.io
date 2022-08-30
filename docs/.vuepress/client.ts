import { defineClientConfig } from '@vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'


// import * as ElIcons from '@element-plus/icons-vue'
export default defineClientConfig({
  enhance({ app, router, siteData }) {
    //使用Element Plus
    app.use(ElementPlus);
    //使用ElementPlus图标
    for (const icon in Icons) {
      // eslint-disable-next-line import/namespace
      app.component('ElIcon' + icon, Icons[icon])
    }
    /* 使用ElementPlus图标
    Object.keys(ElIcons).forEach(key => {
        app.component(key, ElIcons[key])
      }) 
    */
   
  },
  setup() {},
  rootComponents: [],
})
