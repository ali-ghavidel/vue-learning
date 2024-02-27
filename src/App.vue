<template>
  <AppHeader></AppHeader>
  <main>
    <AddTodo></AddTodo>
    <TodoList></TodoList>
    <FilterTodo></FilterTodo>
  </main>
  <AppFooter></AppFooter>
</template>

<script>
import AddTodo from './components/todo/AddTodo.vue';
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import TodoList from './components/todo/TodoList.vue';
import FilterTodo from './components/todo/FilterTodo.vue';

export default {
  data() {
    return {}
  },
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    AddTodo,
    TodoList,
    FilterTodo

  },
  methods: {},
  watch: {}
}
</script>
<style></style>
