<template>
    <div class="logedin-nav">
        <LoginModal />
        <RegisterModal />
        <div class="nav-container">
            <div class="left-nav">
                <router-link to="/register">Home</router-link> |
                <router-link to="/projects">Projects</router-link>
            </div>
            <div class="right-nav">
                <button id="login" @click="showModal('login-modal')">Login</button>
                <button id="register" @click="showModal('register-modal')">Register</button>
            </div>
        </div>
    </div>
</template>
<script>
import LoginModal from './modals/Login.vue'
import RegisterModal from './modals/Register'

export default {
  components: {
    LoginModal,
    RegisterModal
  },
  methods: {
    showModal (modalName) {
      this.$modal.show(modalName)
    }
  }
}
</script>
<style scoped>
    .nav-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        margin: 0 auto;
        padding: 10px;
    }
    #login {
        margin-right: 10px;
        background-color: #fff;
        color: #18a0fb;
    }
    #register {
        background-color: #18a0fb;
        color: #fff;
    }
    button {
        padding: 5px 15px;
        border: 2px solid #18a0fb;
        border-radius: 5px;
    }
    button:hover{
        cursor: pointer;
    }
    a {
        text-decoration: none;
        color: #000;
    }
    a:hover {
        text-decoration: underline;
    }
</style>
