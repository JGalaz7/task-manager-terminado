<template>
    <div>
        <h1>Add Task</h1>
        <form @submit.prevent="addTask">
            <input v-model="title" placeholder="Title" required />
            <textarea v-model="description" placeholder="Description"></textarea>
            <button type="submit">Add Task</button>
        </form>
    </div>
</template>
<script>
import api from '../services/api';
export default {
    data() {
        return {
            title: '',
            description: ''
        };
    },
    methods: {
        async addTask() {
            try {
                await api.post('/tasks', {
                    title: this.title,
                    description: this.description
                });
                this.title = '';
                this.description = '';
                this.$emit('taskAdded');
            } catch (error) {
                console.log(error);
            }
        }
    }
}; 
</script>