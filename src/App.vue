<script>

export default {
  name: "App",
};
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />
    <ul>
      <li>
        <router-link to="/hello/123/ali?name=is">Hello world</router-link>
      </li>
      <li>
        <router-link to="/welcome">wellcome</router-link>
      </li>
      <li>
        <router-link to="/">Home</router-link>
      </li>
    </ul>
  </header>
  <router-view>
    
  </router-view>
</template>

<style scoped></style>
