<template>
  <div class="login">
    <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h3 class="card-title text-center">MEVN Boilerplate</h3>
            <h5 class="card-title text-center">Register</h5>
            <form v-on:submit.prevent="register()" class="form-signin">
                <p v-if="userDetailsTaken" class="text-danger">Username already in use.</p>
                <div class="form-label-group" style="margin-bottom: 10px;">
                    <label for="inputFirstName">First Name</label>
                    <input v-on:input="setUserDetailsTaken()" v-model="firstName" type="text" id="inputFirstName" class="form-control" placeholder="First Name" required autofocus>
                </div>
                <div class="form-label-group" style="margin-bottom: 10px;">
                    <label for="inputLastName">Last Name</label>
                    <input v-on:input="setUserDetailsTaken()" v-model="lastName" type="text" id="inputLastName" class="form-control" placeholder="Last Name" required autofocus>
                </div>
                <div class="form-label-group" style="margin-bottom: 10px;">
                    <label for="inputEmail">Email address</label>
                    <input v-on:input="setUserDetailsTaken()" v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                </div>

                <div class="form-label-group" style="margin-bottom: 10px;">
                    <label for="inputPassword">Password</label>
                    <input v-on:input="setUserDetailsTaken()" v-model="password" :type="type" id="inputPassword" class="form-control" placeholder="Password" required>
                </div>
                <div class="custom-control custom-checkbox" style="margin-top: 5px;">
                  <input @click="showPassword()" type="checkbox" class="custom-control-input" id="customCheck1" checked="">
                  <label class="custom-control-label" for="customCheck1">Hide Password</label>
                </div>
              <hr>
              <button @click.prevent="register()" class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Register</button>
              <hr class="my-4">
            </form>
            
            <div style="text-align: center;">
                <button @click="navigateToLogin()" type="button" class="btn btn-link">Login</button>
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
import AuthenticationService from "../services/AuthenticationService"

export default {
  name: 'Register',
  data: function() {
      return {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          type: "password",
          userDetailsTaken: false,
      }
  },
  methods: {
    setUserDetailsTaken() {
      this.userDetailsTaken = false;
    },
    showPassword() {
      if (this.type == 'password') {
        this.type = 'text';
      } else {
        this.type = 'password';
      }
    },
    navigateToLogin() {
        this.$router.push('/login');
    },
    async register() {
        try {
            const response = await AuthenticationService.register({
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password,
            })
            console.log(response.data);
            //this.$store.dispatch('setToken', response.data.token);
            //this.$store.dispatch('setUser', response.data.user);
            this.navigateToLogin();
        } catch (error) {
          this.userDetailsTaken = true;
          console.log(error);
        }
    }
  }
}
</script>