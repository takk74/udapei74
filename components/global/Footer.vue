<template>

  <footer>
    <a href="https://www.facebook.com/Udapei74/" target="blank">
      <img src="../../images/facebook.png" alt="" id="fb">
    </a>
    <div class="liens">
      <nuxt-link
        v-for="item in items" 
        :key="item.name"
        :to="item.page"
        class="button"
      >{{item.name}}</nuxt-link>
    </div>
    <span id="infos">UDAPEI 74 | 21 avenue des Hirondelles - 74000 Annecy | Tél : 04 50 46 55 69 | Fax : 04 50 46 55 70 | E-mail : udapei@udapei74.fr </span>

  </footer>
    

  
</template>

<script>
export default {
  name: 'Footer',
    data() {
      return {
        items: [
          {name: 'Accueil', page: '/'},
          {name: 'Présentation', page: '/presentation'},
          {name: 'Nos actions', page: '/actions'},
          {name: 'Nos associations', page: '/associations'},
          {name: 'FALC', page: '/falc'},
          {name: 'Accessibilité', page: '/accessibilite'},
          {name: 'Mentions Légales', page: '/mentions'},
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
    footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      height: 250px;
      padding: 0 80px;
      background-color: rgb(58, 58, 58);
      
      
    }

    .liens {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
     
    }

    #infos {
      
      color: white;
      font-size: 14px;
    }
    .button {
      font-size: 14px;
      color: white;
      font-weight: bold;
      text-decoration: underline;
    }
    #fb {
      height: 50px;
      width: 50px;
    }
        
}

// GRAND ECRANS
@media only screen 
and (min-width : 1824px) {

}


</style>
