<template>
  <div id="app">
    <div id="nav">
      <div class="routes_wrapper">      
      <router-link to="/">Главная</router-link> |
      <router-link to="/about">Не главная</router-link> |
      <router-link to="/contacts">Контакты</router-link>
      </div>
      <div class="theme_picker">
        <label for="switcher">Сменить цвет</label>
        <input id="switcher" type="checkbox" v-model="darkMode" class="theme_switch">
      </div>
      {{ darkMode }}
    </div>
    <loader></loader>
    <!--<newLoader/>-->
    <router-view/>
  </div>
</template>
<script>
    import { mapGetters} from 'vuex';
    import Loader from "./components/loader";
    //import newLoader from "./components/newLoader.vue";
    export default {
        components: {
           // newLoader,
            "loader" : Loader
        },
        data() {
          return{
            darkMode: false
          }
        },
        mounted() {
            
        },
        computed: {
            ...mapGetters([
                'getTheme'
            ]),
            
        },
        methods: {
        
        
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
  background-color: #2c3e50;
  display: flex;
  justify-content: space-between;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

