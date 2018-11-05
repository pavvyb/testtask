<template>
  <div class="container">
    <div id="view-name">
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <h3>Your registration name: <b>{{login}}</b></h3>
    </div>
  </div>
</template>

<script>
import firebase from '../scripts/firebaseinit'
export default{
  name: 'view-name',
  data: () => ({
    login: ''
  }),
  created () {
    if (firebase.auth().currentUser) {
      this.login = firebase.auth().currentUser.displayName
    }
  }
}
</script>
