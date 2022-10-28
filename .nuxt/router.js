import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _443915bd = () => interopDefault(import('../pages/customers/index.vue' /* webpackChunkName: "pages/customers/index" */))
const _54f82d52 = () => interopDefault(import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */))
const _79640f98 = () => interopDefault(import('../pages/sales/index.vue' /* webpackChunkName: "pages/sales/index" */))
const _6a9deca1 = () => interopDefault(import('../pages/customers/create.vue' /* webpackChunkName: "pages/customers/create" */))
const _71c1c7ac = () => interopDefault(import('../pages/products/create.vue' /* webpackChunkName: "pages/products/create" */))
const _63b54dec = () => interopDefault(import('../pages/sales/create.vue' /* webpackChunkName: "pages/sales/create" */))
const _0d9b6365 = () => interopDefault(import('../pages/customers/_id.vue' /* webpackChunkName: "pages/customers/_id" */))
const _e615478c = () => interopDefault(import('../pages/products/_id.vue' /* webpackChunkName: "pages/products/_id" */))
const _aab710c8 = () => interopDefault(import('../pages/sales/_id.vue' /* webpackChunkName: "pages/sales/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/customers",
    component: _443915bd,
    name: "customers"
  }, {
    path: "/products",
    component: _54f82d52,
    name: "products"
  }, {
    path: "/sales",
    component: _79640f98,
    name: "sales"
  }, {
    path: "/customers/create",
    component: _6a9deca1,
    name: "customers-create"
  }, {
    path: "/products/create",
    component: _71c1c7ac,
    name: "products-create"
  }, {
    path: "/sales/create",
    component: _63b54dec,
    name: "sales-create"
  }, {
    path: "/customers/:id",
    component: _0d9b6365,
    name: "customers-id"
  }, {
    path: "/products/:id",
    component: _e615478c,
    name: "products-id"
  }, {
    path: "/sales/:id",
    component: _aab710c8,
    name: "sales-id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
