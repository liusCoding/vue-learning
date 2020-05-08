'use strict';

var _ = require('./01.js');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//调用方法

_2.default.getList(); //调用01.js的方法，引入01.js文件，进行调用
// import {getList,save} from './01.js'

_2.default.update();