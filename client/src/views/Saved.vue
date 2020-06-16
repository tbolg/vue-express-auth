<template>
  <div class="saved" style="padding: 20px; display: flex; justify-content: space-between;">
    <div style="width: 60%;">
        <div class="form-group">
        <label for="exampleTextarea">Input some text to save</label>
        <textarea v-model="textArea" class="form-control" id="exampleTextarea" rows="3"></textarea>
        </div>
        <button @click="postSavedText(textArea)" type="button" class="btn btn-info">Save Text</button>
        <hr>
        <div class="list-group" style="margin-top: 0px;">
          <a v-for="(text, index) in reversedSaved" :key="index" class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1"> {{ text.text }} </h5>
              <small class="text-muted"> {{ text.created }} </small>
            </div>
            <div style="display: flex; float: right;">
              <button @click="deleteSavedText(text._id)" class="btn"><i class="fa fa-trash"></i></button>
            </div>
          </a>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store/store';
import SavedService from '../services/SavedService';
export default {
  name: 'Saved',
  components: {
    
  },
  data: function() {
    return {
      savedText: [],
      textArea: "",
      user: store.state.user
    }
  },
  methods: {
    async getSavedText() {
        const email = this.user.email;
        const response = await SavedService.get(email);
        this.savedText = response.data.text;
    },
    async postSavedText(text) {
        const response = await SavedService.post({
            email: this.user.email,
            text: text
        });
        this.getSavedText();
    },
    async deleteSavedText(id) {
        const response = await SavedService.delete(id);
        this.getSavedText();
    }
  },
  computed: {
      reversedSaved() {
          return this.savedText.reverse();
      }
  },
  created: function() {
      this.getSavedText();
  }
}
</script>
