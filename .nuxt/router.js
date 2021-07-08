import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fbdf79f8 = () => interopDefault(import('..\\pages\\accessibilite.vue' /* webpackChunkName: "pages/accessibilite" */))
const _e34a8272 = () => interopDefault(import('..\\pages\\actions.vue' /* webpackChunkName: "pages/actions" */))
const _99861466 = () => interopDefault(import('..\\pages\\actualites.vue' /* webpackChunkName: "pages/actualites" */))
const _38427990 = () => interopDefault(import('..\\pages\\associations.vue' /* webpackChunkName: "pages/associations" */))
const _3159506a = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _30ceb6d0 = () => interopDefault(import('..\\pages\\falc.vue' /* webpackChunkName: "pages/falc" */))
const _2914f26f = () => interopDefault(import('..\\pages\\mentions.vue' /* webpackChunkName: "pages/mentions" */))
const _746a4a40 = () => interopDefault(import('..\\pages\\presentation.vue' /* webpackChunkName: "pages/presentation" */))
const _7f9b01d8 = () => interopDefault(import('..\\pages\\actualite\\_id.vue' /* webpackChunkName: "pages/actualite/_id" */))
const _6ee2709c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/accessibilite",
    component: _fbdf79f8,
    name: "accessibilite"
  }, {
    path: "/actions",
    component: _e34a8272,
    name: "actions"
  }, {
    path: "/actualites",
    component: _99861466,
    name: "actualites"
  }, {
    path: "/associations",
    component: _38427990,
    name: "associations"
  }, {
    path: "/contact",
    component: _3159506a,
    name: "contact"
  }, {
    path: "/falc",
    component: _30ceb6d0,
    name: "falc"
  }, {
    path: "/mentions",
    component: _2914f26f,
    name: "mentions"
  }, {
    path: "/presentation",
    component: _746a4a40,
    name: "presentation"
  }, {
    path: "/actualite/:id?",
    component: _7f9b01d8,
    name: "actualite-id"
  }, {
    path: "/",
    component: _6ee2709c,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decodeURIComponent(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
