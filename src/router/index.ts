import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import DossierView from '../views/DossierView.vue'
import ComptabiliteView from '../views/ComptabiliteView.vue'
import StatistiquesView from '../views/StatistiquesView.vue'
import EmployeurView from '../views/EmployeurView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'dossier',
    component: DossierView
  },
  {
    path: '/employeur',
    name: 'employeur',
    component: EmployeurView
  },
  {
    path: '/comptabilite',
    name: 'comptabilite',
    component: ComptabiliteView
  },
  {
    path: '/statistiques',
    name: 'statistiques',
    component: StatistiquesView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
