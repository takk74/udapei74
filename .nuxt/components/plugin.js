import Vue from 'vue'

const globalComponents = {
  About: () => import('../..\\components\\global\\About.vue' /* webpackChunkName: "components_global/About" */).then(c => c.default || c),
  ActuCard: () => import('../..\\components\\global\\ActuCard.vue' /* webpackChunkName: "components_global/ActuCard" */).then(c => c.default || c),
  ActuCards: () => import('../..\\components\\global\\ActuCards.vue' /* webpackChunkName: "components_global/ActuCards" */).then(c => c.default || c),
  ActuCardsHome: () => import('../..\\components\\global\\ActuCardsHome.vue' /* webpackChunkName: "components_global/ActuCardsHome" */).then(c => c.default || c),
  Footer: () => import('../..\\components\\global\\Footer.vue' /* webpackChunkName: "components_global/Footer" */).then(c => c.default || c),
  Mapbox: () => import('../..\\components\\global\\Mapbox.vue' /* webpackChunkName: "components_global/Mapbox" */).then(c => c.default || c),
  Navbar: () => import('../..\\components\\global\\Navbar.vue' /* webpackChunkName: "components_global/Navbar" */).then(c => c.default || c),
  SocialNetwork: () => import('../..\\components\\global\\social\\SocialNetwork.vue' /* webpackChunkName: "components_global/social/SocialNetwork" */).then(c => c.default || c),
  SocialShare: () => import('../..\\components\\global\\social\\socialShare.vue' /* webpackChunkName: "components_global/social/socialShare" */).then(c => c.default || c)
}

for (const name in globalComponents) {
  Vue.component(name, globalComponents[name])
}
