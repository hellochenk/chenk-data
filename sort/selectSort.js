// 选择排序法

const selectSort = arr => {
  const len = arr.length;
  for(let outer = 0; outer < len; outer++) {
  // 外层循环从队列首位开始
    let min = outer
    // 外层起始位为最小的成员
    for(let inner = outer + 1; inner < len; inner++) {
    // 内层从外层+1开始循环
      if(arr[inner] < arr[min]) {
      // 让内层的每一项都跟当前外循环的最小成员对比大小
        min = inner;
        // 更新最小成员
      }
    }
    // 每次内循环结束时，交换外层当前成员和它身后队列中，找到的最小成员的位置
    [arr[min], arr[outer]] = [arr[outer], arr[min]]
  }
}
