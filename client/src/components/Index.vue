<template>
  <div class="index">
    <div class="container">
      <div v-for="article in articles">
        <div class="article">
          <a class="article_title"><router-link :to="{ name: 'Article', params: {id: article._id} }">{{article.title}}</router-link></a>
          <br><br>
          <small><span class="tag is-info is-small">Posted by: {{article.user_name}}</span></small>
          <small><span class="tag is-success is-small">category: {{article.category}}</span></small>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'index',
  data () {
    return {
      articles: [],
      token: localStorage.getItem('token'),
      user_id: localStorage.getItem('user_id'),
      user_name: localStorage.getItem('user_name')
    }
  },
  mounted () {
    axios.get('http://localhost:3000/articles')
    .then(response => {
      this.articles = response.data
      console.log(JSON.stringify(response.data))
    })
    .catch(err => console.log(err.message))
  }
}
</script>

<style scoped>
  .index {
    margin-top: 8em;
    flex: 1;
  }

  .columns {
    margin: 1em;
  }

  a {
    font-size: 1.2em;
  }

  hr {
    background-color: #F48024;
  }

  .container {
    width: 70%;
  }
</style>
