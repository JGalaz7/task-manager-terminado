<template>
    <div class="container mt-5">
        <h2>Registro</h2>
        <form @submit.prevent="register" class="form">
            <div class="form-group">
                <label for="username">Nombre de usuario</label>
                <input type="text" id="username" v-model="username" required>
            </div>
            <div class="form-group">
                <label for="password">Contraseña</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <button type="submit">Registrar</button>
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
        async register() {
            try {
                const response = await axios.post("/api/auth/register", {
                    username: this.username,
                    password: this.password
                });
                alert("Usuario registrado correctamente");
                // Puedes redirigir al usuario a otra página aquí si lo deseas
                this.$router.push("/login");
            } catch (error) {
                console.error("Error:", error);
                alert("Hubo un error en el registro. Por favor, intenta nuevamente.");
            }
        }
    }
};
</script>
