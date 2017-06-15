<template lang="html">
  <div class="post">
    <h2>New blog</h2><hr>
    <b-field label="Blog Title">
      <b-input v-model="title" placeholder="Your blog title" required></b-input>
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
        placeholder="Content type here.." required>
      </b-input>
    </b-field>
    <button class="nav-item button is-primary is-outlined" @click="confirm"><i class="material-icons">exit_to_app</i>Submit</button>

    <sweet-modal icon="success" ref="alert_success">Success.<br>{{greet}}..</sweet-modal>
    <sweet-modal icon="warning" ref="alert_warning">
      Are you sure?<br><br>
      <button class="button is-success" @click="post_blog">Yes</button>
      <button class="button is-danger" @click="close">No</button>
    </sweet-modal>
  </div>

</template>

<script>
import { SweetModal, SweetModalTab } from 'sweet-modal-vue'
import axios from 'axios'

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
  },
  methods: {
    confirm () {
      this.$refs.alert_warning.open()
    },
    close () {
      this.$refs.alert_warning.close()
    },
    post_blog () {
      let self = this
      this.$refs.alert_warning.close()
      axios.post('http://localhost:3000/articles', {title: this.title, content: this.content, category: this.category, user_name: this.user_name, author: this.user_id})
      .then((res) => {
        console.log(res.data)
        this.greet = 'Thank you for posting..'
        self.$refs.alert_success.open()
        setTimeout(function () {
          self.$router.push('/')
        }, 2000)
      })
      .catch((err) => {
        console.log('failed')
        alert(err + 'register failed')
        this.$refs.alert_warning.close()
      })
    }
  },
  components: {
    SweetModal,
    SweetModalTab
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
