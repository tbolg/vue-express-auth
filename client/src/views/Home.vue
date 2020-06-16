<template>
  <div class="home" style="padding: 20px;">
    <h1> {{ "Welcome " + user.firstName + " " + user.lastName + "!" }} </h1>
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
