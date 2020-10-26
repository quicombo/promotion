<template>
  <div id="app" class="app-background">
    <div id="nav">
      <div class="routes_wrapper">
      <router-link to="/">Главная</router-link> |
      <router-link to="/about">Не главная</router-link> |
      <router-link to="/contacts">Контакты</router-link>
      </div>
      <div class="theme_picker">
        <label class="switch" title="сменить режим">
          <input type="checkbox" @click="changeTheme">
          <span class="slider round"></span>
        </label>
        <!--<label for="theme_switch">
          <input type="checkbox" class="switch" id="theme_switch" @click="changeTheme">
          <span class="slider"></span>
          switch
        </label>-->
      </div>
    </div>
    <loader></loader>
    <!--<newLoader/>-->
    <router-view/>
  </div>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'
    import Loader from "./components/loader";
    //import newLoader from "./components/newLoader.vue";
    export default {
        components: {
           // newLoader,
            "loader" : Loader
        },
        data() {
            return {
              change: ''
            }
        },
        mounted() {
            let bodyElement = document.body;
            let navElement = document.getElementById('nav')
            bodyElement.classList.add("app-background");
            navElement.classList.add("nav-background");
        },
        computed: {
          ...mapGetters([
              'THEME'
          ]),
        },
        methods: {
            ...mapActions([
                'TOGGLE_THEME'
            ]),
            changeTheme() {
                this.TOGGLE_THEME();
                console.log(this.THEME);
                let htmlElement = document.documentElement;
                if(this.THEME) {
                    htmlElement.setAttribute('theme', 'dark');
                }
                else {
                    htmlElement.setAttribute('theme', 'light');
                }
            },
        },
        watch: {
        }
    }
</script>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

#nav {
  position: fixed;
  z-index: 102030;
  width: 100%;
  padding: 30px;
  background-color: var(--app-navigation-color);
  display: flex;
  justify-content: space-between;
}

#nav a {
  font-weight: bold;
  color: var(--dynamic-navigation-color);
}

#nav a.router-link-exact-active {
  color: var(--dynamic-navigation-current-color);
}
  .switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 28px;
    margin: 0;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--app-background-color);
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 24px;
    width: 24px;
    left: 2px;
    bottom: 2px;
    background-color: var(--dynamic-title-color);
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: var(--app-background-color);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px var(--app-background-color);
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(22px);
    -ms-transform: translateX(22px);
    transform: translateX(22px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
</style>

