import Vue from 'vue'
import VueRouter from 'vue-router'
import Contacto from '../components/Contacto.vue'
import Contacto2 from '../components/Contacto2.vue'
import Servicios from '../components/Servicios.vue'
import Servicios2 from '../components/Servicios2.vue'
import ServiciosRouter from '../components/ServiciosRouter.vue'
import Axios from '../components/Axios.vue'
import ContactoRouter from '../components/ContactoRouter.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Axios',
    component: Axios,
  },
  
  {

    path: '/contacto',
    name: 'Contacto',
    component: ContactoRouter,
    children:[
      {
        path: '/',
        name: 'contacto',
        component: Contacto
      },
      {
        path: '/contacto/contacto2',
        name: 'contacto2',
        component: Contacto2
      }
    ]
  },
  {
    path: '/servicios',
    name: 'Servicios',
    component: ServiciosRouter,
    children:[
      {
        path: '/',
        name: 'Servicios',
        component: Servicios
      },
      {
        path: '/servicios/servicios2',
        name: 'Servicios2',
        component: Servicios2
      }
    ]

  },
  
  {
    path:"*",
    redirect:"/"

  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
