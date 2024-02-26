

<template>
  <div>
    <h1>salam</h1>
    <br/>
    <Hello :name="firstName" :family="lastName" :age="20" />
  </div>
</template>

<script setup>
import Hello from './components/Hello.vue';
import { ref } from 'vue';

const firstName = ref("Ali");
const lastName = ref("Ghavidel");
</script>
<style>

</style>