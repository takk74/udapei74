<template>
    <div class="content">
        <img :src="actualite.img" alt="" id="top-img">
        <div class="article">
            <h3>{{actualite.title}}</h3>
            <div class="infos">
                <span>ARTICLE</span>
                <span>Le {{actualite.date}}</span>
            </div>
            <p>{{actualite.content}}</p>
        </div>
        <nuxt-link id="btn" to="actualites">Toutes les actualités</nuxt-link>
    </div>
</template>

<script>
export default {
    props: [
        "actualite"
    ],

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
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #top-img {
        height: 300px;
        object-fit: cover;
        width: 100%;
    }
    .article {
        
        width: 70%;
        padding: 40px;
        border: 1px solid black;
        background-color: white;
        margin-bottom: 50px;
        margin-top: -150px;
    
        

        h3 {
            color: black;
            text-transform: uppercase;
            margin-bottom: 30px;
            text-align: center;
            font-weight: bold;
            font-size: 30px;
        }
    }
    .infos {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        margin-bottom: 50px;

        span {
            color: grey;
        }
    }

    #btn {
        height: 50px;
        width: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: $green;
        margin-bottom: 50px;
        border-radius: 16px;

        &:hover {
            background-color: #93d31e;
        }
    }
}

// GRAND ECRANS
@media only screen 
and (min-width : 1824px) {

}


</style>