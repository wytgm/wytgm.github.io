<template>
<div >
  <el-aside class="card">
    <div class="mulu"  >目录</div>
    <Toc :headers="headers" :options="options"  class="toc" />
  </el-aside>

</div>



  

</template>
<script>

</script>

<style lang="scss" scoped>
  * {
  padding: 0;
  margin: 0;
  }
  .test{
    position: relative;
    position: absolute;
    top:50px;
    right:40px;
    bottom: 10px;

  }
 .card{
  position:fixed;
   right:30px;
   top:100px;
   width: 200px;
 }
 .mulu{
  // margin-left:20px;
  font-size:15px;
  text-align: center;
 }
 .toc{
  font-size:13px;
  color: rgb(0, 84, 70);
 }

</style>
<script>
  const defaultOptions = {
  containerTag: 'nav',
  containerClass: 'vuepress-toc',
  listClass: 'vuepress-toc-list',
  itemClass: 'vuepress-toc-item',
  linkTag: 'RouterLink',
  linkClass: 'vuepress-toc-link',
  linkActiveClass: 'active',
  linkChildrenActiveClass: 'active',
}
</script>
