
# 咸鱼cv

## 目录结构

```
src/
├── index.html
├── index.js
├── base.css        在normalize.css基础上，业务定制的基础样式
├── assets/         图片等静态资源，可直接放在assets，不用另建images之类的目录
├── actions/
├── components/     业务组件
├── constants/      统一导出一些必要的常量
├── containers/
├── middleware/     中间件
├── reducers/
└── store/
```

## 涉及技术栈 (RRRW)

- [x] [React](https://facebook.github.io/react/)
- [x] [Redux](https://github.com/reactjs/redux)
- [x] [React Router Redux](https://github.com/reactjs/react-router-redux)
- [x] [Webpack](https://webpack.github.io)
- [x] [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)
- [x] [Babel](https://babeljs.io/)
- [x] [Autoprefixer](https://github.com/postcss/autoprefixer)
- [x] [PostCSS](https://github.com/postcss/postcss)
- [x] [CSS modules](https://github.com/outpunk/postcss-modules)
- [x] TodoMVC 示例

## 安装

```
$ npm install
```

## Watch & Hot Module Replace

```
$ npm start
```

## 生产环境构建

```
$ npm run build
```
