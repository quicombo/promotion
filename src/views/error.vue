<template>
  <div style="padding-top: 150px;">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="header">
            OOOOOPS такой страницы не существует
          </div>
        </div>
        <div class="col-lg-12">
          <div class="joke">
            <div class="header">
              Но есть курс доллара:  {{ anotherJoke }}
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="another_joke">
            <ul v-if="errors && errors.length">
              <li v-for="error of errors" :key="error">
                {{error.message}}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "error",
        data() {
            return{
                joke: '',
                anotherJoke: '',
                errors: []
            }
        },

        mounted() {
                axios.get('https://api.icndb.com/jokes/random')
                     .then( response => {
                       this.joke = response.data.value.joke
                     });
                axios.get('https://www.nbrb.by/api/exrates/rates/145')
                     .then( response => {
                         this.anotherJoke = response.data.Cur_OfficialRate
                     })
                    .catch(e => {
                        this.errors.push(e)
                    })
            },
        computed: {

        }
        }

</script>

<style scoped lang="scss">
.header {
  font-size: 32px;
}
  @media screen and (max-width: 576px){
    .header {
      text-align: center;
    }
  }
</style>
