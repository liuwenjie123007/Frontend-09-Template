学习笔记

# 工具链

## 单元测试工具

### Mocha

#### 安装

```shell
npm install --global mocha
```



#### 用Babel解决export

.babelrc

```json
{
  "presets": ["@babel/preset-env"]
}
```





```shell
npm install --save-dev @babel/core @babel/register

mocha --require @babel/register

npm install --save-dev mocha
npm install --save-dev @babel/preset-env

./node_modules/.bin/mocha --require @babel/register
```





### code coverage

```json
.nycrc
{
   "extends": "@istanbuljs/nyc-config-babel"
}
```

```json
.babelrc
{
  "presets": ["@babel/preset-env"],
  "plugins": ["istanbul"]
}
```



```shell
npm install --save-dev nyc
npm install --g nyc
npm install --save-dev @istanbuljs/nyc-config-babel
npm install --save-dev babel-plugin-istanbul

nyc ./node_modules/.bin/mocha
```



```json
"scripts": {
  "test": "./node_modules/.bin/mocha --require @babel/register",
  "converage": "nyc ./node_modules/.bin/mocha"
},
```





### 所有工具与generator的集成

