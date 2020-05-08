const common = require('./common.js')
const utils = require('./utils.js')

//引入css文件  
require('./style.css')
common.info('hello common' + utils.add(1,2))