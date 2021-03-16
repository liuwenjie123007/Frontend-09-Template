学习笔记

# 字符串分析算法

- 字典树
  - 大量高重复字符串的存储与分析
    - 短字符串完全相等匹配
- KMP
  - 在长字符串里找模式
    - 部分匹配
    - O(n)
- Wildcard
  - 带通配符的字符串模式
    - O(n)
- 正则
  - 字符串通用模式匹配
    - 字符串匹配的终极模式？
- 状态机
  - 通用的字符串分析
    - 优先状态机完全等价正则
    - 可惨代码，成本高
- LL LR
  - 字符串多层级结构分析
    - 编译原理





## 字典树

```javascript
    class Trie {
        constructor() {
            // 一个创建原型为null,干净的数据对象的方法
            this.root = Object.create(null);
        }
        insert(word) {
            let node = this.root;
            for (let c of word) {
                if (!node[c])
                    node[c] = Object.create(null);
                node = node[c];
            }
            if (!($ in node))
                node[$] = 0;
            node[$]++;
        }
        most() {
            let max = 0;
            let maxWord = null;
            let visit = (node, word) => {
                if (node[$] && node[$] > max) {
                    max = node[$];
                    maxWord = word;
                }
                for (let p in node) {
                    visit(node[p], word + p);
                }
            }
            visit(this.root, "");
            console.log(maxWord);
            console.log(max);
        }
    }
```

- Trie
  - 根据字符串下标分层构建树
  - insert
    - 使用JavaScript对象作为节点，属性指向子节点，
    - 由于存储的是字符串，父节点的属性名存储着字典值，非典型树结构。。
    - 时间复杂度O(n), n为字符串长度
  - most
    - 树的前序遍历
    - 时间复杂度O(n), n为字符串长度



## KMP字符串模式匹配算法

```javascript
function kmp(source, pattern) {
    // 计算table
    let table = new Array(pattern.length).fill(0);
    {
        let i = 1, j = 0;
        while (i < pattern.length) {
            if (pattern[i] === pattern[j]) {
                j++, i++;
                table[i] = j;
            } else {
                if (j > 0)
                    j = table[j];
                else {
                    i++;
                }
            }
        }
    }
    
    {
        let i = 0, j = 0;
        while (i < source.length) {
            if (pattern[j] === source[i]) {
                i++, j++;
            } else {
                if (j > 0)
                    j = table[j];
                else {
                    i++;
                }
            }
            if (j === pattern.length)  {
                return true;
            }
        }
        return false;
    }
}
```

- 计算跳转表格
- 借助跳转表格匹配
- 时间复杂度O(n)
- LeetCode 28
  - https://leetcode-cn.com/problems/implement-strstr/



## Wildcard

- 星号情况
  - 最后星号要匹配尽可能多的字符串
  - 之前的星号要匹配尽可能少的字符串
  - 除了第一个*前的字符串与最后一个星号之后的字符串，其余的字符串其实是要执行KMP算法
  - 第一个*前的字符串要匹配开头
  - 最后一个星号之后的字符串要匹配结尾
- 问号情况
  - 使用正则处理
    - `let reg = new RegExp(subPattern.replace(/\?/g, "[\\s\\S]"), "g");`
    - `[\\s\\S]` 可表示任意字符，将字符串中? 替换

