学习笔记



# 重学JavaScript (二)



## JS表达式 | 运算符和表达式

### Atom

- Grammar
  - Grammar Tree vs Priority
  - Left Hand side & Right hand side
- Runtime
  - Type Convertion
  - Reference



### Grammar

- Tree vs   Priority
  - ( + - )
  - (* /)
  - ()



### Expression

- Member
  - a.b
  - a[b]
  - foo`string``
  - super.b
  - super['b']
  - new.target
  - New Foo()
- New
  - New Foo
- Example
  - new a()()
  - new new a()

#### Reference

- Object
- Key
- delete
- assign



#### Call

- Call
  - foo()
  - super()
  - foo()['b']
  - foo().b
  - foo()`abc``
- Example
  - new a()['b']

#### Left Handside & Right Handside

- Example
  - a.b = c
  - a + b = c;

- Update
  - a ++ 
  - a --
  - -- a
  - ++ a



#### Unary

- delete ab.
- void foo()
- typeof a
- (+ a)
- (- a)
- (~ a)
- (! a)
- await a



#### **

- Exponental
  - **
- Example
  - 3 ** 2 ** 3
  - 3 ** (2 ** 3)



#### 其他

- Multiplicative
  - (* / %)
- Additive
  - (+ -)
- Shift
  - << >> >>>
- Relationship
  - < > < = > = instanceof in
- Equality
  - ==
  - !=
  - ===
  - !==
- Bitwise
  - & ^ |
- Logical
  - &&
  - ||
- Conditional
  - ? :



## JS表达式 | 类型转换

- a + b
- "false" == false
- a[o] = 1;

|           | Number              | String                | Boolean  | Undifined | Null | Object | Symbol |
| --------- | ------------------- | --------------------- | -------- | --------- | ---- | ------ | ------ |
| Number    | -                   |                       | 0 false  | x         | x    | Boxing | x      |
| String    |                     | -                     | "" false | x         | x    | Boxing | x      |
| Boolean   | true 1<br />false 0 | 'true'<br />'false'   | -        | x         | x    | Boxing | x      |
| Undifined | NaN                 | 'Undefined'           | false    | -         | x    | x      | x      |
| Null      | 0                   | 'null'                | false    | x         | -    | x      | x      |
| Object    | valueOf             | valueOf<br />toString | true     | x         | x    | -      | x      |
| Symbol    | x                   | x                     | x        | x         | x    | Boxing | -      |



### UnBoxing

- ToPremitive
- toString vs valueOf
- Symbol.toPrimitive



### Boxing

| 类型    | 对象                    | 值          |
| ------- | ----------------------- | ----------- |
| Number  | new Number(1)           | 1           |
| String  | new String("a")         | "a"         |
| Boolean | new Boolean(true)       | true        |
| Symbol  | New Object(Symbol("a")) | Symbol("a") |



#### Exercise

- StringToNumber
- NumberToString





## JS语句 | 运行时相关概念

### Completion Record

- [[type]] : normal, break, continue, return, or throw
- [[value]]: 基本类型
- [[target]]: label



## JS语句 | 简单语句和复合语句

### 简单语句

- ExpressionStatement
- EmptyStatement
- DebuggerStatement
- ThrowStatement
- ContinueStatement
- BreakStatement
- ReturnStatement

### 复合语句

- BlockStatement
- IfStatment
- SwitchStatement
- IterationStatement
- WithStatement
- LabelledStatement
- TryStatement



#### Block

- BlockStatement
  - [[type]]: normal
  - [[value]]: --
  - [[target]]: --



#### Iteration

- while(…)…
- do … while (…);
- for (…;…;…) …
- for (… in …) …
- for (… of …) …
  - var
  - const / let
  - in 

#### 标签、循环、break、continue

- LabelledStatement
- IterationStatement
- ContinueStatement
- BreakStatement
- SwitchStatement
- [[type]]: break continue
- [[value]]: --
- [[target]]: label



#### try

- Try {
- } catch () {
- } finally {
- }
- [[type]]: return
- [[value]]: --
- [[target]]: label



## JS语句 | 声明

- FunctionDeclaration
- GeneratorDeclaration
- AsyncFunctionDeclaration
- AsyncGeneratorDeclaration
- VariableStatement
- ClassDeclaration
- LexicalDeclaration



### 声明

- Function Body
  - function
  - function *
  - async function
  - async function *
  - var
- 声明前使用就会报错
  - class
  - const
  - let



### 预处理 (pre-process)

```javascript
var a = 2;
void function () {
	a = 1;
	return;
 	var a;
}();
console.log(a);

var a = 2;
void function () {
 	a = 1;
 	return;
 	const a;

}();
console.log(a);
```



### 作用域

```javascript
var a = 2;
void function () {
	a = 1;
	{
    var a;
  }
}();
console.log(a);

var a = 2;
void function () {
 	a = 1;
 	{
    const a;
  }
}();
console.log(a);
```





## JS结构化 | 宏任务与微任务

### JS执行粒度（运行时）

- 宏任务
- 微任务（Promise）
- 函数调用（Execution Context)
- 语句/声明（Completion Record)
- 表达式(Reference)
- 直接量/变量/this



### 宏任务与微任务

- MircroTask(Job)
- MacroTask

### 事件循环

- wait
- execute
- getcode



## JS结构化 | JS函数调用

### 函数调用

访问变量用stack描述

- Execution Context Stack
  - Execution Context
    - Running Execution Context

#### Execution Context

- code evaluation state
- Function
- Script or Module
- Generator
- Realm
- LexicalEnvironment
- VariableEnvironment



#### Environment Record

- Environment Records
  - Declarative Environment Records
    - Function Environment Records
    - module Environment Records
  - Global Environment Records
  - Object Environment Records



#### Function - Closure

JavaScript中每个函数都会生成一个闭包





#### Realm

在JS中， 函数表达式和对象直接量均会创建对象。

使用.做隐式转换也会创建对象。

这些对象也是有原形的，如果我们没有Realm, 就不知道它们的原型是什么。



Realm是用来记录原形的。

规定了在一个JavaScript引擎的实例里面，它所有的内置对象会被放进一个Realm里面去。

不同的Realm之间是完全互相独立的。

instanceof可能会失效





## 课后作业：

- 尝试找出 JavaScript 引擎里面 Realm 所有的对象，使用一个 JS 数据可视化的框架去做一个可视化。提交至 GitHub。