import request from '@/utils/request'

// export function getList(params) {
//   return request({
//     url: '/table/list',
//     method: 'get',
//     params
//   })
// }


export default {
   

    // 查询所有分类
    findAllSubject(){
        return request({
            url: `/edu/subject/findAllSubject`,
            method: 'get',
        })
    
    }
    
}