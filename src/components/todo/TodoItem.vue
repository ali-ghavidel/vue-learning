<template>
  <li class="card" draggable="true">
    <div class="cb-container"  @click="changeDone">
      <input type="checkbox" class="cb-input" :checked="todo.done ? true : null" />
      <span class="check"></span>
    </div>
    <p class="item">{{ todo.title }}</p>
    <button class="clear" @click="deleteTodo">
      <img src="/assets/images/icon-cross.svg" alt="Clear it" />
    </button>
  </li>
</template>

<script>
export default {
  props: {
    todo: Object
  },
  methods: {
    deleteTodo() {
      this.$emit('deleteTodo', this.todo.id)
    },
    changeDone(){
      this.$emit('changeDone', this.todo.id, !this.todo.done)
    }
  }
}
</script>

<style></style>
