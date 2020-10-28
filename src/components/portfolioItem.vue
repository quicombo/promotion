<template>
  <div>
    <div class="port_item__wrapper">
      <div class="port_item__header">
        <h2>{{header}}</h2>
      </div>
      <div class="port_item__body" @click="showStack">
        <img :src=image alt="">
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
            selectedFrame: Boolean

        },
        mounted() {

        },
        computed: {


        },
        methods: {
            async showStack() {
                this.isStackVisible = true;
                //console.log(this.isStackVisible);
              await this.revealStack();
            },
             revealStack () {
                console.log('im in')
                let tl = gsap.timeline({defaults: {duration: 0.1, ease: "elastic"}});
                gsap.utils.toArray('.visible').forEach(item => {
                    tl.to(item, {y:-180, opacity: 1}, "+=0.1")
                    console.log('revealing stack item')
                })

            },
        },
        watch: {
            /*isStackVisible: {
                handler: function (val, oldVal) {
                    console.log('новое значение: %s, старое значение: %s', val, oldVal);
                    this.revealStack();
                }
            }*/



        }
    }
</script>

<style scoped lang="scss">
  .port_item__body {
    position: relative;
    img {
      width: 100%;
    }
  }
  .port_item__stack__item {
    opacity: 0;
    color: #FFFFFF;
    margin: 5px;
    padding: 0 5px;
    background-color: #2D3142;
    height: 25px;
    display: inline-flex;
    font-weight: 300;
    border-radius: 3px;
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
