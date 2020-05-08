'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//定义方法，设置哪些方法可以被其他js调用

// export function getList(){
//     console.log('getList....................')
// }


// export function save(){
//     console.log('save...................')
// }

exports.default = {
    getList: function getList() {
        console.log('getList.........');
    },
    update: function update() {
        console.log('update.........');
    }
};