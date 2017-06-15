<template lang="html">
  <div class="article">
    <div class="container">
      <small>
        <a><i class="material-icons">keyboard_arrow_left</i><router-link :to="{ name: 'Index' }">Back to the front page</router-link></a>
      </small>
      <h2>{{article.title}}</h2>
      <p class="posted">
        <small><span class="tag is-info is-small">By: {{article.author.name}}</span></small>
        <small><span class="tag is-success is-small">In {{article.category}}</span></small>
      </p>
      <hr>
      <p>
        {{article.content}}
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'article',
  data () {
    return {
      article: {}
    }
  },
  mounted () {
    let id = this.$route.params.id
    axios.get('http://localhost:3000/articles/' + id)
    .then(response => {
      this.article = response.data
      console.log(JSON.stringify(response.data))
    })
    .catch(err => console.log(err.message))
  }
}
</script>

<style scoped>
  .article {
    margin: 8em auto;
    height: 30em;
    flex: 1;
  }

  h2 {
    font-size: 1.5em;
  }

  .container {
    width: 70%;
    margin-bottom: 5em;
  }

  hr {
    background-color: #F48024;
  }

  .posted {
    text-align: right;
  }

  .material-icons {
    color: #7957d5;
    display: inline-flex;
    vertical-align: middle;
  }
</style>
