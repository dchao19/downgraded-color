import Vue from "vue";
import Router from "vue-router";
import Introduction from "./views/Introduction.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Introduction
    },
    {
      path: "/camera",
      name: "camera",
      component: () =>
        import(/* webpackChunkName: "camera" */ "./views/Camera.vue"),
      meta: {
        title: "Color | Camera"
      }
    },
    {
      path: "/symptoms",
      name: "symptoms",
      component: () =>
        import(/* webpackChunkName: "symptoms" */ "./views/Symptoms.vue"),
      meta: {
        title: "Color | Symptoms"
      }
    },
    {
      path: "/genetics",
      name: "genetics",
      meta: {
        title: "Color | Genetics"
      },
      component: () =>
        import(/* webpackChunkName: "genetics" */ "./views/Genetics.vue")
    },
    {
      path: "/prevalence",
      name: "prevalence",
      meta: {
        title: "Color | Prevalence"
      },
      component: () =>
        import(/* webpackChunkName: "prevalence" */ "./views/Prevalence.vue")
    }
  ]
});
