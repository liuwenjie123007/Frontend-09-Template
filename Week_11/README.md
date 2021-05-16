# 重学CSS



## CSS 总论

### CSS 语法的研究

#### CSS 2.1的语法

- Https://www.w3.org/TR/CSS21/grammar.html#q25.0
- Https://www.w3.org/TR/css-syntax-3



#### CSS总体结构

- @Charset
- @import
- rules
  - @media
  - @page
  - rule



### @规则的研究

#### 标准

- @charset ：https://www.w3.org/TR/css-syntax-3/
  - 声明CSS字符集
- @import ：https://www.w3.org/TR/css-cascade-4/
- @media（重要） ：https://www.w3.org/TR/css3-conditional/
  - 条件规则
- @page ：https://www.w3.org/TR/css-page-3/
  - 分页媒体，打印相关
- @counter-style ：https://www.w3.org/TR/css-counter-styles-3
  - 列表的小黑点
- @keyframes（重要） ：https://www.w3.org/TR/css-animations-1/
  - 定义动画
- @fontface（重要）：https://www.w3.org/TR/css-fonts-3/
  - 定义一切字体
- @supports ：https://www.w3.org/TR/css3-conditional/
  - 检查CSS功能存不存在，非推荐
- @namespace ：https://www.w3.org/TR/css-namespaces-3/
  - 处理HTML以外的命名空间





### CSS规则的结构

- 选择器
- 声明
  - key
  - value



```css
div {
  background-color: blue;
}
```



### CSS规则

- Selector
  - https://www.w3.org/TR/selectors-3/
  - Https://www.w3.ort/TR/Selectors04/
- Key
  - Properties
  - Variables: https://www.w3.org/TR/css-variables/
- Valie
  - Https://www.w3.org/TR/css-values-4/



- rule
  - Selector
    - selector_group
    - selector
      - \>
      - \<sp>
      - +
      - ~
    - Simple_slector
      - type
      - *
      - .
      - #
      - []
      - :
      - ::
      - :not()
  - Declaration
    - Key
      - variables
      - properties
    - Value
      - calc
      - number
      - length
      - ...



### 收集标准

- https://www.w3.org/TR/?tag=css

爬虫代码

```javascript
JSON.stringify(Array.prototype.slice.call(document.querySelector("#container").children).filter(e => e.getAttribute("data-tag").match(/css/)).map(e => ({name:e.children[1].innerText, url:e.children[1].children[0].href})))
```



### CSS总论 - 总结

- CSS语法
- at-rule
- selector
- variables
- value
- 实验



## CSS选择器

### 选择器语法

- 简单选择器
  - *
  - div svg|a
    - svg必须用`|`来指定命名空间
  - .cls
  - #id
  - [attr=value]
  - :hover
    - 伪类选择器
  - ::before
    - 伪元素选择器



- 复合选择器
  - <简单选择器> <简单选择器> <简单选择器>
  -  *或者div必须写在最前面
- 复杂选择器
  - <复合选择器>\<sp><复合选择器>
  - <复合选择器>">"<复合选择器>
  - <复合选择器>"~"<复合选择器>
  - <复合选择器>"+"<复合选择器>
  - <复合选择器>"||"<复合选择器>



### 选择器的优先级

- 简单选择器计数

```css
#id div.a#id {
  //....
}
```

[0, 2, 1, 1]



#### 练习

请写出下面选择器的优先级

- div#a.b .c[id=x]
- #a:not(#b)
- *.a
- div.a





### 伪类

- 链接/行为
  - :any-link
  - :link :visited
  - :hover
  - :active
  - :forcus
  - :target



- 树结构
  - :empty
  - :nth-child()
  - :nth-last-child()
  - :first-child :last-child :only-child



- 逻辑型
  - :not伪类
  - :where :has



### 伪元素

- :: before
- ::after
- ::first-line
- ::first-letter



```html
<div>
  <::before/>
  content ...
  content ...
  <::after/>
</div>

<div>
 <::first-letter>c</::first-letter> content
  content ...
  content ...
</div>
```

#### 可用属性

- First-line
  - font
  - color
  - background
  - Word-spacing
  - letter-spaccing
  - Text-decoration
  - text-transform
  - line-height
- first-letter
  - font
  - color
  - background
  - Word-spacing
  - letter-spaccing
  - Text-decoration
  - text-transform
  - line-height
  - float
  - Vertical-align
  - 盒模型:margin, padding, border