<template>
  <div>
      
      <div class="top-img">
          <span class="title-page">Associations</span>
      </div>
      <div class="container">
        <div class="sidebar">
            <button v-on:click="content = 1">> Aller plus haut</button>
            <button v-on:click="content = 2">> AAPEI d’Annecy & ses environs</button>
            <button v-on:click="content = 3">> APEI de Thonon et du chablais</button>
            <button v-on:click="content = 4">> APEI du centre Arthur Lavy</button>
            <button v-on:click="content = 5">> Amitié & Avenir</button>
            <button v-on:click="content = 6">> ATMP 74</button>
            <button v-on:click="content = 7">> Nous Aussi Annemasse-Vetraz-Monthoux</button>
            <button v-on:click="content = 8">> Unapei ARA</button>
            <button v-on:click="content = 9">> Unapei</button>
        </div>
        <div class="content" v-if="content === 1">
            <h3 class="content-title">Association aller plus haut</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cupiditate repellat, ipsum reprehenderit aut aperiam mollitia dolores sequi eos molestias odio incidunt eius asperiores. Tempora esse minima quidem obcaecati voluptate?
            Ullam culpa fuga placeat, suscipit natus quaerat optio porro animi fugit magnam, libero accusantium non in praesentium totam. Odio dolorem obcaecati eum aliquam fuga dolore assumenda tenetur quisquam incidunt quibusdam?</p>
        </div>
        <div class="content" v-if="content === 2" >
            <h3 class="content-title">AAPEI d’Annecy & ses environs</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cupiditate repellat, ipsum reprehenderit aut aperiam mollitia dolores sequi eos molestias odio incidunt eius asperiores. Tempora esse minima quidem obcaecati voluptate?
            Ullam culpa fuga placeat, suscipit natus quaerat optio porro animi fugit magnam, libero accusantium non in praesentium totam. Odio dolorem obcaecati eum aliquam fuga dolore assumenda tenetur quisquam incidunt quibusdam?</p>
        </div>
        <div class="content" v-if="content === 3">
            <h3 class="content-title">APEI de thonon et du chablais</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cupiditate repellat, ipsum reprehenderit aut aperiam mollitia dolores sequi eos molestias odio incidunt eius asperiores. Tempora esse minima quidem obcaecati voluptate?
            Ullam culpa fuga placeat, suscipit natus quaerat optio porro animi fugit magnam, libero accusantium non in praesentium totam. Odio dolorem obcaecati eum aliquam fuga dolore assumenda tenetur quisquam incidunt quibusdam?</p>
        </div>
        <div class="content" v-if="content === 4">
            <h3 class="content-title">APEI du centre Arthur Lavy</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cupiditate repellat, ipsum reprehenderit aut aperiam mollitia dolores sequi eos molestias odio incidunt eius asperiores. Tempora esse minima quidem obcaecati voluptate?
            Ullam culpa fuga placeat, suscipit natus quaerat optio porro animi fugit magnam, libero accusantium non in praesentium totam. Odio dolorem obcaecati eum aliquam fuga dolore assumenda tenetur quisquam incidunt quibusdam?</p>
        </div>
        <div class="content" v-if="content === 5">
            <h3 class="content-title">Amitié & Avenir</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cupiditate repellat, ipsum reprehenderit aut aperiam mollitia dolores sequi eos molestias odio incidunt eius asperiores. Tempora esse minima quidem obcaecati voluptate?
            Ullam culpa fuga placeat, suscipit natus quaerat optio porro animi fugit magnam, libero accusantium non in praesentium totam. Odio dolorem obcaecati eum aliquam fuga dolore assumenda tenetur quisquam incidunt quibusdam?</p>
        </div>
        <div class="content" v-if="content === 6">
            <h3 class="content-title">ATMP 74</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cupiditate repellat, ipsum reprehenderit aut aperiam mollitia dolores sequi eos molestias odio incidunt eius asperiores. Tempora esse minima quidem obcaecati voluptate?
            Ullam culpa fuga placeat, suscipit natus quaerat optio porro animi fugit magnam, libero accusantium non in praesentium totam. Odio dolorem obcaecati eum aliquam fuga dolore assumenda tenetur quisquam incidunt quibusdam?</p>
        </div>
         <div class="content" v-if="content === 7">
            <h3 class="content-title">Nous Aussi Annemasse-Vetraz-Monthoux</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cupiditate repellat, ipsum reprehenderit aut aperiam mollitia dolores sequi eos molestias odio incidunt eius asperiores. Tempora esse minima quidem obcaecati voluptate?
            Ullam culpa fuga placeat, suscipit natus quaerat optio porro animi fugit magnam, libero accusantium non in praesentium totam. Odio dolorem obcaecati eum aliquam fuga dolore assumenda tenetur quisquam incidunt quibusdam?</p>
        </div>
        <div class="content" v-if="content === 8">
            <h3 class="content-title">Unapei ARA</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cupiditate repellat, ipsum reprehenderit aut aperiam mollitia dolores sequi eos molestias odio incidunt eius asperiores. Tempora esse minima quidem obcaecati voluptate?
            Ullam culpa fuga placeat, suscipit natus quaerat optio porro animi fugit magnam, libero accusantium non in praesentium totam. Odio dolorem obcaecati eum aliquam fuga dolore assumenda tenetur quisquam incidunt quibusdam?</p>
        </div>
        <div class="content" v-if="content === 9">
            <h3 class="content-title">Unapei</h3>
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
      width: 25%;
      border-right: 1px solid black;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      button {
        margin-bottom: 40px;
        background:transparent;
        border: none;
        font-weight: bold;
        font-size: 14px;
        padding: 0;
        &:hover {
          color: $green;
        }
      }
    }
    .content {
      height: 100%;
      width: 75%;
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
