学习笔记

# 发布系统



## 实现一个线上Web服务

### 初始化Server

```shell
sudo apt install nodejs
sudo apt install npm
sudo npm install -g n
PATH="$PATH"
```

### 利用Express, 编写服务器

```shell
npx express-generator
```



启动ssh服务

```shell
service ssh start
```



```shell
# 传文件
scp -P 22 -r ./* liuwenjie@192.168.57.3:/home/liuwenjie/server
```



### 用Node.js 启动一个简单的Server

### 编写简单的发送请求功能

### 简单了解Node.js的流

- [ https://nodejs.org/docs/latest-v13.x/api/stream.html#stream_class_stream_readable](https://nodejs.org/docs/latest-v13.x/api/stream.html#stream_class_stream_readable)



### 改造Server

### 实现多文件发布

压缩相关的包

- Archiver
- unzipper



```shell
# publish-tool
npm install --save archiver

# publish-server
npm install --save unzipper
```



### 用GitHub OAuth做一个登录实例

