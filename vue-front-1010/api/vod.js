import request from '@/utils/request'

export default {
    //根据视频id获取视频凭证
  getPlayAuthByVideoId(videoId) {
    return request({
      url: `/eduvod/video//getPlayAuth/${videoId}`,
      method: 'get'
    })
  }
}