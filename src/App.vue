

<template>
  <div>
    <h1>salam</h1>
    <br/>
    <Hello :name="firstName" :family="lastName" :age="20" @childClicked="test" />
  </div>
</template>

<script>
import Hello from './components/Hello.vue';

export default {
  data(){
    return {
      firstName: "Ali",
      lastName: "Ghavidel"
    }
  },
  name: "App",
  components: {
    Hello,
  },
  methods:{
    test(par1,par2){
      console.log("testify "+ par1+ " " +par2);
    }
  },
}

</script>
<style>

</style>