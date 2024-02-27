<template>
    <div>
        <h1 @click="handleH1">{{ name }} {{ family }}</h1>
        <br>
        <p>{{ age }}</p>
    </div>
</template>
<script>
export default {
    props: {
        name: String,
        family: String,
        age: Number
    },
    methods: {
        handleH1(){
            alert(this.name);
            this.$emit("childClicked",this.name,this.family)
        }
    },
}
</script>
<style scoped>
h1{
    color: red;
}
</style>