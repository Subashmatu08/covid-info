import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CovidTest from '../views/CovidTest.vue';
import ErrorPage from '../views/ErrorPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/feedback',
    name: 'FeedBack',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/FeedBack.vue'),
  },
  {
    path: '/oxygen',
    name: 'OxygenSupply',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/OxygenSupply.vue'),
  },
  {
    path: '/blood-test',
    name: 'BloodTest',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/BloodTest.vue'),
  },
  {
    path: '/covid-test',
    name: 'CovidTest',
    component: CovidTest,
  },
  {
    path: '/doctors',
    name: 'Doctors',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Doctors.vue'),
  },
  {
    path: '/hospitals',
    name: 'Hospitals',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Hospitals.vue'),
  },
  {
    path: '/hospital-beds',
    name: 'HospitalBeds',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/HospitalBeds.vue'),
  },
  {
    path: '/ambulance',
    name: 'Ambulance',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Ambulance.vue'),
  },
  {
    path: '/remedesivir',
    name: 'Remedesivir',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Remedesivir.vue'),
  },
  {
    path: '/food-supplies',
    name: 'FoodSupplies',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/FoodSupplies.vue'),
  },
  {
    path: '/:catchAll(.*)',
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
  // ...
});
export default router;
