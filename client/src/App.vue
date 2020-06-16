<template>
  <div id="app">
    <b-navbar toggleable="lg" type="" v-if="this.$route.path !== '/login' && this.$route.path !== '/register' && this.$route.path != '/'" class="navbar-light bg-light">
      <b-navbar-brand href="#">MEVN Boilerplate</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
         <ul class="navbar-nav mr-auto">
          <li class="nav-item">
             <router-link v-bind:class="{'active': this.$route.path == '/home'}" class="nav-link" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
             <router-link v-bind:class="{'active': this.$route.path == '/saved'}" class="nav-link" to="/saved">Saved</router-link>
          </li>
        </ul>  
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item v-if="this.$route.path !== '/profile'" @click="goToProfile()">Profile</b-dropdown-item>
          <b-dropdown-item @click="logout()">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import store from './store/store'

  export default {
    name: "App",
    methods: {
      logout() {
        this.$store.dispatch('clearToken');
        this.$router.go();
      },
      goToProfile() {
        this.$router.push('/profile');
      } 
    }
  }
</script>

<style>
@import 'https://bootswatch.com/4/flatly/bootstrap.min.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
</style>
