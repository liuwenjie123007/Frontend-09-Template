学习笔记

# 工具链

## 初始化工具 Yeoman

工具的开端：脚手架 -> generator

#### Yeomen 安装

```shell
npm init
npm install yeoman-generator
# 官方文档有坑，最新版本不能用npmInstall
npm install yeoman-generator@4.11.0
npm install -g yo
```

文档：https://yeoman.io/authoring/index.html



```shell
# 在pakage.json 设置 "name": "generator-toolchain"
# 文件夹名字需要和toolchain保持一致
npm link
yo toolchain
```



## Webpack基本知识

webpack最初是为了让node程序在浏览器运行而设计的打包工具。

因为并不是基于web开发的场景设计的，设计上对于web开发有不便之处。



webpack核心功能： 多文件合并



webpack-cli 提供webpack的命令



#### Webpack安装

```shell
npm install webpack-cli -g
npm install webpack -g

# 非全局安装
npm webpack-cli --save-dev
npx webpack
```



### 配置

- Entry
  - 输出文件
- loader
  - webpack的灵魂，核心机制
  - 把一个source变成目标代码
  - Test 规定文件
  - 可以使用多个Loader处理同一个文件



## Babel 基本知识

Babel用于把新版本JS转换成老版本JS



```shell
npm install -g @babel/cli @babel/core

babel ./sample.js > 1.js
```



### 配置

.babelrc

Babel由于配置繁琐，有预设配置preset

```shell
npm install --save @babel/preset-env
```



```json
{
  "presets": ["@babel/preset-env"]
}
```

