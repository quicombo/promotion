<template>
  <div class="grid_container" v-show="show">
    <div class="grid_item">
      <div class="icon__wrapper" v-if="count === 1">
        <font-awesome-icon :icon="['fab', 'html5']" size="5x" class="html5"/>
      </div>
      <div class="icon__wrapper " v-if="count === 2">
        <font-awesome-icon :icon="['fab', 'css3']" size="5x" class="css3"/>
      </div>
      <div class="icon__wrapper " v-if="count === 3">
        <font-awesome-icon :icon="['fab', 'sass']" size="5x" class="sass"/>
      </div>
      <div class="icon__wrapper " v-if="count === 4">
        <font-awesome-icon :icon="['fab', 'node-js']" size="5x" class="nodejs"/>
      </div>
      <div class="icon__wrapper " v-if="count === 5">
        <font-awesome-icon :icon="['fab', 'vuejs']" size="5x" class="vuejs"/>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters} from 'vuex';
  let _loadingInterval = 0;
    export default {
        name: "loader",
        data () {
            return {
                show: false,
                count: 1,
            }
        },
        computed: {
            ...mapGetters([
                'getLoading'
            ])
        },
        methods: {
            showProgress(show) {
                this.show = show;
            },
            start() {
                this.showProgress(true);
                this.count = 1;
                _loadingInterval = setInterval(() => {
                    this.count = this.count + 1;
                }, 250)
            },
            stop() {
                clearInterval(_loadingInterval);
                this.count = 5;
                setTimeout(() => {
                    this.showProgress(false);
                }, 250)
            }
        },
        watch: {
            getLoading: function (val) {
              if (val) {
                  this.start();
                  console.log('show loader');
              } else {
                  this.stop();
                  console.log('hide loader');
              }
            }
        }
        /* mounted: function () {
            this.$nextTick(function () {
                let timerID =  setInterval( () => {
                    this.count = this.count + 1;
                    if (this.count === 6) {
                        this.count = 1
                    }
                }, 150);
                setTimeout(() => { clearInterval(timerID); this.show = false}, 5000);
            })
        },*/
    }
</script>

<style scoped lang="scss">
  .grid_container{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    display: grid;
    grid-template-columns: 15px auto 15px;
    grid-template-rows: 15px auto 15px;
    height: calc((100vh));
    background-color: rgba(0,0,0,.5);
    z-index: 1200;
  }
  .grid_item {
    grid-column-start: 2;
    grid-row-start: 2;
    justify-self: center;
    align-self: center;

  }
  /*  icons  */
  .icon__wrapper {

  }
  .icon_style {
    color: #2d8cf0;
  }
  .html5 {
    color: #f06529;
  }
  .css3 {
    color: #2965f1;
  }
  .sass{
    color: #cc6699;
  }
  .nodejs{
    color: #3c873a  }
  .vuejs{
    color: #42b983;
  }
  .w2, .w3, .w4, .w5 {
    display: none;
  }
  .active {
    display: block;
  }
</style>
