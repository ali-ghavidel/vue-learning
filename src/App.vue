<template>
  <div>
    <img src="./assets/logo.svg" alt="logo" ref="img" />
    <h1 @click="test">salam</h1>
    <br />
    <input type="text" :value="firstName" ref="fname" />
    <input type="submit" @click="test" />
    <br/>
    <p ref="pfname"></p>
    <p>new: {{ firstName }}</p>
    <br />
    <!-- <Hello :name="firstName" :family="lastName" :age="20" ref="alertRef">
      <template v-slot:header>
        header is there
      </template>
      test
    </Hello> -->
  </div>
</template>

<script>
import Hello from './components/Hello.vue'

export default {
  data() {
    return {
      firstName: 'Ali',
      lastName: 'Ghavidel'
    }
  },
  name: 'App',
  // components: {
  //   Hello
  // },
  methods: {
    test() {
      // console.log("testify "+ par1+ " " +par2);
      this.$refs.img.classList.add('testClass')
      // this.$refs.alertRef.handleH1()
      this.firstName = this.$refs.fname.value; 
    }
  },
  watch:{
    firstName(newValue, oldValue){
      console.log("old: ", oldValue);
      console.log("new: ", newValue);
      this.$refs.pfname.innerText = "old: " + oldValue;
    }
  }
}
</script>
<style></style>
