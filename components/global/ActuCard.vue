<template>
    
    <div class="card">
        <img :src="actualite.img" alt="" class="img">
        <div class="infos">
            <h3>{{actualite.title}}</h3>
            <span>{{actualite.date}}</span>
            <p> {{actualite.content}}</p>
            <nuxt-link :to="actualiteId" class="button">Lire l'article</nuxt-link>
        </div>
    </div>

</template>

<script>
export default {
    props : [
      "actualite"
    ],

    computed: {
        actualiteId () {
            return 'actualite/' + this.actualite.id
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
    
    .card {
        display: flex;
        height: 300px;
        width: 100%;
        border-radius: 16px;
        box-shadow: 0px 0px 20px 5px rgba(0,0,0,0.30);
        
    }
    .img {
        width: 30%;
        height: 100%;
        border-radius: 16px 0 0 16px;
        object-fit: cover;
    }
    .infos {
        width: 70%;
        height: 100%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }
    h3 {
        font-weight: bold;
        color: rgb(58, 58, 58);
        text-decoration: underline;
    }
    .button {
        background-color: $darkgreen;
        width: 30%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        border-radius: 8px;

        &:hover {
            background-color: $green;
        }
    }
  
   
}

// GRAND ECRANS
@media only screen 
and (min-width : 1824px) {

}


</style>
