<template>
  <div class="home" style="padding: 20px;">
    <keep-alive>
    <h1> {{ "Welcome " + user.firstName + " " + user.lastName + "!" }} </h1>
    </keep-alive>
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store/store';

export default {
  name: 'Home',
  components: {
    
  },
  data: function() {
    return {
      user: store.state.user,
    }
  }
}
</script>
