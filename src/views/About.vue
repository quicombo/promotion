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
      mounted() {
          this.startAnimation();
      },
      methods: {
          animateFrom(elem, direction) {
              direction = direction | 1;
              let x = 0;
              let y = direction * 100;
              console.log(elem);
              if(elem.classList.contains('from_left')) {
                  x = -100;
                  y = 0
              } else
              if (elem.classList.contains('from_right')) {
                  x = 100;
                  y = 0;
              }
              gsap.fromTo(elem, {
                  x: x,
                  y: y,
                  autoAlpha: 0
              }, {
                  duration: 1.25,
                  x: 0,
                  y: 0,
                  autoAlpha: 1,
                  ease: "expo",
                  overwrite: "auto"
              });
          },
          hide(elem) {
              gsap.set(elem, {autoAlpha: 0});
          },
          startAnimation() {

              //gsap.registerPlugin(ScrollTrigger)
              gsap.utils.toArray('.reveal').forEach((elem) => {
                  gsap.set(elem, {autoAlpha: 0});
                  ScrollTrigger.create({
                      markers:false,
                      trigger: elem,
                      toggleActions: "play none reverse none",
                      onEnter: this.animateFrom(elem),
                      onEnterBack: this.animateFrom(elem, -2),
                      onLeave: this.hide(elem)
                  })
              })
          }
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
