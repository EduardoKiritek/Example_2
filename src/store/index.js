import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    personajes: [],

  },
  mutations: {
    

    _setPersonajes(state, data){
      state.personajes = data
      console.log(state.personajes)
    }
  },
  actions: {
   async getPersonajes(context){
      try{
        let response = await axios.get('https://rickandmortyapi.com/api/character');
        
        context.commit('_setPersonajes', response.data.results)
      }catch(e){
        console.log(e)
      }
    }
  },
  getters: {

    getPersonajes: (state) => {
      return state.personajes;
  },
  },
});