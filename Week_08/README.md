学习笔记



## 浏览器工作原理

### HTTP 基础知识

- URL - HTTP
- HTML - parse
- DOM - css computing
- DOM with CSS - layout
- DOM with position - render
- Bitmap



## 状态机 | 有限状态机

- 每一个状态都是一个机器
  - 在每一个机器里，我们可以做计算、存储、输出......
  - 所有的这些机器接受的输入是一致的
  - 状态机的每一个机器本身没有状态，如果我们用函数来表示的话，他应该是纯函数（无副作用）
- 每一个机器知道下一个状态
  - 每个机器都有确定的下一个状态（Moore)
  - 每个机器根据输入决定下一个状态（Mealy)



### JS中的有限状态机 (Mealy)

```javascript
// 每个函数时一个状态
function state(input) // 函数参数就是输入
{
  // 在函数中，可以自由编写代码，处理每个状态的逻辑
  return next; // 返回值作为下一个状态
}

// 以下是调用
while(input) {
  // 获取输入
  state = state(input); // 把状态机的返回值作为下一个状态
}
```



### 使用有限状态机处理字符串

- 在一个字符串中，找到字符“a”

- 在一个字符串中，找到字符"ab";
- 在一个字符串中，找到字符“abcdef”
- 我们如何使用状态机处理诸如"abcabx"这样的字符串？



### 额外内容

- 作业： 使用状态机完成" abababx"的处理。
- 可选作业： 我们如何用状态机处理完全未知的pattern?
  - 参考资料： 字符串KMP算法





## 浏览器工作原理

### HTTP请求 | HTTP的协议解析

#### ISO-OSI七层网络模型

- HTTP
  - 应用
  - 表示
  - 回话
- TCP
  - 传输
- Internet (IP)
  - 网络
- 4G/5G/Wi-Fi
  - 数据链路
  - 物理层



#### TCP与IP的一些基础知识

- 流
- 包
- 端口
- IP地址
- require('net')
- libnet/libpcap



#### HTTP

- Request
- Response



### HTTP请求 | HTTP请求

- 设计一个HTTP请求的类
- content type 是一个必要的字段，要有默认值
- body是KV格式
- 不同的content-type影响body的格式





#### Send函数

- 在Request的构造器中收集必要的信息
- 设计一个send函数，把请求真实发送到服务器
- end函数应该是异步的，所以返回Promise



#### 发送请求

- 设计支持已有的connection或者自己新建connection
- 收到数据传给parser
- 根据parser的状态resolve Promise



#### Response解析

- Response必须分段构造，所以我们要用一个ResponseParser来“装配”
- ResponseParser分段处理ResponseText, 我们用状态机来分析文本的结构



#### BodyParser总结

- Response的body可能根据Content-Type有不同的结构，因此我们会采用子Parser的结构来解决问题
- 以TrunkedBodyParser为例，我们同样用状态机来处理body的格式