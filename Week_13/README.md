学习笔记

# 重学HTML



## HTML的定义：XML与SGML

### SGML

IBM发明的数据表述系统

HTML初期，是以SGML的子集的形式出现。

#### DTD与 XML namespace

一定要记住的转义字符

- quot
  - 双引号
- amp
  - &符
- lt
  - 小于号 <
- gt
  - 大于号 >



## HTML标签语义

```html
<html>
  <head>
    <title>wiki</title>
  </head>
  <body>
    <nav>
      <aside><a href="#">上边导航</a></aside>
      <aside><a href="#">侧边栏</a></aside>
    </nav>
    <main>
      <article>
        <hgroup>
          <h1>主标题</h1>
          <h2>副标题</h2>
        </hgroup>
        <p class="note">
          <abbr title="全称">某种缩写</abbr>
          注释没有合适的标签，使用p标签代替
        </p>
        <figure>
          <img src="#" alt="#" />
          <figcaption>标签组的说明文字</figcaption>
        </figure>
        <p>
          文章1
          <strong>一个词在文章中的重要性</strong>
          <em>在句子中强调的重点</em>
        </p>
        <nav>
          导航列表
          <ol>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ol>
        </nav>
        <dfn>
          表示定义
        </dfn>
        <samp>表示例子</samp>
        <pre>
          预先调整好格式的文本
        </pre>
        <code>表示代码</code>
      </article>
    </main>
    <footer>
      表示与主体无关的底部信息
    </footer>
  </body>
</html>

```



## HTML 语法

### 合法元素

- Element: `<tagname>...</tagname>`
- Text: text
- Comment: `<!-- 注释 -->`
- DocumentType `<!Doctype html>`
- ProcessingInstruction: 预处理数据 `<?a 1?>`
- CDATA: 特殊的语法也是文本节点 `<![CDATA[]]>`



### 字符引用

- `&#161;`
- `&amp;`
- `&lt;`
- `&quot;`



## DOM API

70%~80% 的浏览器API属于DOM API

分为4类

- 停止使用
- 节点部分
- 事件部分
- Range API



### 节点类API

- Node
  - Element
    - HtmlElement
    - SVGElement
  - Document
  - CharacterData
    - Text
    - Comment
    - ProcessingInstruction
  - DocumentFragment
  - DocumentType



#### 导航类操作

- Node
  - parentNode
  - childNodes
  - firstChild
  - lastChild
  - nextSibling
  - previousSibling
- Element
  - parentElement
  - children
  - firstElementChild
  - lastElementChild
  - nextElementSibling
  - previousElementSibling



#### 修改操作

- appendChild
- insertBefore
- removeChild
- replaceChild



#### 高级操作

- compareDocumentPosition
  - 用于比较两个节点中关系的函数
- contains
  - 检查一个节点是否包含另一个节点函数
- isEqualNode
  - 检查两个节点是否完全相同
- isSame
  - 检查两个节点是否是同一个节点，实际上JavaScript中可以用 “===”
- cloneNode
  - 复制一个节点，如果传入参数true,则会连同子元素做深拷贝



## 事件API

### 事件对象模型

- passive
  - 移动端默认为false

#### Event: 冒泡与捕获

- 先捕获再冒泡
  - 计算响应元素 ->捕获





## Range API

操纵半个节点或者批量操作。

### 一个问题

- 把一个元素所有的子元素逆序
  - node API 
    - 4次操作
      - inser时会从原来的节点remove
      - 浏览器collection是会实时变化的
  - range API 高效操作



### Range API

在HTML文档流中的一个范围

- var range = new Range();
- range.setStart(element, 9);
- Range.setEnd(element, 4);
- var range = document.getSelection().getRangeAt(0);

- range.setStartBefore
- range.setEndBefore
- range.setStartAfter
- Range.setEndAfter
- range.selectNode
- range.selectNodeContents

主要操作

- var fragment = range.extractContents();
- Range.insertNode(document.createTextNode("aaaa"))



使用range API 可以实现只用两次节点操作



## CSSOM

### document.styleSheets

- document.styleSheets

#### Rules

- document.styleSheets[0].cssRules
- document.styleSheets[0].insertRule("p { color: pink;}", 0)
- document.styleSheets[0].removeRule(0)



- @Rule
- StyleRule



- CSSStyleRule
  - selectorText String
  - style K-V结构



#### getComputedStyle

- window.getComputedStyle(elt, pseudoElt);
  - elt 想要获取的元素
  - pseudoElt可选， 伪元素



## CSSOM View

### Window

- window.innerHeight, window.innerWidth
- window.outerWidth, window.outerHeight
- window.devicePixelRatio
- window.screen
  - window.screen.width
  - window.screeen.height
  - window.screen.availWidth
  - window.screen.availHeight



- window.open("about:bloack", "_blank", "width=100, height=100,left=100,right=100")
- moveTo(x,y)
- moveBy(x,y)
- resizeTo(x,y)
- resizeBy(x,y)



### scroll

- scrollTop
- scrollLeft
- scrollWidth
- scrollHeight
- Scroll(x, y)
- scrollBy(x, y)
- scrollIntoView()
- window
  - scrollX
  - scrollY
  - scroll(x, y)
  - scrollBy(x, y)

### layout

- getClientRects()
- getBoundingClientRect()



## 其他API

### 所有API

- khronos
  - WebGL
- ECMA
  - ECMAScript
- WHATWG
  - HTML
- W3C
  - webaudio
  - CG/WG



