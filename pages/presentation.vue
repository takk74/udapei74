<template>
  <div>
      
    
    <div class="top-img">
        <span class="title-page">Présentation</span>
    </div>
    <div class="container">
      <div class="sidebar">
          <button v-on:click="content = 1">>  Qui sommes-nous ?</button>
          <button v-on:click="content = 2">>  Notre histoire</button>
          <button v-on:click="content = 3">>  Nos missions</button>
          <button v-on:click="content = 4">>  Nos actions</button>
          <button v-on:click="content = 5">>  Nos valeurs</button>
          <button v-on:click="content = 6">>  L'organigramme</button>
      </div>
      <div class="content" v-if="content === 1">
          <h3 class="content-title">Qui sommes-nous?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cupiditate repellat, ipsum reprehenderit aut aperiam mollitia dolores sequi eos molestias odio incidunt eius asperiores. Tempora esse minima quidem obcaecati voluptate?
          Ullam culpa fuga placeat, suscipit natus quaerat optio porro animi fugit magnam, libero accusantium non in praesentium totam. Odio dolorem obcaecati eum aliquam fuga dolore assumenda tenetur quisquam incidunt quibusdam?</p>
      </div>
      <div class="content" v-if="content === 2" >
          <h3 class="content-title">Notre histoire</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cupiditate repellat, ipsum reprehenderit aut aperiam mollitia dolores sequi eos molestias odio incidunt eius asperiores. Tempora esse minima quidem obcaecati voluptate?
          Ullam culpa fuga placeat, suscipit natus quaerat optio porro animi fugit magnam, libero accusantium non in praesentium totam. Odio dolorem obcaecati eum aliquam fuga dolore assumenda tenetur quisquam incidunt quibusdam?</p>
      </div>
      <div class="content" v-if="content === 3">
          <h3 class="content-title">Nos missions</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cupiditate repellat, ipsum reprehenderit aut aperiam mollitia dolores sequi eos molestias odio incidunt eius asperiores. Tempora esse minima quidem obcaecati voluptate?
          Ullam culpa fuga placeat, suscipit natus quaerat optio porro animi fugit magnam, libero accusantium non in praesentium totam. Odio dolorem obcaecati eum aliquam fuga dolore assumenda tenetur quisquam incidunt quibusdam?</p>
      </div>
      <div class="content" v-if="content === 4">
          <h3 class="content-title">Nos actions</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cupiditate repellat, ipsum reprehenderit aut aperiam mollitia dolores sequi eos molestias odio incidunt eius asperiores. Tempora esse minima quidem obcaecati voluptate?
          Ullam culpa fuga placeat, suscipit natus quaerat optio porro animi fugit magnam, libero accusantium non in praesentium totam. Odio dolorem obcaecati eum aliquam fuga dolore assumenda tenetur quisquam incidunt quibusdam?</p>
      </div>
      <div class="content" v-if="content === 5">
          <h3 class="content-title">Nos valeurs</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cupiditate repellat, ipsum reprehenderit aut aperiam mollitia dolores sequi eos molestias odio incidunt eius asperiores. Tempora esse minima quidem obcaecati voluptate?
          Ullam culpa fuga placeat, suscipit natus quaerat optio porro animi fugit magnam, libero accusantium non in praesentium totam. Odio dolorem obcaecati eum aliquam fuga dolore assumenda tenetur quisquam incidunt quibusdam?</p>
      </div>
      <div class="content" v-if="content === 6">
          <h3 class="content-title">L'organigramme</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cupiditate repellat, ipsum reprehenderit aut aperiam mollitia dolores sequi eos molestias odio incidunt eius asperiores. Tempora esse minima quidem obcaecati voluptate?
          Ullam culpa fuga placeat, suscipit natus quaerat optio porro animi fugit magnam, libero accusantium non in praesentium totam. Odio dolorem obcaecati eum aliquam fuga dolore assumenda tenetur quisquam incidunt quibusdam?</p>
      </div>
    </div>


  </div>
</template>

<script>
export default {
    data() {
      return {
        content : 1,
      }
    },
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
    .top-img {
      background-image: url("../images/vtt1.jpg");
    }
    .container {
      display: flex;
    }
    .sidebar {
      height: 600px;
      width: 15%;
      border-right: 1px solid black;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      button {
        margin-bottom: 40px;
        background:transparent;
        border: none;
        font-weight: bold;
        padding: 0;
        font-size: 14px;
        &:hover {
          color: $green;
        }
        
      }
    }
    .content {
      height: 100%;
      width: 85%;
      padding-left: 80px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .content-title {
      margin-bottom: 60px;
      color: $green;
    }
}

// GRAND ECRANS
@media only screen 
and (min-width : 1824px) {

}


</style>
