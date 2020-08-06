// 冒泡排序
const bubbleSort = arr => {
  const len = arr.length;
  for(let outer = len - 1; outer >= 1; outer--) {
    // 从队列的最外层开始循环
    for(let inner = 0; inner < outer; inner ++) {
    // 从队列的起始位置开始循环      
      if(arr[inner] > arr[outer]) {
        // 比较末尾和起始位，内循环把整个队列循环一次， 最大的放在最后
        [arr[inner], arr[outer]] = [arr[outer], arr[inner]]
        // 交换位置
      }
    }
  }
}

