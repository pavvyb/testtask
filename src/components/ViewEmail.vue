<template>
  <div class="container">
    <div id="view-email">
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <h3>Your E-mail: <b>{{email}}</b></h3>
    </div>
  </div>
</template>

<script>
import firebase from '../scripts/firebaseinit'
export default{
  name: 'view-email',
  data () {
    return {
      email: ''
    }
  },
  created () {
    if(firebase.auth().currentUser) {
      this.email = firebase.auth().currentUser.email
    }
  }
}
</script>
