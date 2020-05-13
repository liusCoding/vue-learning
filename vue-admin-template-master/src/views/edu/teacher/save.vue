<template>
  <div class="app-container">
     <el-form label-width="120px">
      <el-form-item label="讲师名称">
        <el-input v-model="teacher.name"/>
      </el-form-item>
      <el-form-item label="讲师排序">
        <el-input-number v-model="teacher.sort" controls-position="right" />
      </el-form-item>
      <el-form-item label="讲师头衔">
        <el-select v-model="teacher.level" clearable placeholder="请选择">
          <el-option :value="1" label="高级讲师"/>
          <el-option :value="2" label="首席讲师"/>
        </el-select>
      </el-form-item>
      <el-form-item label="讲师资历">
        <el-input v-model="teacher.career"/>
      </el-form-item>
      <el-form-item label="讲师简介">
        <el-input v-model="teacher.intro" :rows="10" type="textarea"/>
      </el-form-item>

      <!-- 讲师头像：TODO -->

        <!-- 讲师头像 -->
      <el-form-item label="讲师头像">

          <!-- 头衔缩略图 -->
          <pan-thumb :image="teacher.avatar"/>
          <!-- 文件上传按钮 -->
          <el-button type="primary" icon="el-icon-upload" @click="imagecropperShow=true">更换头像
          </el-button>

          <!--
      v-show：是否显示上传组件
      :key：类似于id，如果一个页面多个图片上传控件，可以做区分
      :url：后台上传的url地址
      @close：关闭上传组件
      @crop-upload-success：上传成功后的回调 
        <input type="file" name="file"/>
      -->
          <image-cropper
                        v-show="imagecropperShow"
                        :width="300"
                        :height="300"
                        :key="imagecropperKey"  
                        :url="BASE_API+'/eduoss/file'"
                        field="file"
                        @close="close"
                        @crop-upload-success="cropSuccess"/>
      </el-form-item>

      <el-form-item>
        <el-button :disabled="saveBtnDisabled" type="primary" @click="saveOrUpdate">保存</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>


<script>
import teacherApi from "@/api/edu/teacher";
import ImageCropper from '@/components/ImageCropper'
import PanThumb from '@/components/PanThumb'

export default {

  components: {ImageCropper,PanThumb},
    data(){
        return{
            teacher: {
                name: '',
                sort: 0,
                level: 1,
                career:'',
                intro: '',
                avatar: ''
            },

            imagecropperShow: true,
            //上传组件的唯一标识
            imagecropperKey: 0, 
            // 保存按钮是否禁用
            saveBtnDisabled: false,
            // 获取BASE_API的值
            BASE_API: process.env.BASE_API,
        }
    },

    created(){
            this.init()     
    },

    //监听路由变化
    watch: {
        //路由变化的方式  路由发生变化，方法就会执行
        $route(to,from){
            this.init()
        }
    }
    ,

    methods: {
      // 关闭上传弹窗的方法
          close(){
            this.imagecropperShow = false

            //上传组件初始化
            this.imagecropperKey = this.imagecropperKey + 1
          },
        // 上传成功的方法
        cropSuccess(data){

          //关闭弹框
          this.imagecropperShow = false;
          // 上传之后接口返回的图片地址
          this.teacher.avatar = data.url
          //每次上传成功后，key变化
          this.imagecropperKey = this.imagecropperKey + 1
        },

        // 根据id查询讲师
        getTeacherById(id){
            teacherApi.getTeacherInfo(id)
                .then(response => {
                    this.teacher = response.data.teacher;
                })
        },

        saveOrUpdate(){
            // 判断修改还是添加 根据teacher是否有id
            console.log(this.teacher.id)
            if(!this.teacher.id){
                 //添加
                this.saveTeacher()
            }else{
                 this.updateTeacherById(this.teacher.id)
            }

              
        },

        // 修改讲师的方法
        updateTeacherById(id){
            teacherApi.updateTeacher(id,this.teacher)
                .then(response => {
                    // 提示信息
                    this.$message({
                        type: 'success',
                        message: '修改成功'
                    })

                     //回到列表页面  路由跳转
                    this.$router.push({path:'/teacher/table'})
                })
        },

      
    

        saveTeacher(){
            teacherApi.addTeacher(this.teacher)
                      //添加成功
                      .then(response => {
                          //提示成功
                        this.$message({
                            type: 'success',
                            message: '添加成功！'
                        })
                         //回到列表页面  路由跳转
                         this.$router.push({path:'/teacher/table'})
                      })
        },

        init(){
             // 页面渲染之前执行
            if(this.$route.params && this.$route.params.id){
                // 从路径中获取id的值
                const id = this.$route.params.id
                // 调用根据id查询的方法
                this.getTeacherById(id)
            }else{
                //路径没有id值，是添加操作
                //清空表单
                this.teacher = {}
            }
        }
    }
}
</script>