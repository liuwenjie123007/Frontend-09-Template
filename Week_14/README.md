学习笔记

# 组件化



## 组件的基本知识



### 组件的基本概念和基本组成部分

#### 对象与组件

- 对象
  - Properties
  - Methods
  - Inherit
- 组件
  - Properties
  - Methods
  - Inherit
  - Attribute
  - Config & State
  - Event
  - LifeCyle
  - Children



#### Compoennt

![截屏2021-06-05 20.37.20](/Users/liuwenjie/dev/learn/geek/winter/Frontend-09-Template/Week_14/截屏2021-06-05 20.37.20.png)



#### Attribue

- Attribute cs Property
  - Attribute 强调描述性
  - Property 强调从属关系

```html
Attribute:
<my-component attribute="v"/>
myComponent.getAttribute("a")
myComponent.setAttribute("a", "value");

Property:
myComponennt.a = "value";


<div class="cls1 cls2" style="color:blue"></div>
<script>
var div = document.getElementByTAgName('div');
div.className //cls1 cls2
div.style  // 对象
</script>

<a href="//m.taobao.com"></a>
<script>
var a = document.getElementByTagName('a');
a.href // "http://m.taobao.com", 这个URL是resolve过得过程
a.getAttribute('href') // "//m.taobao.com", 跟HTML代码中完全一致
</script>

<input value= "cute"/>
<script>
var input = document.getElementByTagName('input'); // 若property没有设置，则结果是attribute
input.value // cute
input.getAttribute('value'); //cute
input.value = 'hello'; // 若value属性已经设置， 则attribute不变， property变化，元素上世纪的效果是property优先
input.value // hello
input.getAttribute('value'); // cute
</script>
```





#### 如何设计组件状态

| Markup set | JS set | JS change | User Input Change |           |
| :--------: | :----: | :-------: | :---------------: | :-------: |
|     ❌      |   ✅    |     ✅     |        ？         | property  |
|     ✅      |   ✅    |     ✅     |        ？         | attribute |
|     ❌      |   ❌    |     ❌     |         ✅         |   state   |
|     ❌      |   ✅    |     ❌     |         ❌         |  config   |





#### Lifecyle

- created
- ...
- destroyed
- ![截屏2021-06-05 20.55.25](/Users/liuwenjie/dev/learn/geek/winter/Frontend-09-Template/Week_14/截屏2021-06-05 20.55.25.png)



#### Children

- Content 型 Children 与 Template 型 Children

```html
<my-botton><img />{{title}}</my-botton>

<my-list>
	<li><img />{{title}}</li>
</my-list>
```





## 为组件添加JSX语法

```shell
npm install -g webpack webpack-cli

npm install --save-dev webpack babel-loader

npm install --save-dev @babel/core @babel/preset-env

npm install --save-dev @babel/plugin-transform-react-jsx

npm install webpack-dev-server -g

npm install --save-dev webpack-cli 

# 使用以下指令启动开发者模式
webpack-cli serve --mode development
```

webpack配置

```js
module.exports = {
  entry: "./main.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  mode: "development",
};

```



## JSX的基本使用方法



## 轮播组件

