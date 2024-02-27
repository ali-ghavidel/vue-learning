<template>
    <div>
        <h1>{{ name }} {{ family }}</h1>
        <br>
        <p>{{ age }}</p>
        <p><slot name="header"></slot></p>
        <p><slot></slot></p>
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
        }
    },
}
</script>
<style scoped>
h1{
    color: red;
}
</style>