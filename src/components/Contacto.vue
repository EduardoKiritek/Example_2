<template>
    <div>
<h1>Componente de Contacto</h1>
<Msg :msg="msg" :frutas="frutas"/>
<br>
<router-link to="/contacto/contacto2">
<a href="">Contacto 2</a>
</router-link>
    </div>
</template>

<script>
import Msg from './Msg.vue'
export default {
  components: { Msg },
   name:'ContactoItem',
   data(){
       return{
           msg: "Prop",
           frutas:["Mazana" ,"Pera"]
       }
   }
}
</script>


