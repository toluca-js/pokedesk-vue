import { createRouter, createWebHistory } from "vue-router";
import ConsultarApi from "../components/steps/ConsultarApi";

const routes = [
  {
    path: "/",
    name: "home",
    component: ConsultarApi,
  },
  {
    path: "/estilos",
    name: "estilos boostrap",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/steps/EstilosBoostrap"
      ),
  },
  {
    path: "/inicioPokeDex",
    name: "inicio pokedex",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/steps/inicioPokedex"
      ),
  },
  {
    path: "/botonSiguiente",
    name: "siguiente boton pokedex",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/steps/botonSiguiente"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
