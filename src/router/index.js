import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Services from "@/views/Services";
import About from '../views/About'
import Projects from "../views/Projects";
import Partner from "@/views/Partner";
import Academy from "@/views/Academy";
import Trends from "@/views/Trends";
import Helps from "@/views/Helps";
import News from "@/views/News";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      footer: false
    }
  },
  {
    path: '/services',
    component: Services,
    children: [
      {
        path: "/about",
        name: "about",
        component: About,
        meta: {
          footer: true
        }
      },
      {
        path: "/project",
        name: "project",
        component: Projects,
        meta: {
          footer: true
        }
      },
      {
        path: "/partners",
        name: "partners",
        component: Partner,
        meta: {
          footer: true
        }
      },
      {
        path: "/academy",
        name: "academy",
        component: Academy,
        meta: {
          footer: true
        }
      },
      {
        path: "/trends",
        name: "trends",
        component: Trends,
        meta: {
          footer: true
        }
      },
      {
        path: "/help",
        name: "help",
        component: Helps,
        meta: {
          footer: true
        }
      },
      {
        path: "/news",
        name: "news",
        component: News,
        meta: {
          footer: true
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
