学习笔记



# 重学JavaScript (一)



## 语言按语法分类

- 非形式语言
  - 中文，英文
- 形式语言
  - 乔姆斯基谱系
    - 0型 无限制文法
    - 1型 上下文相关文法
    - 2型 上下文无关文法
    - 3型 正则文法





## 产生式（BNF）

- 用尖括号括起来的名称来表示语法结构名
- 语法结构分成基础结构和需要其他语法结构定义的复合结构
  - 基础结构称终结符
  - 复合结构称非终结符
- 引号和中间的字符表示终结符
- 可以有括号
- *表示重复多次
- | 表示或
-  +表示至少一次



### 四则运算

- 1 + 2 * 3
- 终结符
  - Number
  -  (+ - * /)
- 非终结符
  - MultiplicativeExpression
  - AddtiveExpression



```xml
BNF
<MultiplicativeExpression>::=<Number>|
  	<MultiplicativeExpression>"*"<Number>|
  	<MultiplicativeExpression>"/"<Number>|
<AdditiveExpression>::=<MultiplicativeExpression>|
    <AdditiveExpression>"+"<MultiplicativeExpression>|
    <AdditiveExpression>"-"<MultiplicativeExpression>|
```



- 带括号的四则运算



```html
<Expression>::=
    "("<AdditiveExpression>")"|
    <Number>
<MultiplicativeExpression>::=<Number>|
  	<MultiplicativeExpression>"*"<Number>|
  	<MultiplicativeExpression>"/"<Number>|
<AdditiveExpression>::=<MultiplicativeExpression>|
    <AdditiveExpression>"+"<MultiplicativeExpression>|
    <AdditiveExpression>"-"<MultiplicativeExpression>|      
      
      

```



### 通过产生式理解乔姆斯基谱系

- 0型 无限制文法
  - ？：：= ？
- 1型 上下文相关文法
  - ？<A>?::=?<B>?
- 2型 上下文无关文法
  - <A>::=?
- 3型 正则文法
  - <A>::=<A>?
  - <A>::=?<A>❌



## 现代语言的特例

- C++中， * 可能表示称号或者指针， 具体是哪个，取决于星号前面的标识符是否被声明为类型
- VB中， < 可能是小于号， 也可能是XML直接量的开始，取决于当前位置是否可以接受XML直接量
- Python中，行首的tab符和空格会根据上一行的行首空白以一定规则被处理成虚拟终结符indent或者dedent
- JavaScript中， / 可能是除号，也可能是正则表达式开头，处理方式类似于VB，字符串末班中也需要处理}, 还有自动插入分号规则





## 语言的分类

- 形式语言--用途
  - 数据描述语言
    - HTML
    - JSON
    - XML
    - CSS
  - 编程语言
    - JAVA
    - JacaScript
    - C
    - C++
    - Go
    - Python
- 形式语言-- 表达方式
  - 声明式语言
    - HTML
    - JSON
    - XML
    - CSS
  - 命令型语言
    - JAVA
    - JacaScript
    - C
    - C++
    - Go
    - Python



## 图灵完备性

- 图灵完备性
  - 命令式-- 图灵机
    - goto
    - If 和 while
  - 声明式 -- lambda
    - 递归



## 动态与静态

- 动态
  - 在用户设备/在线服务器上
  - 产品实际运行时
  - Runtime
- 静态
  - 在程序员的设备上
  - 产品开发时
  - Compiletime



## 类型系统

- 动态类型系统与静态类型系统
- 强类型与若类型
  - String + Number
  - String == Boolean
- 复合类型
  - 结构体
  - 函数签名
- 子类型
- 泛型
  - 逆变/协变



## 一般命令式编程语言

- Atom
  - Identifier
  - Literal
- Expression
  - Atom
  - Operator
  - Punctuator
- Statement
  - Expression
  - Keyword
  - Punctuator
- Structure
  - Function
  - Class
  - Process
  - Namespace
  - ...
- Program
  - Program
  - Module
  - Package
  - Library



## 重学JavaScript

- 语法
  - 语义
    - 运行时



### JS类型 | Number

#### Atom

- Grammar
  - Literal
  - Variable
  - Keywords
  - Whitespace
  - Line Terminator
- Runtime
  - Types
  - Execution Context



#### Types

- Number
- String
- Boolean
- Object
- Null
- Undefined
- Symbol



#### IEEE 754 Double Float

- Sign (1)
- Exponent (11)
- Fraction (52)



#### Number - Grammar

- DecimalLiteral
  - 0
  - 0.
  - .2
  - 1e3
- BinaryIntegerLiteral
  - 0b111
- OctallIntegerLieral
  - 0o10
- HexIntegerLiteral
  - 0xFF



### JS类型 | String

#### String

- Character
- Code Point
- Encoding



#### 字符集

- ASCII
- Unicode
- UCS
- GB
  - GB2313
  - GBK(GB13000)
  - GB18030
- ISO-8859
- BIG5



#### String - Encoding

- UTF
  - UTF8
  - UTF16



#### String - Grammar

- "abc"
- 'abc'
- `` abc ``` 



#### String - Grammar -- TEmplate

- `ab${
- }abc${
- }abc`



### JS类型 | Boolean

- true
- false
- 真的没啥好讲的......



### Null & Undefined

- null
- undefined
  - void 0;



### JS对象 | 对象的基础知识



#### Object

- 三只一模一样的鱼，其实是三个对象
  - 其中一只鱼发生了状态改变，失去了尾巴
  - 其他两只鱼不受到影响。
  - 因此，当我们在计算机中描述这三只鱼时，必须把相同的数据存储三份。
- 所以任何一个对象都是唯一的，这与它本身的状态无关。
- 所以，即使状态完全一致的两个对象，也并不相等。
- 我们用状态来描述对象。
- 我们状态的改变即是行为。



- state
- identifier
- behavior



#### Object- Class

- 类是一种常见的描述对象的方式。
- 而”归类“和”分类“则是两个主要的流派
- 对于”归类“方法而言，多继承是非常自然的事情。如C++
- 而采用分类思想的计算机语言，则是单继承结构。并且会有一个基类Object。



#### Object - Prototype

- 原形是一种更接近人类原始认知的描述对象的方法。
- 我们并不视图做严谨的分类，而是采用”相似“这样的方式去描述对象。
- 任何对象仅仅需要描述它自己与原形的区别即可。



#### Object in JavaScript

在JavaScript运行时，原生对象的描述方式非常简单，我们只需要关心原形和属性两个部分。

- K
  - Symbol
  - String
- V
  - Data
  - Accessor



JavaScript用属性来统一抽象对象状态和行为。

一般来说，数据属性用于描述状态，访问器属性则用于描述行为。

数据属性中如果存储函数，也可以用于描述行为。

- Data Property
  - [[value]]
  - writable
  - enumerable
  - configurable
- Accessor Property
  - get
  - set
  - enumerable
  - configurable



当我们访问属性时，如果当前对象没有，则会沿着原形找原形对象是否有此名称的属性，而原形对象还可能有原形，因此，会有”原形链“这一说法。

这一算法保证了，每个对象只需要描述自己和原形的区别即可。



#### Object API/Grammer

- {} . [] ObjectdefineProperty
- Object.create / Object.setPrototypeOf / Object.getPrototypeOf
- new / class / extends
- New / function / prototype



#### Function Object

- 前面描述了JavaScript中的一般对象
- 但JavaScript中海油一些特殊的对象，比如函数对象。
- 除了一般对象的属性和原形，函数对象还有一个行为[[call]]
- 我们用JavaScript中的fucntion 关键字、箭头运算符或者Function构造器创建的对象，会有[[call]]这和行为。
- 我们用类似f()这样的语法把对象当做函数调用时，会访问到[[call]]这个行为。
- 如果对应的对象没有[[call]]行为，则会报错。





找出 JavaScript 标准里面所有具有特殊行为的对象

