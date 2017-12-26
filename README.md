# doubanMarket

# 项目说明

  仿豆瓣市集WEB端开发的一个VUE项目，数据来源于豆瓣市集请求的XHR，由于涉及到权限问题，个人中心及购物车数据直接copy保存到static内
  主要技术：vue2 + vue-router + vuex + vue-cli + axios + rem + vue-awesome-swiper + vue-infinite-scroll + vue-lazyload等
  主要模块：市集首页 + 分类 + 购物车 + 个人中心 + 商品详情 + 店铺详情 + 登录注册 + 订单等

#项目安装

  git clone https://github.com/SunnyLia/mallMall.git  用git将项目clone到本地
  npm install                                         通过命令安装项目依赖
  npm run dev                                         运行项目

#项目结构

# 项目结构
```javascript
.

├── build // vue-cli 自带的配置文件
├── config  // vue-cli 自带的配置文件
├── dish
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
├── static
├── package.json
├── README.md
├── index.html
├── package.json
│ 
│ 
```
