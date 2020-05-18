<template>
  <div>

    <!-- 阿里云视频播放器样式 -->
    <link rel="stylesheet" href="https://g.alicdn.com/de/prismplayer/2.8.1/skins/default/aliplayer-min.css" >
    <!-- 阿里云视频播放器脚本 -->
    <script charset="utf-8" type="text/javascript" src="https://g.alicdn.com/de/prismplayer/2.8.1/aliplayer-min.js" />

    <!-- 定义播放器dom -->
    <div id="J_prismPlayer" class="prism-player" />
  </div>
</template>
<script>
import vod from '@/api/vod'

export default {
    layout: 'video',//应用video布局
    asyncData({ params, error }) {
       return vod.getPlayAuthByVideoId(params.vid)
        .then(response => {
            return { 
                playAuth: response.data.data.playAuth,
                vid: params.vid
            }
        })
    },
    mounted() { //页面渲染之后  created
        new Aliplayer({
            id: 'J_prismPlayer',
            vid: this.vid, // 视频id
            playauth: this.playAuth, // 播放凭证
            encryptType: '1', // 如果播放加密视频，则需设置encryptType=1，非加密视频无需设置此项
            width: '100%',
            height: '1000px',
            // 以下可选设置
            cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589747065540&di=e79092fe662dc47ad67471089176b699&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F02%2F51%2F04%2F8957805860af9a5.jpg', // 封面
            qualitySort: 'asc', // 清晰度排序

            mediaType: 'video', // 返回音频还是视频
            autoplay: true, // 自动播放
            isLive: false, // 直播
            rePlay: false, // 循环播放
            preload: true,
            controlBarVisibility: 'hover', // 控制条的显示方式：鼠标悬停
            useH5Prism: true, // 播放器类型：html5
        }, function(player) {
            console.log('播放器创建成功')
        })
    }

}
</script>
