<template>
  <div id="mainpage">
    <div class="container">
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <h1>Welcome!</h1>
      <div v-if="!this.authorized" class="container">
      <h5>If you are registered, please, <u><router-link to="login">Login</router-link></u>!</h5>
      <p>Otherwise, you have to <u><router-link to="register">register</router-link></u>!</p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '../scripts/firebaseinit'
export default{
  name: 'mainpage',
  data () {
    return {
      authorized: firebase.auth().currentUser
    }
  }
}
</script>
