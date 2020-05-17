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

    //5.根据id查询课程确认信息
    getPublishCourseInfo(id){
        return request({
            url: '/edu/course/getPublishCourseInfo/'+id,
            method: 'get'
        })
    },

    //6.课程最终发布

    publishCourse(id) {
        return request({
            url: '/edu/course/publishCourse/'+id,
            method: 'post'
          })
    },
    

    //7.课程列表
    getPublishCourseList(){
        return request({
            url: '/edu/course',
            method: 'get'
        })
    },

    deleteCourse(courseId) {
        return request({
            url: `/edu/course/${courseId}`,
            method: 'delete'
          })
    },
}
