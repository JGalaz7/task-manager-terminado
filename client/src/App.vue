<template>
  <div id="app">
    <AddTask @taskAdded="fetchTasks" />
    <TaskList ref="taskList" />
  </div>
</template>
<script>
import AddTask from './components/AddTask.vue';
import TaskList from './components/TaskList.vue';
export default {
  name: 'App',
  components: {
    AddTask,
    TaskList
  },
  methods: {
    fetchTasks() {
      this.$refs.taskList.fetchTasks();
    }
  }
}; 
</script>