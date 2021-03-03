学习笔记



# 寻路算法

- 地图设计

  - 100 * 100 方格
  - 一位数组保存
  - localStorage存储
  - mouse事件的应用
  - 注意：
    - 老师这里没有使用完整html结构
      - 如果自己完整声明html结构会改变默认样式一样的css是达不到一样的效果的。

- 用广度优先搜索完成寻路算法

  - 寻路问题
  - 广度优先搜索使用队列遍历，这里winter老师是记忆化的解法

- 通过异步编程可视化寻路算法

  - 这里主要是解决非异步编程时，所有格子会一起渲染的问题。
  - 通过引入sleep函数，来让渲染过程可视化

- 处理路径问题

  - 有趣小知识
    - typeof null  === 'object'的用处
      - 可以用于区分只返回true,false的函数和返回对象和null的函数 
  - 使用复制地图为table，
  - 将遍历过得点在table中以坐标形式保存下来，
  - 再逆向遍历即一条最短路径。

- 启发式寻路

  - 用函数去判断点扩展优先级
  - 最佳路径条件
    - 启发式函数的估值一定小于起点到终点的路径，则一定能找到最优路径。
  - A 代表 启发式寻路
    - A* 表示 能找到最短路径的启发式寻路
  - 原有的queue转换成优先队列
  - 启发式搜索...
    - 老师讲的修正还是没想出来....

- 二叉堆

  - 基于完全二叉树的模板

    ```javascript
    // JavaScript
    class BinaryHeap { 
        constructor(compare) { 
            this.data = []; 
            this.compare = compare; 
        } 
        insert(value) { 
            this.insertAt(this.data.length, value); 
        } 
        insertAt(index, value) { 
            this.data[index] = value;    
            // 对比当前节点与其父节点，如果当前节点更小就交换它们    
            while (index > 0 && this.compare(value, this.data[Math.floor((index - 1) / 2)]) < 0) {      
                this.data[index] = this.data[Math.floor((index - 1) / 2)];      
                this.data[Math.floor((index - 1) / 2)] = value;      
                index = Math.floor((index - 1) / 2);    
            }  
        }  
        delete(index) {    
            if (this.data.length === 0) return;    
            let value = this.data[index];    
            let i = index;    
            // fix heap    
            while (i < this.data.length) {      
                let left = i * 2 + 1;      
                let right = i * 2 + 2;      
                // 没有左子节点      
                if (left >= this.data.length) break;      
                // 没有右子节点      
                if (right >= this.data.length) {        
                    this.data[i] = this.data[left];        
                    i = left;        
                    break;      
                }      
                // 比较左右子节点的大小，更小的补到父节点      
                if (this.compare(this.data[left], this.data[right]) < 0) {        
                    this.data[i] = this.data[left];        
                    i = left;      
                } else {        
                    this.data[i] = this.data[right];        
                    i = right;      
                }    
            }    
            // 查看最后的空位是不是最后的叶子节点    
            if (i < this.data.length - 1) {      
                this.insertAt(i, this.data.pop());    
            } else {      
                this.data.pop();    
            }    return value;  
        }  
        printHeap() {    
            console.log("nHeap = ");    
            console.log(this.data);  
        }
    }
    ```

    

