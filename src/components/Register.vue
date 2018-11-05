<template>
  <div id="register">
    <div class="container">
      <h3>Register</h3>
      <form>
        <div class="input-field">
          <i class="material-icons prefix">alternate_email</i>
          <input type="text" id="email" v-model="email">
          <label for="email">Enter your email:</label>
        </div>
        <div class="input-field">
          <i class="material-icons prefix">assignment_ind</i>
          <input type="text" id="login" v-model="login">
          <label for="login">Enter your login:</label>
        </div>
        <div class="input-field">
          <i class="material-icons prefix">vpn_key</i>
          <input type="password" id="password" v-model="password">
          <label for="password">Enter your password:</label>
        </div>
        <br>
        <div>
        <button v-on:click="register" class="btn green">Register</button>
        </div>
        <br>
        <div>
          <router-link to="login" style="color:black; font-size: 12px">
            <u>Already have an account?</u>
          </router-link>
        </div>
        </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'register',
  data: function () {
    return {
      email: '',
      login: '',
      password: ''
    }
  },
  methods: {
    register: function (e) {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            user = firebase.auth().currentUser
            user.updateProfile({
              displayName: this.login
            }).then((user1) => {
              console.log(user)
              console.log(user1)
            }
            ).catch(error => {
              console.log(error)
            })
            this.$router.replace('/login')
          }, err => {
            alert(err.message)
          })
      e.preventDefault()
    }
  }
}
</script>

<style scoped>

</style>
