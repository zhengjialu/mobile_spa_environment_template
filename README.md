# Mobile 单页面 Template 环境

> 框架 React：https://react.docschina.org/  
> UI 库 Mobile Ant Design：https://mobile.ant.design/index-cn  
> 路由 React-router：https://reactrouter.com/  
> 状态管理 Mobx：https://cn.mobx.js.org/

```
├── README.md
├── config                         环境配置目录
│   ├── project.config.js          开发环境配置项
│   └── webpack.config.js          webpack 配置
├── mock                           mock 数据配置目录
│   └── mock-hello.json
├── postcss.config.js              CSS 预处理配置
├── package.json
├── .babelrc                       babel 配置项
├── .nycrc                         单元测试配置项
├── .gitignore
├── src                            页面开发
│   ├── assets                     项目资源
│   │   ├── icons                  项目 icon 资源
│   │   └── images                 项目 image 资源
│   ├── common                     公共方法
│   │   ├── request-io.js          IO 请求工具
│   │   └── utils.js               自定义工具函数
│   ├── components                 页面组件
│   ├── index.ejs                  入口文件
│   ├── layout                     项目页面布局
│   │   ├── frame                  项目全局框架
│   │   │   ├── frame.jsx
│   │   │   ├── frame.styl
│   │   │   ├── index.js
│   ├── pages                      前端页面
│   │   ├── index.jsx              路由渲染定义
│   │   └── page-hello             项目模块
│   │       ├── hello.styl         模块样式
│   │       ├── index.js           模块资源入口文件
│   │       ├── io.js              页面 IO 定义
│   │       ├── page-hello.jsx     模块开发内容
│   │       └── store.js           状态管理
│   └── router                     路由地址配置
│       └── index.js               路由跳转定义
├── test                           单元测试
│   └── *.test.js                  单元测试文件
└── mobile-project-tree
```
