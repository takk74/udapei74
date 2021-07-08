<template>
<div class="container">
    <h1 class="title">Actualités</h1>
  
        <div class="cards">
          
                <div class="card">
                    <img src="../../images/vtt1.jpg" alt="" class="actu-img">
                    <h3 class="card-title">Lorem</h3>
                    <p class="description"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae laboriosam nemo architecto incidunt eligendi sequi in. Impedit fugit libero debitis dolores dolore incidunt facere laborum sed optio unde. Repellat, accusantium.</p>
                </div>
        
            <div class="card">
                <img src="../../images/vtt1.jpg" alt="" class="actu-img">
                <h3 class="card-title">Lorem</h3>
                <p class="description"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae laboriosam nemo architecto incidunt eligendi sequi in. Impedit fugit libero debitis dolores dolore incidunt facere laborum sed optio unde. Repellat, accusantium.</p>
            </div>
            <div class="card">
                <img src="../../images/vtt1.jpg" alt="" class="actu-img">
                <h3 class="card-title">Lorem</h3>
                <p class="description"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae laboriosam nemo architecto incidunt eligendi sequi in. Impedit fugit libero debitis dolores dolore incidunt facere laborum sed optio unde. Repellat, accusantium.</p>
            </div>
        </div>


    <nuxt-link id="actus-link" to="/actualites">Voir toutes les actualités</nuxt-link>
</div>
    


</template>

<script>

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
    .container {
        margin-bottom: 60px;
    }
    .cards {
        width: 100%;
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: repeat(3, 1fr);
        gap: 50px;
        margin-bottom: 50px;
    }
    .title {
        margin-bottom: 50px;
    }
    #actus-link {
        text-decoration: underline;
        color: $green;
        font-size: 18px;
    }
    .actu-img {
        height: 200px;
        width: 100%;
        border-radius: 5px;
        object-fit: cover;
        margin-bottom: 10px;
    }
    .card-title {
        margin-bottom: 10px;
    }
}

// GRAND ECRANS
@media only screen 
and (min-width : 1824px) {

}


</style>

