<script>
export default {
  props: {
    msg: {
    type: String,
    required: true
  }
  },
  mounted(){
    console.log(this.$route.params.id);
    console.log(this.$route.params.title);
  },
  methods: {
    getQuery(){
      console.log(this.$route.query.name);
    }
  }
}

</script> 

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
    <h2 @click="getQuery">Hello World</h2>
    <hr />
  </div>
</template>

<style scoped>
</style>
