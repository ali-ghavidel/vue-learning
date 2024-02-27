<template>
  <header class="card">
    <h1>لیست وظایف</h1>

    <button id="theme-switcher">
      <img :src="darkMode ? moonImage : sunImage" alt="Change color theme" @click="changeTheme" />
    </button>
  </header>
</template>

<script>
import Sun from '../assets/images/icon-sun.svg'
import Moon from '../assets/images/icon-moon.svg'

export default {
  data() {
    return {
      sunImage: Sun,
      moonImage: Moon,
      darkMode: true
    }
  },
  methods: {
    changeTheme() {
      this.darkMode ? document.querySelector('body').classList.add("light") : document.querySelector('body').classList.remove("light") ;
      this.darkMode = !this.darkMode;
      
    }
  }
}
</script>

<style></style>
