<template>
    <div>
<h3>Mensaje desde {{msg}} </h3>
<h3 v-for="fruta in frutas" :key="fruta">{{fruta}}</h3>


    </div>
</template>

<script>
export default {
  name:"MsgItem",
  props:[
      "msg", "frutas"
      
      /* msg:{
          type:String,
      },
      frutas:{
          type:Array
      }*/
  ],

mounted(){
console.log(this.msg)
}
}
</script>