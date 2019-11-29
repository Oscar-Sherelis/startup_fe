<template>
  <div class="login">
    <modal name="login-modal" adaptive="true" height="60%">
      <div class="modal-content">
        <div slot="top-right">
          <button id="close" @click="$modal.hide('login-modal')">❌</button>
        </div>
      <form action="POST">
        <h1>Login</h1>
        <input type="email" placeholder="Enter email" required>
        <input type="password" placeholder="Enter password" required>
        <button>Login</button>
      </form>
      </div>
    </modal>
  </div>
</template>
<script>
// interceptor
// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data () {
    return {
      loginData: {
        email: '',
        password: ''
      }
    }
  }
}
</script>
<style scoped>
  #close {
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: #fff;
    border: none;
    font-size: 32px;
  }

  #close:hover {
    cursor: pointer;
  }
  .modal-content {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
  }

  form {
    width: 90%;
    box-sizing: border-box;
  }
  input {
    padding: 10px;
    border: 1px solid silver;
    border-radius: 5px;
  }
  input:not([type="submit"]) {
    width: 90%;
    margin-bottom: 10px;
  }

  form button {
    padding: 5px 15px;
    border: 1px solid rgb(7, 196, 16);
    border-radius: 5px;
    color:rgb(7, 196, 16);
    background-color: #fff;
  }
</style>
