# 学习笔记

## 重学CSS
### 盒(Box)

练习

```java
HTML代码中可以书写开始标签，结束标签 ，和自封闭标签 。

一对起止标签 ，表示一个元素 。

DOM树中存储的是元素和其它类型的节点（Node）。

CSS选择器选中的是元素 。

CSS选择器选中的元素 ，在排版时可能产生多个盒 。

排版和渲染的基本单位是盒 。
```



#### 盒模型

- 多层结构
  - content
  - padding
  - border
  - margin
- 主要影响盒大小属性
  - content
  - padding
  - border
  - margin
  - Box-sizing
    - content-box
    - border-box





### 正常流

#### 三代排版技术

- 正常流(1g)
- flex(2g)
- grid(3g)



CSS排版只排两样东西

- 盒
- 文字



#### 正常流排版

- 收集盒与文字进行
- 计算盒在行中的排布
- 计算行的排布



##### 具体规则

- 从左向右排
  - IFC（行级格式上下文）
    - Inline-box，在一行中
- 从上到下排
  - BFC(块级格式上下文)
    - Line-box
      - Bloack-level-box



### 正常流的行级排布

#### 基线对其（BaseLine）

有一个基础线进行对其。

#### Text

文字在计算机中也是由基线与原点的距离定义的。



#### 行模型

五层基线模型

- Line-top
- text-top
- base-line
- text-bottom
- line-bottom



注意点

- Inline-block的基线是根据内部文字进行变化的
  - 推荐使用vertical-align来指定对其





### 正常流的块级排布



#### 正常流的两个机制

##### float与clear

float的基本规则

- 先按照正常流排版，然后按照float挤到对应位置。

- 同向float的元素，会受到上一个float元素的影响。



clear

- 找个干净的空间进行浮动，可以解除上一个float元素的影响



##### margin折叠

只在BFC之中

- 两个盒子的都有margin的时候，会根据最大的margin合并。



### BFC 合并



#### Block

- Block Container : 里面有BFC的
  - 能容纳正常流的盒，里面就有BFC， 想想有哪些？
- Block-level Box: 外面有BFC的
- Block Box = Block Container + Block-level Box: 里外都有BFC的





#### Block Container

- block
- Inline-block
- table-cell
- Flex item
- Grid cell
- table-caption





#### Block-level Box

- Block level
  - display: block
  - Display: flex
  - display: table
  - Display: grid
- Inline level
  - Display:inline-block
  - Display:inline-flex
  - display:inline-table
  - display:inline-grid
- Display:run-in



#### 设立BFC

- floats
- absolutely positioned elements
- block containers (such as inline-locks, table-cells, and table-captions)
  - flex items
  - grid cell
- and block boxes with 'overflow' other than 'visible'



#### BFC合并

- block box && overflow:visible
  - BFC合并与float
  - BFC合并与边距折叠



### Flex排版

- 收集盒进行
- 计算盒在主轴方向的排布
- 计算盒在交叉轴方向的排布



- 分行
  - 根据主轴尺寸，把元素分进行
  - 若设置了no-wrap, 则强行分配进第一行



- 计算主轴方向
  - 找出所有Flex元素
  - 把主轴方向的剩余尺寸按比例分配给这些元素
  - 若剩余空间为负数， 素有flex元素为0，等比压缩剩余元素



- 计算交叉轴方向
  - 根据每一行中最大元素尺寸计算行高
  - 根据行高flex-align和item-align，确定元素具体位置



### 动画



#### Animation

- @keyframes定义
- animation：使用



- Animation
  - animation-name
  - animation-duration 动画的时长；
  - animation-timing-function 动画的时间曲线；
  - Animation-delay 动画开始前的延迟
  - Animation-iteration-count 动画的播放次数
  - Animation-direction 动画的方向



#### Transition

- Transition-property 要变换的属性
- Transition-duration 变换的时长；
- Transition-timing-function 时间曲线
  - 三次贝塞尔曲线
- Transition-delay 延迟



- 内置贝塞尔曲线
  - ease
    - 推荐使用
  - linear
  - Ease-in
    - 退出动画
  - Ease-out
    - 元素出现
  - Ease-in-out



Cubic-bezier

可模拟抛物线，进而模拟回弹行为



### 颜色

#### CMYK与RGB

#### HSL与HSV

Hue 色相

S 纯度

L 亮度

V 明度



### 绘制

- 几何图形
  - border
  - box-shadow
  - border-radius
- 文字
  - font
  - text-decoration
- 位图
  - background-image



#### 应用技巧

- data uri + svg
