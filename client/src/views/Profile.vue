<template>
  <div class="profile" style="padding: 20px;">
    <div class="jumbotron">
        <h2>Your Details</h2>
        <div style="justify-content: split-between; display: flex;">
        <div style="width: 33%; padding: 10px;">
        <div class="form-group">
            <label>First Name:</label>
            <input v-model="this.user.firstName" type="text" class="form-control" placeholder="First name">
        </div>
        <div class="form-group">
            <label>Another Preference:</label>
            <input type="text" class="form-control" placeholder="Another preference">
        </div>
        </div>
        <div style="width: 33%; padding: 10px;">
        <div class="form-group">
            <label>Last Name:</label>
            <input v-model="this.user.lastName" type="text" class="form-control" placeholder="Last name">
        </div>
        <div class="form-group">
            <label>Another Preference:</label>
            <input type="text" class="form-control" placeholder="Another preference">
        </div>
        </div>
        <div style="width: 33%; padding: 10px;">
        <div class="form-group">
            <label>Email address</label>
            <input v-model="this.user.email" type="email" class="form-control" placeholder="Email">
        </div>
        <div class="form-group">
            <label>Another Preference:</label>
            <input type="text" class="form-control" placeholder="Another preference">
        </div>
        </div>
        </div>
        <div class="form-group" style="padding-left: 10px;">
            <button type="button" class="btn btn-success" style="margin-right: 10px;">Save Changes</button>
            <button type="button" class="btn btn-danger">Clear Changes</button>
        </div>
        <hr>
        <h2>Change Password</h2>
        <div style="width: 33%; padding: 10px;">
            <div class="form-group">
            <label for="exampleInputPassword1">Old Password</label>
            <input type="password" class="form-control" placeholder="Password">
            </div>
            <div class="form-group">
            <label for="exampleInputPassword1">New Password</label>
            <input type="password" class="form-control" placeholder="Password">
            </div>
            <button type="button" class="btn btn-success" style="margin-right: 10px;">Change Password</button>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store/store';

export default {
  name: 'Profile',
  components: {
    
  },
  data: function() {
    return {
      user: store.state.user,
    }
  }
}
</script>

