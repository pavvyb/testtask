<template>
  <div id="menubar">
    <nav>
      <div class="nav-wrapper green">
        <div class="container">
          <div class="brand-logo center">
            <router-link to="/" class="tablinks">Main Page</router-link>
          </div>
          <div v-if="authorized">
            <ul class="right float-left">
              <li>
                <router-link to="/name" class="tablinks" id="defaultopen">Login</router-link>
              </li>
              <li>
                <router-link to="/email" class="tablinks">Email</router-link>
              </li>
            </ul>
          </div>
          <div v-else>
            <ul class="right float-left">
              <li>
                <router-link to="/login" class="tablinks" id="defaultopen">Sign In</router-link>
              </li>
              <li>
                <router-link to="/register" class="tablinks">Sign Up</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from '../scripts/firebaseinit'
export default {
  name: 'menubar',
  data: function () {
    return {
      authorized: firebase.auth().currentUser
    }
  }
}
</script>
