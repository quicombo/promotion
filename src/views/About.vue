<template>
  <div class="about">
    <h1>Ищу работу за деньги</h1>
    <h2>что могу:</h2>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="skill_header">
            HTML5
          </div>
        </div>
        <div class="col-lg-6">
          <div class="skill_description">
            по факту, HTML - разметка, основа основ, но всё-же это не сложно
          </div>
        </div>
        <div class="col-lg-6">
          <div class="skill_image">
            <img src="@/assets/img/html_img.png" alt="">
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  export default  {
      name: 'about'
  }
</script>
<style lang="scss" scoped>
.about {
  padding-top: 100px;
  h1, h2{
    padding: 10px 20px;
    text-align: center;
  }
}
.skill_image img{
  width: 100%;
  height: auto;
}
</style>
