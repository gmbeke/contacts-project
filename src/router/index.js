import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Login from '../components/Login.vue'
import Registration from '../components/Register.vue'
import Contacts from '../components/ContactList.vue'
import Contact from '../components/ViewContact.vue'
import CreateContact from '../components/CreateContact.vue'
import AboutPage from '../views/AboutView.vue'
import EditContact from '../components/EditContact.vue'


const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutPage
  },
  {
    path: '/LoginPage',
    name: 'Login',
    component: Login
  },
  {
    path: '/RegisterPage',
    name: 'Register',
    component: Registration
  },
  {
    path: '/ContactList',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/VuewContact/:id',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/CreateContact',
    name: 'AddContact',
    component: CreateContact
  },
  {
    path: '/EditContact',
    name: 'EditContact',
    component: EditContact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
