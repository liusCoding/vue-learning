//在02.js调用01.js里面的方法


// 1. 引入01.js文件 

//./表示当前目录，../表示上级目录

const m  = require('./01.js')

//2 调用

let result = m.sum(1,2);
console.log(result)

console.log(m.subtract(10,3))