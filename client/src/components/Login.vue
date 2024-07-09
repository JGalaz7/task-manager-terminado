<template>
    <div class="container mt-5">
        <h2>Iniciar sesión</h2>
        <form @submit.prevent="login" class="form">
            <div class="form-group">
                <label for="username">Nombre de usuario</label>
                <input type="text" id="username" v-model="username" required>
            </div>
            <div class="form-group">
                <label for="password">Contraseña</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <button type="submit">Iniciar sesión</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        async login() {
            try {
                const response = await axios.post("/api/auth/login", {
                    username: this.username,
                    password: this.password
                });
                alert("Inicio de sesión exitoso");
                // Puedes redirigir al usuario a otra página aquí si lo deseas
                this.$router.push("/tasks");
            } catch (error) {
                console.error("Error:", error);
                alert("Hubo un error en el inicio de sesión. Por favor, intenta nuevamente.");
            }
        }
    }
};
</script>