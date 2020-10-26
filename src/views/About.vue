<template>
  <div class="about">
    <h1>Ищу работу за деньги</h1>
    <h2 style="">что могу:</h2>
    <section class="main_content">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="skill_header">
              HTML5
            </div>
          </div>
          <div class="col-lg-6">
            <div ref="reveal" class="skill_description reveal">
              по факту, HTML - разметка, основа основ, но всё-же это не сложно
            </div>
          </div>
          <div class="col-lg-6">
            <div ref="reveal" class="skill_image from_right reveal">
              <img src="@/assets/img/html_img.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="main_content">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="skill_header">
              CSS3
            </div>
          </div>
          <div class="col-lg-6">
            <div ref="reveal" class="skill_image from_left reveal">
              <img src="@/assets/img/css_img.png" alt="">
            </div>
          </div>
          <div class="col-lg-6">
            <div ref="reveal" class="skill_description reveal">
              CSS - делаем из разметки то, что придумал воспалённый мозг дизайнера
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="main_content">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="skill_header">
              JS
            </div>
          </div>
          <div class="col-lg-6">
            <div ref="reveal" class="skill_description reveal">
              Оживляем нашу разметку и стили
            </div>
          </div>
          <div class="col-lg-6">
            <div ref="reveal" class="skill_image from_right reveal">
              <img src="@/assets/img/js_img.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
<script>
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  gsap.registerPlugin(ScrollTrigger);
  export default  {
      name: 'about',
      methods: {
          onscroll() {
              gsap.utils.toArray(".reveal").forEach(anim => {
                  gsap.from(anim, {
                      scrollTrigger: {
                          start: "top bottom",
                          end: "top center",
                          scrub: 1,
                          trigger: anim
                      },
                      y: 120,
                      opacity: 0.1
                  })
              })
          }
      },
      mounted() {
          this.onscroll()
      }

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
  .main_content {
    margin-bottom: 50px;
    margin-top: 25px;
  }
</style>
