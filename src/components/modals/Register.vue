<template>
  <div class="register">
    <modals-container />
    <v-dialog />
    <modal name="register-modal" adaptive=true height="100%">
      <div class="modal-content">
      <div slot="top-right">
        <button id="close" @click="$modal.hide('register-modal')">❌</button>
      </div>
      <form action="POST">
        <h1>Register</h1>
        <input type="text" placeholder="Enter firstname" required>
        <input type="text" placeholder="Enter lastname" required>
        <input type="email" placeholder="Enter email" required>
        <input type="password" placeholder="Enter password" minlength="6" required>
        <input type="text" placeholder="Enter phonenumber">
        <input type="text" placeholder="Enter country">
        <button>Register</button>
      </form>
      </div>
    </modal>
  </div>
</template>
<script>
export default {
  data () {
    return {
      registerData: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        phonenumber: '',
        country: '',
        profileImage: ''
      }
    }
  }
}
</script>

<style scoped>
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

  textarea {
    min-width: 90%;
    max-width: 90%;
    padding: 10px;
    border: 1px solid silver;
    border-radius: 5px;
  }

  form button {
    padding: 5px 15px;
    border: 1px solid rgb(7, 196, 16);
    border-radius: 5px;
    color:rgb(7, 196, 16);
    background-color: #fff;
  }
</style>
