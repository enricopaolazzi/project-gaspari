import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import NotFound from '../views/404/NotFound.vue';
import ClientsView from '../views/Anagraphics/Clients/ClientsView.vue';
import ClientView from '../views/Anagraphics/Clients/ClientView.vue';

const routes: Array<RouteRecordRaw> = [
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: NotFound 
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/anagrafiche/clienti',
    name: 'anagraphics.clients.index',
    component: ClientsView,    
  },
  {
    path: '/anagrafiche/clienti/:id',
    name: 'anagraphics.clients.details',
    props: true,
    component: ClientView,    
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router
