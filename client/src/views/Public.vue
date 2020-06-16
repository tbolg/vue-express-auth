<template>
  <div class="public">
    <div>
        <b-navbar toggleable="lg" type="" class="navbar-light bg-light">
        <b-navbar-brand href="#">MEVN Boilerplate</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
            <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/">Features</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/">Pricing</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/">About</router-link>
            </li>
            </ul>  
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <router-link class="nav-link" to="/register">Register</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            </ul>  
            <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item>EN</b-dropdown-item>
            <b-dropdown-item>ES</b-dropdown-item>
            <b-dropdown-item>RU</b-dropdown-item>
            <b-dropdown-item>FA</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
        </b-collapse>
        </b-navbar>
        <router-view></router-view>
    </div>
    <div style="padding: 20px;">
        <div class="jumbotron">
        <h1 class="display-3">MEVN Boilerplate</h1>
        <p class="lead">This is a simple boilerplate for MongoDB, Express, Vue.js, Node.js, with authentication ready to go!</p>
        <hr class="my-4">
        <p>Sign up for an account, and login to see it in action. Created by Tomas Bolger.</p>
        <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">Github</a>
        </p>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store/store';

export default {
  name: 'Public',
  components: {
    
  },
  data: function() {
    return {
     
    }
  }
}
</script>
