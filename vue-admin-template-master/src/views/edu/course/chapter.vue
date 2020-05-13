<template>

  <div class="app-container">

    <h2 style="text-align: center;">发布新课程</h2>

    <el-steps :active="2" process-status="wait" align-center style="margin-bottom: 40px;">
      <el-step title="填写课程基本信息"/>
      <el-step title="创建课程大纲"/>
      <el-step title="最终发布"/>
    </el-steps>

    <el-form label-width="120px">

      <el-form-item>
        <el-button @click="previous">上一步</el-button>
        <el-button :disabled="saveBtnDisabled" type="primary" @click="next">下一步</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
    data() {
        return {
            saveBtnDisabled:false
        }
    },
    created() {

    },
    methods:{
        previous() {
            this.$router.push({path:'/course/info/'+this.courseId})
        },
        next() {
            //跳转到第二步
            this.$router.push({path:'/course/publish/'+this.courseId})
        }
    }
}
</script>