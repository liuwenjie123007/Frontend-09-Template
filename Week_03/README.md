学习笔记

# 使用LL算法构建AST

## 四则运算

### 词法定义

- TokenNumber:
  - 1 2 3 4 5 6 7 8 9 0 的组合
- Operator: 
  - ·+·，-， * ， / 之一
- Whitespace
  - <SP>
- LineTerminator
  - <LF><CR>

### 语法定义

```
<Expression>::=
  <AdditiveExpression><EOF>
  
<AdditiveExpression>::==
	<MultiplicativeExpression>
	|<AdditiveExpression><+><MultiplicativeExpression>
	|<AdditiveExpression><-><MultiplicativeExpression>
	
<MultiplicativeExpression>::=
	<Number>
	|<MultiplicativeExpression><*><Number>
	|<MultiplicativeExpression></><Number>
```

- 产生式？
  - BNF范式是一种用递归的思想来表述计算机语言符号集的定义规范
  - 法则：
    - ::=表示定义
    - ""双引号里的内容表示字符
    - <> 尖括号里表示必选内容
    - |竖线两边的是可选内容，相当于OR



### LL语法分析

- 从左到右扫描
- 从左到右归并



### 词法分析

#### 正则匹配

```javascript
let regexp = /([0-9\.]+)|([ \t]+)|([\r\n]+)|(\*)|(\/)|(\+)|(\-)/g
let dictionary = ["Number", "Whitespace", "LineTerminator", "*", "/", "+", "-"];
```

- 通过反复全局匹配，每次匹配的分组位置映射到dictionary



#### 生成器改进

```javascript
		function* tokenize(source) {
        let result = null;
        let lastIndex = 0;
        while(true) {
            lastIndex = regexp.lastIndex;
            result = regexp.exec(source);
            
            if (!result) 
                break;
            if (regexp.lastIndex - lastIndex > result[0].length)
                break;

            let token = {
                type: null,
                value: null
            }

            for (let i = 1; i <= dictionary.length; i++) {
                if (result[i])
                    token.type = dictionary[i - 1];
            }

            token.value = result[0];

            yield token;
        }
    		yield {
            type: "EOF"
        }
    }
```

- 当要返回序列的时候，使用生成器函数，生成一个迭代器。



### 语法分析

#### MultiplicativeExpression

```javascript
function MultiplicativeExpression(source) {
  if (source[0].type === "Number") {
    let node = {
      type: "MultiplicativeExpression",
      children: [source[0]]
    }
    source[0] = node;
    return MultiplicativeExpression(source);
  }
  if (source[0].type === "MultiplicativeExpression" && source[1] && source[1].type === "*") {
    let node = {
      type: "MultiplicativeExpression",
      operator: "*",
      children: []
    }
    node.children.push(source.shift());
    node.children.push(source.shift());
    node.children.push(source.shift());
    source.unshift(node);
    return MultiplicativeExpression(source);
  }
  if (source[0].type === "MultiplicativeExpression" && source[1] && source[1].type === "/") {
    let node = {
      type: "MultiplicativeExpression",
      operator: "/",
      children: []
    }
    node.children.push(source.shift());
    node.children.push(source.shift());
    node.children.push(source.shift());
    source.unshift(node);
    return MultiplicativeExpression(source);
  }
  if(source[0].type === "MultiplicativeExpression")
    return source[0];

  return MultiplicativeExpression(source);
}
```



- 处理乘法表达式与数字之间， `*`与`/`的情况
- 符合乘法表达式的表达式们，将被合并成一个乘法表达式



#### AdditiveExpression

```javascript
    function AdditiveExpression(source) {
        if (source[0].type === "MultiplicativeExpression") {
            let node = {
                type: "AdditiveExpression",
                children: [source[0]]
            }
            source[0] = node;
            return AdditiveExpression(source);
        }
        if (source[0].type === "AdditiveExpression" && source[1] && source[1].type === "+") {
            let node = {
                type: "AdditiveExpression",
                operator: "+",
                children: []
            }
            node.children.push(source.shift());
            node.children.push(source.shift());
            MultiplicativeExpression(source);
            node.children.push(source.shift());
            source.unshift(node);
            return AdditiveExpression(source);
        }
        if(source[0].type === "AdditiveExpression" && source[1] && source[1].type === "-") {
            let node = {
                type: "AdditiveExpression",
                operator: "-",
                children: []
            }
            node.children.push(source.shift());
            node.children.push(source.shift());
            MultiplicativeExpression(source);
            node.children.push(source.shift());
            source.unshift(node);
            return AdditiveExpression(source);
        }
        if(source[0].type === "AdditiveExpression")
            return source[0];
        MultiplicativeExpression(source);
        return AdditiveExpression(source);
    }
```

- 处理加法表达式与乘法表达式之间, `+`与`-`的情况
- 数字与其他表达式会使用乘法表达式转换处理
- 与乘法表达式一样，处理过的表达式们会被合并成加法表达式