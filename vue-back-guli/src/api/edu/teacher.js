import request from '@/utils/request'

// export function getList(params) {
//   return request({
//     url: '/table/list',
//     method: 'get',
//     params
//   })
// }


export default {
    
    //讲师分页查询
    getTeacherListPage(page,size,teacherQuery){
        return request({
            // url: '/edu/teacher/pageTeacherCondition/'+page+'/'+size, 第一种写法
            url: `/edu/teacher/pageTeacherCondition/${page}/${size}`,
            method: 'post',
            // params
            //data表示把对象转换json进行传递到接口里面
            data: teacherQuery
        })
    },

    // 删除讲师
    deleteByTeacherId(id){
        return request({
            // url: '/edu/teacher/pageTeacherCondition/'+page+'/'+size, 第一种写法
            url: `/edu/teacher/${id}`,
            method: 'delete',
            // params
            //data表示把对象转换json进行传递到接口里面
            //data: teacherQuery
        })
    },


    //添加讲师
    addTeacher(teacher){
        return request({
            url: `/edu/teacher/addTeacher`,
            method: 'post',
            data: teacher
        })
    },

    // 根据id查询讲师
    getTeacherInfo(id){
        return request({
            url: `/edu/teacher/getTeacher/${id}`,
            method: 'get'
        })
    },

    // 根据id修改讲师
    updateTeacher(id,teacher){
        return request({
            url: `/edu/teacher/updateTeacher/${id}`,
            method: 'put',
            data: teacher,
        })
    
    }
    
}