# 后台管理系统 vue3.0-admin-spa
使用到的技术栈：vue + axios + vue-router + vuex(spa必备) + element-ui + ES6 + webpack + npm

[测试地址(原项目测试地址)](https://lss5270.github.io/vue-admin-spa-demo)

## 前言
本项目在vue-admin-spa的基础上从vue2.0升级到vue3.0，并更换网络请求控件为axios，并在不断完善中。
- 登陆注册（含MD5加密）
- 权限控制，菜单根据用户接口回来的权限数据进行显隐，手敲地址栏，会跳到404（地址栏错误）或401（地址栏正确但无权限），并可以在系统设置中动态修改权限
- 切换主题，完全支持用户手动切换主题和记住主题
- 全部数据进行本地json模拟，二次开发者，只需要把json路径替换成实际接口路径即可，即使是新手也能轻松搞定撸后台管理系统
- 全部动态操作的按钮点击元素，都已经在控制台打印出相关参数，实际开发时把这些参数按需提交给后端接口即可

- 新增了学生模块，使用的是本地真正api接口（接口不可使用）


``` **注意：该项目目前使用element-ui@1.3.3+版本,所以最低兼容 Vue 2.3.0**
```

## 功能(全部数据进行本地json模拟)
- 系统说明
- 登录/注销
- 密码修改
- 个人主页
- 头像上传
- 权限验证
- 修改权限
- 侧边栏
- 面包屑（感觉看着比较凌乱，所以注释起来了）
- 富文本编辑器
- 切换主题（点击头像下拉）
- 表单校验、提交
- 列表增删改查、排序、导出(后台管理系统基本功能)
- 401，404重定向页面
- 导出excel
- views-tab
- PC端更多功能即将开放……

## 开发
```bash
    # 安装依赖
    npm install

    # 本地开发 开启服务
    npm run dev
```

## 发布
```bash

    # 构建生产环境
    npm run build:prod
```
## 模拟运行正式环境
```bash
    # nginx环境下运行
    1.准备nginx环境，自行到nginx官网（https://nginx.org/）下载，并解压
    2.双击build.bat后根目录生成一个dist包，把dist整个文件夹拷贝到nginx解压后的html下
    3.启动nginx服务：双击nginx.exe
    4.访问入口：http://localhost/dist/index.html
    ………

    8.关闭nginx服务：直接删进程

    # tomcat环境下运行
    参照nginx步骤即可
```

## 关于图标
```
    本项目使用了两套图标系统，具体使用方法参照以下官方链接:
    1.http://element.eleme.io/#/zh-CN/component/icon
    2.http://fontawesome.io/icons/
    使用方法：
    a.先通过npm安装在项目中
    b.在main.js中引入  import 'font-awesome/css/font-awesome.css'
    c.在使用图标的地方放置图标<i class="fa fa-home" aria-hidden="true"></i>
```
## 关于UI系统
```
    由于bootstrap不支持mvvm已弃用，本项目使用了全新的elementUI系统，具体使用方法参照以下官方链接:
    1.http://element.eleme.io/#/zh-CN/component/installation

```

## 关于学生模块的api接口
```
    1.学生模块功能使用了本地api接口，若想正常运行，请下载另外一个node项目（https://github.com/lss5270/vue-admin-spa-api），并且在本地启动该node 项目。
    2.该node项目源码，相当于其他后端语言（例如java）提供增删查改接口的源代码。
    
```

## 目录结构
```shell
├── README.md
├── babel.config.js                        // babel配置文件
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico                        // favicon图标
│   ├── img
│   ├── index.html                         // html模板
│   ├── manifest.json
│   ├── robots.txt
│   └── static                             // 第三方不打包资源
├── src
│   ├── App.vue                            // 入口页面
│   ├── assets                             // 主题 字体等静态资源
│   ├── components                         // 全局公用组件。不直接显示
│   ├── directive
│   ├── filters                            // 全局filter
│   ├── global                             // 全局指令
│   ├── main.js                            // 入口 加载组件 初始化等
│   ├── registerServiceWorker.js
│   ├── router                            // 路由
│   ├── store                             // 全局状态管理
│   ├── utils                             // 全局公用方法
│   ├── vendor
│   └── views                             // view视图层
└── vue.config.js                         // webpack配置相关
```


## 状态管理
目前只有用户信息、菜单权限、app配置相关状态使用vuex存储在全局，其它数据都由每个业务组件自己管理。







