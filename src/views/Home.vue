<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="wrapper">
            <h1>описание</h1>
            <div class="clip_container">
              <div class="clip clip1">
                <div class="text text1">
                  <div class="text_description__wrapper">
                    <div class="text_description__header">
                      <h2>Имя: Арсений</h2>
                    </div>
                    <div class="text_description">
                      Истинный беларус.
                    </div>
                    <div class="text_description">
                      Характер — нордический, выдержанный.
                    </div>
                    <div class="text_description">
                      С товарищами по работе поддерживаю хорошие отношения.
                    </div>
                    <div class="text_description">
                      Безукоризненно выполняю свой служебный долг.
                    </div>
                  </div>
                </div>
              </div>
              <div class="clip clip2">
                <div class="text text2">
                  <div class="text_description__wrapper">
                    <div class="text_description__header">
                      <h2>Возраст: 35 лет</h2>
                    </div>
                    <div class="text_description">
                      Семейное положение - женат.
                    </div>
                    <div class="text_description">
                      Детей нет.
                    </div>
                    <div class="text_description">

                    </div>
                    <div class="text_description">

                    </div>
                  </div>
                </div>
              </div>
              <div class="clip clip3">
                <div class="text text3">
                  <div class="text_description__wrapper">
                    <div class="text_description__header">
                      <h2>Навыки и умения:</h2>
                    </div>
                    <div class="text_description">
                      HTML5
                    </div>
                    <div class="text_description">
                      CSS3, SCSS, Bootstrap, Grid
                    </div>
                    <div class="text_description">
                      JS, VueJs, GSAP
                    </div>
                    <div class="text_description">
                      Git
                    </div>
                    <div class="text_description">
                      Figma, Photoshop, Adobe xD
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
// import gsap from 'gsap'
export default {
  name: 'Home',
  components: {
  },
  mounted() {

  }

}
</script>
<style lang="scss" scoped>
  h1, h2 {
    color: var(--dynamic-title-color);
  }
  .home {
    width: 100%;
    height: calc((100vh));
    padding-top: 100px;
  }
  .clip_container {
    position: relative;
    z-index: 1020;
    width: 100%;
    height: 60vh;
    margin: 0 auto;
    overflow: hidden;
    &:hover .clip {
      clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
    }
    .clip {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      transition: .5s;
      &:hover {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
      }
    }
    .clip1 {

      background: url("../assets/img/me1.jpeg") no-repeat center;
      background-size: cover;
      //background-color: #42b983;
      clip-path: polygon(0 0, 46% 0, 20% 100%, 0% 100%);
      &:hover .text1{
        bottom: 0;
      }
    }
    .clip2 {

      background: url("../assets/img/me1.jpeg") bottom;
      background-size: cover;
      clip-path: polygon(46% 0, 100% 0, 46% 100%, 20% 100%);
      &:hover .text2{
        bottom: 0;
      }
    }
    .clip3 {

      background: url("../assets/img/me1.jpeg") top;
      background-size: cover;
      clip-path: polygon(100% 0, 100% 0, 100% 100%, 46% 100%);
      &:hover .text3{
        bottom: 0;
      }
    }
  }
  .text {
    position: absolute;
    background-color: var(--app-background-color);
    width: 50%;
    height: 30vh;
    bottom: -30vh;
    left: 10px;
    transition: 1s;
  }
  .text_description__wrapper{
    padding: 10px;
  }
  .text_description {
    font-size: 20px;
    color: var(--dynamic-subtitle-color);
  }
  @media screen and (max-width: 576px){
    .text {
      width: 90%;
    }
    .text_description {
      font-size: 14px;
    }
  }
</style>
