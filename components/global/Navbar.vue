<template>
<div>
  <nuxt-link to="/">
    <img src="../../images/logo.jpg" id="logo" alt="">
  </nuxt-link>
  
  <nav>
    <nuxt-link to="/">
      <i class="fas fa-home"></i>
    </nuxt-link>
    <nuxt-link
      v-for="item in items" 
      :key="item.name"
      :to="item.page"
      class="button"
    >{{item.name}}</nuxt-link>
    
  </nav>
</div>


</template>

<script>
export default {
  name: 'Navbar',
    data() {
      return {
        items: [
          {name: 'Présentation', page: '/presentation'},
          {name: 'Nos actions', page: '/actions'},
          {name: 'Nos associations', page: '/associations'},
          {name: 'FALC', page: '/falc'},
          {name: 'Accessibilité', page: '/accessibilite'},
          {name: 'Contact', page: '/contact'}
        ]
      }
    }
}
</script>

<style lang="scss" scoped>


// SMARTPHONES

@media only screen 
and (max-width : 480px) {
   
}

// IPADS
@media only screen 
and (min-width : 768px) 
and (max-width : 1024px) {

}
 
// PC + PC PORTABLE
@media only screen 
and (min-width : 1224px) {
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 60px;
      background-color: $green;
      padding: 0 80px;

    }
        &.button {
          color: white;
          font-size: 16px;

        }
       
    #logo {
      height: 60px;
      margin: 20px 0 20px 80px;
    }

    i {
      font-size: 25px;
      color: white;
    }
}

// GRAND ECRANS
@media only screen 
and (min-width : 1824px) {

}


</style>


