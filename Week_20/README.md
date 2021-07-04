# 持续集成



## 发布前检查的相关知识

### daily build 

通过服务端代码，每天晚上编译，看谁的代码出问题



### build verification test

构建的验证测试 （冒烟测试）

- 最基本最简单的case



### 在前端

- 由于编译时间短 --> 每次提交时编译
- 轻量级检查方式 --> lint
- 无头浏览器检查dom树





## Git Hooks基本用法

Clinet-site-hook

```sh
touch READNE.md
git init
open ./.git

chmod +x ./pre-commit
```





### 客户端Hook

- pre-commit

- Pre-push



### 服务端Hook

- Pre-receive



## ESLint 基本用法

```sh
npm init
npm install --save-dev eslint
npx eslint --init
npx eslint ./index.js
```



## ESLint API及高级用法

https://eslint.org/docs/developer-guide/nodejs-api



### 利用git stash解决工作区与缓冲区的冲突

```sh
git stash push -k
npx eslint ./index.js
git commit -m "..."
git stash pop
```

 

注意：客户端检查防君子不防小人



## 使用无头浏览器检查DOM

### chrome headless

https://developers.google.com/web/updates/2017/04/headless-chrome

```sh
alias chrome="/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome"
chrome --headless --dump-dom about:blank
chrome --headless --dump-dom about:blank > temp.txt
```



```sh
npm install --save-dev puppeteer
```









