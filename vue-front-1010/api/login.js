import request from '@/utils/request'

export default{

    //会员登录
    submitLogin(userInfo){
        return request({
            url: '/ucenter/member/login',
            method: 'post',
            data: userInfo
        })
    },

    //根据token获取会员信息
    getMemberInfo(){
        return request({
            url: '/ucenter/member/getMemberInfo',
            method: 'get',
        })
    }
}