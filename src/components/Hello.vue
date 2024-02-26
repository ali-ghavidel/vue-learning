<template>
    <div>
        <h1>{{ name }} {{ family }}</h1>
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
    methods: {},
}
</script>
<style scoped>
h1{
    color: red;
}
</style>