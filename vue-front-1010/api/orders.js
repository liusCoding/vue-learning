import request from '@/utils/request'

export default{

    //生成订单接口
    createOrders(courseId){
        return request({
            url: `/order/createOrder/${courseId}`,
            method: 'post'
        })
    },


    //根据OrderNo查询订单详情接口
    getOrderByOrderNo(orderNo){
        return request({
            url: `/order/getOrderInfo/${orderNo}`,
            method: 'get'
        })
    },

    //生成二维码的接口
    createWxNativePay(orderNo){
        return request({
            url: `/order/pay/createNative/${orderNo}`,
            method: 'get'
        })
    },

    //查询订单状态的接口
    queryOrderStatus(orderNo){
        return request({
            url: `/order/pay/queryPayStatus/${orderNo}`,
            method: 'get'
        })
    }
}