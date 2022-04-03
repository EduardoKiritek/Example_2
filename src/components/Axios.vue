<template>
  <div>
    <h1>Axios</h1>
      <div class="row">
      <div
        class="col col-lg-3"
        v-for="personaje in personajes"
        :key="personaje"
      >
      <img :src="personaje.image" :alt="personaje.name">
        <p>{{ personaje.name }}</p>
        <p>{{personaje.species}}</p>
        <p > <span class="status"></span>{{ personaje.status }}</p>
        
      </div>
    </div>
  
  </div>
</template>

<script>

/*
TEMPLATE

*/

//import axios from "axios";
import {mapActions, mapGetters} from "vuex"
export default {
  name: "axiosItem",

  data() {
    return {
      //personajes: null,
    };

  },

 methods: {
        ...mapActions(["getPersonajes"])
       
    },

  mounted() {
   /* axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      this.personajes = response.data.results;
    });*/
    console.log(this.getPersonajes())
  },
  computed:{
      ...mapGetters({
          personajes:"getPersonajes"
      })
  }
};
</script>

<style scoped>
.status{
    width: 20px;
    height: 10px;
    border-radius: 100%;
    padding: 10px 10px;
    background: green;
}
</style>