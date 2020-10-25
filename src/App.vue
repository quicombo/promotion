<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <loader></loader>
    <!--<newLoader/>-->
    <router-view/>
  </div>
</template>
<script>

    import Loader from "./components/loader";
    //import newLoader from "./components/newLoader.vue";
    export default {
        components: {
           // newLoader,
            "loader" : Loader
        }
    }
</script>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
#app {

}

#nav {
  position: fixed;
  width: 100%;
  padding: 30px;
  background-color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

