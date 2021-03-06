import Vue from 'vue'
import Router from 'vue-router'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import { SweetModal, SweetModalTab } from 'sweet-modal-vue'
import Hello from '@/components/Hello'
import Index from '@/components/Index'
import Article from '@/components/Article'
import Post from '@/components/Post'

Vue.use(Router)
Vue.use(Buefy)
Vue.use(SweetModal, SweetModalTab)

export default new Router({
  routes: [
    { path: '/hello', name: 'Hello', component: Hello },
    { path: '/', name: 'Index', component: Index },
    { path: '/articles/:id', name: 'Article', component: Article },
    { path: '/post', name: 'Post', component: Post }
  ]
})
