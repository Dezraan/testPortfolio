import { createRouter, createWebHistory } from 'vue-router'
import PromoSections from "@/components/PromoSections";
const routes = [
  {
    path:'/',
    component:PromoSections,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
