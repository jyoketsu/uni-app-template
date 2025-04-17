# uni-app-template

[官方文档](https://uniapp.dcloud.net.cn/tutorial/)  
[微信小程序文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)  
[官方示例](https://github.com/dcloudio/hello-uniapp/)

## 目录结构

```
┌─uniCloud              云空间目录，支付宝小程序云为uniCloud-alipay，阿里云为uniCloud-aliyun，腾讯云为uniCloud-tcb（详见uniCloud）
│─components            符合vue组件规范的uni-app组件目录
│  └─comp-a.vue         可复用的a组件
├─utssdk                存放uts文件（已废弃）
├─pages                 业务页面文件存放的目录
│  ├─index
│  │  └─index.vue       index页面
│  └─list
│     └─list.vue        list页面
├─static                存放应用引用的本地静态资源（如图片、视频等）的目录，注意：静态资源都应存放于此目录
├─uni_modules           存放uni_module 详见
├─platforms             存放各平台专用页面的目录，详见
├─nativeplugins         App原生语言插件 详见
├─nativeResources       App端原生资源目录
│  ├─android            Android原生资源目录 详见
|  └─ios                iOS原生资源目录 详见
├─hybrid                App端存放本地html文件的目录，详见
├─wxcomponents          存放微信小程序、QQ小程序组件的目录，详见
├─mycomponents          存放支付宝小程序组件的目录，详见
├─swancomponents        存放百度小程序组件的目录，详见
├─ttcomponents          存放抖音小程序、飞书小程序组件的目录，详见
├─kscomponents          存放快手小程序组件的目录，详见
├─jdcomponents          存放京东小程序组件的目录，详见
├─unpackage             非工程代码，一般存放运行或发行的编译结果
├─main.js               Vue初始化入口文件
├─App.vue               应用配置，用来配置App全局样式以及监听 应用生命周期
├─pages.json            配置页面路由、导航条、选项卡等页面类信息，详见
├─manifest.json         配置应用名称、appid、logo、版本等打包信息，详见
├─AndroidManifest.xml   Android原生应用清单文件 详见
├─Info.plist            iOS原生应用配置文件 详见
└─uni.scss              内置的常用样式变量
```

## 页面

- [pages.json](./src/pages.json)  
- [page.vue](./src/pages/start/page.vue)  
- [route.vue](./src/pages/start/route.vue)

## 样式

- [uni.scss](./src/uni.scss)  
- [global.scss](./src/global.scss)  
- [App.vue](./src/App.vue)

## 宽屏适配

- [pages.json](./src/pages.json)  
- [left-window.vue](./src/windows/left-window.vue)  
- [top-window.vue](./src/windows/top-window.vue)  
- [adapt.vue](./src/pages/start/adapt.vue)

## 暗黑模式
- 配置
  - [manifest.json](./src/manifest.json) 
  - [theme.json](./src/theme.json) 
- 使用
  - [pages.json](./src/pages.json) 
  - [dark-mode.vue](./src/pages/start/dark-mode.vue)
 
 

