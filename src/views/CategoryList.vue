<template>
  <div class="xfn-category-list">
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item>菜品类别管理</el-breadcrumb-item>
      <el-breadcrumb-item>类别列表</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <el-button type="primary" @click="addCategory">添加新的菜品类别</el-button>
    <br><br>
    <el-table :data="categoryList" stripe border>

      <el-table-column label="编号" prop="cid"></el-table-column>
    
      <el-table-column label="名称" prop="cname"></el-table-column>

      <el-table-column label="操作">
        <template slot-scope="{row,$index}">
          <el-button @click="updateCategory(row,$index)" type="success" size="mini">修改</el-button>
          <el-button @click="deleteCategory(row,$index)" type="danger" size="mini">删除</el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
export default {
  data(){
    return {
      categoryList:[]
    }
  },
  methods:{
    deleteCategory(c, i){
      this.$confirm('删除操作不可撤销！您确定吗？', '提示', {type:'warning'}).then(()=>{
        var url = this.$store.state.globalSettings.apiUrl + '/admin/category/'+c.cid;
      this.$axios.delete(url).then((res)=>{
        if(res.data.code==200){//数据库中已经删除成功
          this.categoryList.splice(i, 1);//模型数据中删除
          this.$message.success('菜品类别删除成功！');
        }else {
          this.$message.error('类别删除出差错：'+res.data.msg);
        }
      }).catch((err)=>{
        console.log(err);
      })
      }).catch(()=>{

      })
    },
    updateCategory(c, i){
      this.$prompt('请输入您想修改的类别名：','提示',{
        inputValue: c.cname
      }).then(({value})=>{

      }).catch(()=>{

      })
    },
    addCategory(){
      this.$prompt('请输入新的菜品类别名：','提示',{type:'info'}).then(({value})=>{
        //获得用户的输入，调用数据API添加到数据库
        var url = this.$store.state.globalSettings.apiUrl + '/admin/category';
        this.$axios.post(url, {cname:value}).then((res)=>{
          if(res.data.code==200){
            //数据库中添加成功
            this.$message.success('新的类别添加成功!')   
            //模型数据中添加新的类别
            this.categoryList.push({cid:res.data.cid, cname:value})
          }else {
            this.$message.error('新的类别添加出错：'+res.data.msg);
          }
        }).catch((err)=>{
          console.log(err);
        })
      }).catch(()=>{
      })
    }
  },
  mounted(){
    var url = this.$store.state.globalSettings.apiUrl + '/admin/category';
    this.$axios.get(url).then((res)=>{
      this.categoryList = res.data;
    }).catch((err)=>{
      console.log(err);
    })
  }
}
</script> 
