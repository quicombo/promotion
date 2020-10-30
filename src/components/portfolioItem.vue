<template>
  <div>
    <div class="port_item__wrapper">
      <div class="port_item__header">
        <h2>{{header}}</h2>
      </div>
      <div class="port_item__body" @click="showStack">
        <img :src=image :alt="this.header" :title="'Компания ' + this.header">
        <div class="port_item__stack__wrapper" >
          <div class="port_item__stack__item" v-for="item in portfolioStack" v-bind:key="item.id" v-bind:class="{ visible : isStackVisible}">
            {{ item }}
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script scoped>
    import { gsap } from 'gsap'
    export default {
        name: "portfolioItem",
        data() {
            return{
              isStackVisible: false
            }
        },
        props: {
          header: String,
          portfolioStack: {
              type: Array
          },
          image: {},
        },
        mounted() {

        },
        computed: {


        },
        methods: {
            showStack() {
              this.isStackVisible = !this.isStackVisible;
              // console.log(this.isStackVisible);
              // this.revealStack();
            },
             revealStack () {
                console.log('im in')
                let tl = gsap.timeline({defaults: {duration: 0.1, ease: "elastic"}});
                gsap.utils.toArray('.visible').forEach(item => {
                    tl.set(item, {y:-180, opacity: 1}, "+=0.1")
                })
               // let count = this.portfolioStack.length;
                // let i = 1;
                // let timerID = setInterval(() => {
                //    gsap.to(`.port_item__stack__item:nth-child(${i})`, {
                //       opacity: 1,
                //       y: -180
                //     });
                //     i++;
                //     if (i=this.portfolioStack.length){
                //       clearInterval(timerID);
                //     }
                //   }, 500)
            },
        },
        watch: {
            isStackVisible: {
                handler: function () {
                    this.revealStack();
                }
            }
        }
    }
</script>

<style scoped lang="scss">
h2 {
  color: var(--dynamic-title-color);
}
  .port_item__body {
    position: relative;
    img {
      width: 100%;
    }
  }
  .port_item__stack__item {
    opacity: 0;
    color: var(--dynamic-navigation-color);
    margin: 5px;
    padding: 0 5px;
    background-color: #2D3142;
    height: 25px;
    display: inline-flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    border-radius: 3px;
    box-shadow: 2px 2px 2px #4F5D75;
    transition: .3s;
  }
  .port_item__stack__wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .visible {
    //opacity: 1;
    //transform: translateY(-180px);
  }
</style>
