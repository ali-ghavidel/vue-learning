<template>
  <div class="card stat">
      <p class="corner"><span id="items-left">{{ notCompleteCounter }}</span> مورد باقی مانده</p>
      <div class="filter">
        <button id="all" :class="{on: filter === 'all'}" @click="getFilter('all')">همه</button>
        <button id="active" :class="{on: filter === 'active'}" @click="getFilter('active')">فعال</button>
        <button id="completed" :class="{on: filter === 'completed'}" @click="getFilter('completed')">تکمیل</button>
      </div>
      <div class="corner">
        <button id="clear-completed" style="cursor: pointer;" @click="deleteCompleted" >حذف تکمیل شده ها</button>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    notCompleteCounter: Number,
    filter: String,
  },
  methods:{
  deleteCompleted(){
    this.$emit('deleteCompleted');
  },
  getFilter(filter){
    this.$emit('getFilter',filter);
  }
  
}
}
</script>

<style>

</style>