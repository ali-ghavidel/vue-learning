

<template>
  <div>
    <h1>salam</h1>
    <br/>
    <Hello :name="firstName" :family="lastName" :age="20" />
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
}

</script>
<style>

</style>