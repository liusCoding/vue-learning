import request from '@/utils/request'

export default {
    //1.生成统计数据

    createStaData(day){
        return request({
            url: `/statistics/countRegister/${day}`,
            method: 'get'
        })
    },

    //2.获取统计数据
    showData(seacherObj){
        return request({
            url: `/statistics/showData/${seacherObj.type}/${seacherObj.begin}/${seacherObj.end}`,
            method: 'get'
        })
    }
}