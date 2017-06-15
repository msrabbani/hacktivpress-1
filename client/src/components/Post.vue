<template lang="html">
  <div class="post">
    <h2>New blog</h2><hr>
    <b-field label="Blog Title">
      <b-input v-model="title" placeholder="Your blog title"></b-input>
    </b-field>

    <b-field label="Blog Category">
      <b-input
        placeholder="Your blog category"
        v-model="category"
        required>
      </b-input>
    </b-field>

    <b-field label="Blog Content">
      <b-input type="textarea"
        minlength="10"
        maxlength="100"
        v-model="content"
        placeholder="Content type here..">
      </b-input>
    </b-field>
    <button class="nav-item button is-primary is-outlined" @click="confirm"><i class="material-icons">exit_to_app</i>Submit</button>

    <sweet-modal icon="success" ref="alert_success">Success.<br>{{greet}}..</sweet-modal>
    <sweet-modal icon="warning" ref="alert_warning">
    	Are you sure?<br><br>
      <button class="button is-success" @click="signout">Yes</button>
      <button class="button is-danger" @click="close">No</button>
    </sweet-modal>
  </div>
</template>

<script>
export default {
  name: 'post',
  props: ['title', 'category', 'content'],
  data () {
    return {
      token: localStorage.getItem('token'),
      user_id: localStorage.getItem('user_id'),
      user_name: localStorage.getItem('user_name'),
      greet: ''
    }
  }
}
</script>

<style lang="css">
  .post {
    margin: 8em 4em;
    width: auto;
  }

  h2 {
    font-size: 1.5em;
  }

  hr {
    background-color: #F48024;
  }
</style>
