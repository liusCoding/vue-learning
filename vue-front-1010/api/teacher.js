import request from '@/utils/request'

export default{

  //分页讲师查询的方法
  getTeacherList(page,size){
      return request({
          url: `/edu/teacherFront/getTeacherInfoList/${page}/${size}`,
          method: 'get'
      })
  }
}