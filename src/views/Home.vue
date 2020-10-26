<template>
  <div class="home">
    Домашняя страница
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="wrapper">
            <h1>наведи на любой блок изображения</h1>
            <div class="clip_container">
              <div class="clip clip1">
                <div class="text text1">
                  <div class="text_description__wrapper">
                    <div class="text_description__header">
                      <h2>Header is header <code>h2</code></h2>
                    </div>
                    <div class="text_description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, temporibus?
                    </div>
                  </div>
                </div>
              </div>
              <div class="clip clip2">
                <div class="text text2">
                  <div class="text_description__wrapper">
                    <div class="text_description__header">
                      <h2>Header is header <code>h2</code></h2>
                    </div>
                    <div class="text_description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, temporibus?
                    </div>
                  </div>
                </div>
              </div>
              <div class="clip clip3">
                <div class="text text3">
                  <div class="text_description__wrapper">
                    <div class="text_description__header">
                      <h2>Header is header <code>h2</code></h2>
                    </div>
                    <div class="text_description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, temporibus?
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
      background: url("https://picsum.photos/1240/600?random=1");
      //background-color: #42b983;
      clip-path: polygon(0 0, 46% 0, 20% 100%, 0% 100%);
      &:hover .text1{
        bottom: 0;
      }
    }
    .clip2 {
      background: url("https://picsum.photos/1240/600?random=2");
      clip-path: polygon(46% 0, 100% 0, 46% 100%, 20% 100%);
      &:hover .text2{
        bottom: 0;
      }
    }
    .clip3 {
      background: url("https://picsum.photos/1240/600?random=3");
      clip-path: polygon(100% 0, 100% 0, 100% 100%, 46% 100%);
      &:hover .text3{
        bottom: 0;
      }
    }
  }
  .text {
    position: absolute;
    background-color: white;
    width: 50%;
    height: 30vh;
    bottom: -50vh;
    transition: 1s;
  }
  .text_description__wrapper{
    padding: 10px;
  }
  .text_description {
    font-size: 20px;
  }
  @media screen and (max-width: 576px){
    .text {
      width: 90%;
    }
  }
</style>
