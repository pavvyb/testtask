<template>
    <div id="loginpage">
      <div class="container">
        <h3>Login</h3>
        <form>
          <div class="input-field">
            <i class="material-icons prefix">alternate_email</i>
            <input type="text" v-model="email" id="email">
            <label for="email">Enter your email:</label>
          </div>
          <div class="input-field">
            <i class="material-icons prefix">vpn_key</i>
            <input type="password" v-model="password" id="password">
            <label for="password">Enter your password:</label>
          </div>
          <br>
          <div>
            <button v-on:click="login" class="btn green">Login</button>
          </div>
          <br>
          <div>
            <router-link to="register" style="color:black; font-size: 12px">
              <u>Don't have an account?</u>
            </router-link>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import firebase from 'firebase'
export default{
  name: 'loginpage',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function (e) {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace('/name')
            this.$store.commit('setAuthorized', true)
          },
          err => {
            alert(err.message)
          })
      e.preventDefault()
    }
  }
}
</script>

<style scoped>

</style>
