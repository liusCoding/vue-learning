import request from '@/utils/request'
export default {
    //1 添加课程信息
    addCourseInfo(courseInfo) {
        return request({
            url: '/edu/course/addCourseInfo',
            method: 'post',
            data: courseInfo
          })
    },
    //2 查询所有讲师
    getListTeacher() {
        return request({
            url: '/edu/teacher/findAll',
            method: 'get'
          })
    },

    //3.根据
    getCourseInfo(courseId) {
        return request({
            url: `/edu/course/getCourseInfo/${courseId}`,
            method: 'get'
          })
    },

    //4.修改课程信息
    updateCourseInfo(courseInfo) {
        return request({
            url: '/edu/course/updateCourseInfo',
            method: 'put',
            data: courseInfo
          })
    },
}
