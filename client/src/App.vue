<template>
  <div id="app">
    <nav v-if="this.$route.path !== '/login' && this.$route.path !== '/register'" class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">MEVN Boilerplate</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
             <router-link class="nav-link" to="/">Home</router-link>
          </li>
        </ul>  
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
@import 'https://bootswatch.com/4/flatly/bootstrap.min.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
</style>
