import request from '@/utils/request'

export default{

  //分页讲师查询的方法
  getFrontCourseList(page,size,couserQuery){
      return request({
          url: `/edu/courseFront/getFrontCourse/${page}/${size}`,
          method: 'post',
          data: couserQuery
      })
  },


  //课程详情查询
  getFrontCourseInfo(courseId){
      return request(
          {
            url: `/edu/courseFront/getFrontCourseInfo/${courseId}`,
            method: 'get'
          }
      )
  },


  //查询所有分类
  getAllSubject(){
      return request({
          url: '/edu/subject/findAllSubject',
          method: 'get'
      })
  }
}