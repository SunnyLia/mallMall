## doubanMarket豆瓣市集

## 项目说明

仿WEB端豆瓣市集(https://shiji.douban.com/) 开发的一个VUE项目，共21个页面（路由地址），基本涉及到豆瓣市集所有页面(我是这么认为的)。项目数据主要来源于豆瓣市集请求的XHR，由于涉及到权限问题，个人中心及购物车等数据是直接copy保存到static的json内的(我很纳闷的是，商品详情页面的数据结构解析出了问题...)。项目是利用业余时间开发的，没有借助任何ui库，目前正准备学习es6语法应用到项目中，持续完善中...

主要技术：vue2 + vue-router + vuex + vue-cli + axios + rem + vue-awesome-swiper + vue-infinite-scroll + vue-lazyload等

主要模块：市集首页 + 分类 + 购物车 + 个人中心 + 商品详情 + 店铺详情 + 登录注册 + 订单等

## 项目安装

git clone https://github.com/SunnyLia/mallMall.git  用git将项目clone到本地

npm install                                         通过命令安装项目依赖

npm run dev                                         运行项目

## 项目结构
```javascript

├── build 
├── config  
├── node_modules
├── src
│   ├──assets
│   ├──components
│   ├──mobile
│   │   ├──cart
│   │   ├──category
│   │   ├──detail
│   │   ├──home
│   │   ├──login
│   │   ├──mine
│   │   ├──order
│   │   ├──search
│   │   └──shops
│   ├──router
│   ├──store
│   │   ├──actions.js
│   │   ├──getters.js
│   │   ├──index.js
│   │   ├──mutation-types.js
│   │   └──mutations.js
│   ├──App.vue
│   └──main.js
├── index.html
├── static
├── package.json
├── README.md
├── package.json
│ 
│ 
```
