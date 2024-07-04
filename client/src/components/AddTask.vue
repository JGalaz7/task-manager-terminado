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

<style scope>
h1 {
    text-align: center;
}
div {
    display: grid;
    align-items: center;
    justify-content: center;
}
input {
    display: flex;
    padding: 5px;
    margin-bottom: 10px;
    align-items: center;
    border-radius: 5%;
}
textarea {
    display: flex;
    padding: 5px;
    margin-bottom: 10px;
    align-items: center;
    border-radius: 5%;
}

button {
    display: flex;
    justify-content: center;
    border-radius: 5px solid;
}
button:hover {
    background: purple;
    color: white;
}
</style>

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