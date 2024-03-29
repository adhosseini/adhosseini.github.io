import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/dashboard",
    component: () => import("@/layout/Layout.vue"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/Overview.vue"),
        props: {publicPath: process.env.BASE_URL}
      },
      {
        path: "/php/intro",
        name: "phpIntro",
        component: () => import("@/views/php/Intro.vue"),
      },
      {
        path: "/php/array",
        name: "phpArray",
        component: () => import("@/views/php/Array.vue"),
      },
      {
        path: "/php/input_array/:name?",
        name: "phpInputArray",
        component: () => import("@/views/php/InputArray.vue"),
      },
      {
        path: "/php/sessions",
        name: "phpSessions",
        component: () => import("@/views/php/Sessions.vue"),
      },
      {
        path: "/php/cookies",
        name: "phpCookies",
        component: () => import("@/views/php/Cookies.vue"),
      },
      {
        path: "/php/:name?",
        name: "phpIndex",
        component: () => import("@/views/php/index.vue"),
      },

      {
        path: "/javascript/intro",
        name: "javascriptIntro",
        component: () => import("@/views/javascript/Intro.vue"),
      },
      {
        path: "/javascript/run",
        name: "javascriptRun",
        component: () => import("@/views/javascript/Run.vue"),
      },
      {
        path: "/javascript/output",
        name: "javascriptOutput",
        component: () => import("@/views/javascript/Output.vue"),
      },
      {
        path: "/javascript/data",
        name: "javascriptData",
        component: () => import("@/views/javascript/Data.vue"),
      },
      {
        path: "/javascript/function",
        name: "javascriptFunction",
        component: () => import("@/views/javascript/Function.vue"),
      },
      {
        path: "/javascript/json/:name?",
        name: "javascriptJSON",
        component: () => import("@/views/javascript/JSON.vue"),
      },
      {
        path: "/javascript/ajax/:name?",
        name: "javascriptAJAX",
        component: () => import("@/views/javascript/AJAX.vue"),
      },
      {
        path: "/javascript/utilityMethods/:name?",
        name: "javascripUtilityMethods",
        component: () => import("@/views/javascript/UtilityMethods.vue"),
      },
      {
        path: "/javascript/practice/:name?",
        name: "javascripPractice",
        component: () => import("@/views/javascript/Practice.vue"),
      },
      {
        path: "/account",
        name: "account",
        component: () => import("@/components/page-layouts/Account.vue"),
        children: [
          {
            path: "overview",
            name: "account-overview",
            component: () => import("@/views/account/Overview.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/dashboard",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(() => {
  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

export default router;
