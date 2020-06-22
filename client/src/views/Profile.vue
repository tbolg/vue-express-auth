<template>
  <div class="profile" style="padding: 20px;">
    <div class="jumbotron">
        <h2>Your Details</h2>
        <div style="display: flex; flex-wrap: wrap;">
        
        <div class="flex-div">
            <label>First Name:</label>
            <input v-model="firstName" type="text" class="form-control" placeholder="First name">
        </div>
        <div class="flex-div">
            <label>Another Preference:</label>
            <input type="text" class="form-control" placeholder="Another preference">
        </div>
        <div class="flex-div">
            <label>Last Name:</label>
            <input v-model="lastName" type="text" class="form-control" placeholder="Last name">
        </div>
        <div class="flex-div">
            <label>Another Preference:</label>
            <input type="text" class="form-control" placeholder="Another preference">
        </div>
        <div class="flex-div">
            <label>Email address</label>
            <input v-model="email" type="email" class="form-control" placeholder="Email">
        </div>
        <div class="flex-div">
            <label>Another Preference:</label>
            <input type="text" class="form-control" placeholder="Another preference">
        </div>
        
        </div>
        <div class="form-group" style="">
            <button @click="changeCredentials()" type="button" class="btn btn-success" style="margin: 10px;">Save Changes</button>
            <button @click="resetChanges()" type="button" class="btn btn-danger" style="margin: 10px;">Clear Changes</button>
        </div>
        <hr>
        <h2>Change Password</h2>
        <div style="display: flex; flex-wrap: wrap;">
            <div class="flex-div">
            <label>Old Password</label>
            <input v-model="oldPassword" type="password" class="form-control" placeholder="Password">
            </div>
            <div class="flex-div">
            <label>New Password</label>
            <input v-model="newPassword" type="password" class="form-control" placeholder="Password">
        </div>
            
        </div>
        <button @click="changePassword()" type="button" class="btn btn-success" style="margin-left: 10px;">Change Password</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store/store';
import ProfileService from '../services/ProfileService';

export default {
  name: 'Profile',
  components: {
    
  },
  data: function() {
    return {
      user: store.state.user,
      oldPassword: "",
      newPassword: "",
      email: store.state.user.email,
      firstName: store.state.user.firstName,
      lastName: store.state.user.lastName,
    }
  },
  methods: {
    async changePassword() {
      const response = await ProfileService.changePassword({
        oldPassword: this.oldPassword,
        newPassword: this.newPassword
      });
      console.log(response)
    },
    async changeCredentials() {
      const response = await ProfileService.changeCredentials({
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName
      })
    },
    resetChanges() {
      this.email = store.state.user.email,
      this.firstName = store.state.user.firstName,
      this.lastName = store.state.user.lastName
    }
  }
}
</script>

<style>
.flex-div {
  width: 300px;
  margin: 10px;
}
</style>