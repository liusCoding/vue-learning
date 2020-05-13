import request from '@/utils/request'
export default {
   
    //定义查询后端的APi方法

    //根据课程id获取章节和小节数据列表

    getAllChapterVideo(courseId){
        return request(
            {
                url: `/edu/chapter/getChapterVideo/${courseId}`,
                method: 'get'
            }
        )
    }
}
