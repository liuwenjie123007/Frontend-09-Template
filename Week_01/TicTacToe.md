1. 编程训练
   1. 语言特性
   2. 算法与数据结构


1. TicTacToe
   1. 三子棋
   2. 规则
      1. 棋盘: 3x3方格
      2. 双方分别持有圆圈和叉两种棋子
      3. 双方交替落子
      4. 率先三点连成一线的达成胜利
   3. 棋盘的表示
      1. 二维数组
   4. 策略
      1. 第一层策略： 我要赢
      2. 第二层策略： 别墅
      3. 第三层策略： ....
      4. 棋谱
   5. 二维数组转成一位数组的好处
      1. 复制一个数组
         1. Object.create
            1. https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create
            2. 原型链的屏蔽机制
               1. 你不知道的JavaScript（上卷）5.1.2 P144