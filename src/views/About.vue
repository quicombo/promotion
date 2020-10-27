<template>
  <div class="about">
    <div class="scroll_to_top__wrapper" @click="toTop">
      <font-awesome-icon :icon="['fas', 'angle-up']" size="2x" class="to_top"/>
    </div>
    <section class="main_content">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="skill_header right" >
              <span >МАКСКОМ</span>
            </div>
          </div>
          <div class="col-lg-6">
            <div ref="reveal" class="skill_description reveal" >
              ООО «Макском-МН» или просто Макском — оптовая компания, работающая на электротехническом рынке Беларуси с 2001 года.
            </div>
            <div ref="reveal" class="skill_description reveal">
              VUEJS+BOOTSTRAP Классика
            </div>
          </div>
          <div class="col-lg-6">
            <div ref="reveal" class="skill_image from_right reveal">
              <img src="@/assets/img/maxcom.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="main_content">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="skill_header left" >
              <span >АНКРОН</span>
            </div>
          </div>
          <div class="col-lg-6">
            <div ref="reveal" class="skill_image from_left reveal">
              <img src="@/assets/img/elan.png" alt="">
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
    <section class="main_content third">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="skill_header right">
              <span>МАВ</span>
            </div>
          </div>
          <div class="col-lg-6">
            <div ref="reveal" class="skill_description reveal">
              Лаки краски и прочее
            </div>
          </div>
          <div class="col-lg-6">
            <div ref="reveal" class="skill_image from_right reveal">
              <img src="@/assets/img/mav.png" alt="">
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
  import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
  import { TextPlugin } from 'gsap/TextPlugin'
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);
  gsap.registerPlugin(TextPlugin);
  export default  {
      name: 'portfolio',
      data() {
        return{
          maxcom: 'MAXCOM',
          ankron: 'ANKRON',
          mav: 'MAV'
        }
      },
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
          },
          toTop() {
              gsap.to(window, {
                  duration: 1,
                  scrollTo: {y: "#top", offsetY: 70},
              })
          },
      },
      mounted() {
          this.onscroll()
      }

  }
</script>
<style lang="scss" scoped>
.right {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
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
  .scroll_to_top__wrapper {
    position: fixed;
    bottom: 20px;
    right: 20px;
    height: 30px;
    width: 30px;
    border-radius: 4px;
    cursor: pointer;
    background-color: var(--app-navigation-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .to_top {
    color: var(--dynamic-navigation-current-color)
  }
  .skill_header{
    font-size: 20px;
  }
  .skill_header, .skill_description {
    color: var(--dynamic-title-color);
  }
  .skill_description {
    padding: 0 28px;
  }
</style>
