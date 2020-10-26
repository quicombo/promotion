<template>

</template>

<script>
  import {gsap} from 'gsap'
    export default {
        mounted: function() {
            this.scrollAnimation();
        },
        methods: {
            scrollAnimation() {
                gsap.timeline({
                    scrollTrigger: {

                        trigger: ".box",
                        start: "center center",
                        end: "bottom top",
                        markers: true,
                        scrub: true,
                        pin: true,
                    }
                })
                    .from(".text1", { x : innerWidth * 1, opacity: 0 })
                    .from(".text2", { x : innerWidth * 1, opacity: 0 })

                gsap.timeline({
                    scrollTrigger: {
                        trigger: ".box2",
                        start: "center center",
                        end: "bottom top",
                        markers: true,
                        scrub: true,
                        pin: true,
                    }
                })
                    .from(".text4", { x : innerWidth * 1, opacity: 0 })
                    .from(".text5", { x : innerWidth * 1, opacity: 0 })
            },
        }
    };
  mounted() {
      // document.addEventListener('scroll', this.startAnimation);
      //this.startAnimation();
  },
  /*created () {
      window.addEventListener('scroll', this.startAnimation);
  },
  destroyed () {
      window.removeEventListener('scroll', this.startAnimation);
  },*/
  methods: {
      alert() {
          console.log('scrolled');
      }
      /*animateFrom(elem, direction) {
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
      },*/
      /*startAnimation() {
          gsap.registerPlugin(ScrollTrigger)
          gsap.utils.toArray('.reveal').forEach((elem) => {
              gsap.set(elem, {autoAlpha: 0});
              ScrollTrigger.create({
                  markers:false,
                  trigger: elem,
                  //toggleActions: "play none reverse none",
                  onEnter: this.animateFrom(elem),
                  onEnterBack: this.animateFrom(elem, -2),
                  onLeave: this.hide(elem)
              })
          })
      }*/
  },

</script>

<style scoped>

</style>
