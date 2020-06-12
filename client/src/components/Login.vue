<template>
  <div class="login" >
    <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h3 class="card-title text-center">MEVN Boilerplate</h3>
            <h5 class="card-title text-center">Sign In</h5>
            <br>
            <form v-on:submit.prevent="loginUser()" class="form-signin">
              <p v-if="error" class="text-danger">Incorrect username or password</p>
              <div class="form-label-group" style="margin-bottom: 10px;">
                <label for="inputEmail">Email address</label>
                <input v-on:input="invalidInput=false" v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required>
              </div>

              <div class="form-label-group" style="margin-bottom: 10px;">
                <label for="inputPassword">Password</label>
                <input v-on:input="invalidInput=false" v-model="password" :type="type" id="inputPassword" class="form-control" placeholder="Password" required>
                <div class="custom-control custom-checkbox" style="margin-top: 5px;">
                  <input @click="showPassword()" type="checkbox" class="custom-control-input" id="customCheck1" checked="">
                  <label class="custom-control-label" for="customCheck1">Show Password</label>
                </div>
              </div>
              <hr>
              <button @click.prevent="login()" class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">
                <span>Login</span>
              </button>
              <hr class="my-4">
            </form>
            <div style="text-align: center;">
                <button @click="navigateToRegister()" type="button" class="btn btn-link">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>


<script>
// @ is an alias to /src
import axios from "axios";
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Login',
  data: function() {
    return {
      password: '',
      email: '',
      error: null,
      type: 'password',
    }
  },
  methods: {
      showPassword() {
        if (this.type == 'password') {
          this.type = 'text';
        } else {
          this.type = 'password';
        }
      },
      navigateToRegister() {
        this.$router.push('/register');
      },
      async login() {
        try {
          const response = await AuthenticationService.login({
            email: this.email,
            password: this.password
          })
          this.$store.dispatch('setToken', response.data.token);
          this.$store.dispatch('setUser', response.data.user);
          console.log(response.data.token)
          this.$router.push('/');
        } catch(error) {
          console.log(error);
        }
      },
  }
}
</script>