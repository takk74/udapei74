<template>
  <div>
      
      <div class="top-img">
          <span class="title-page">Actualités</span>
      </div>
      <div class="container">
        <input type="text" placeholder="Rechercher...">
          <ActuCards :actualites="actualites" />
        
      </div>

  </div>

</template>

<script>
export default {

  data() {
      return {
        actualites : [
            {id:"1", img:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/604aae74650075.5c36214c4f412.png",title:"Titre 1", date:"07/10/2022", content:"ffzefefezfzfzfzfzefzefezezfezfezfezfezfefefzefzefezfezzefzefezfeezfzefezf" },
            {id:"2", img:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/604aae74650075.5c36214c4f412.png",title:"Titre 2", date:"08/10/2022", content:"ffzefefezfzfzfzfzefzefezezfezfezfezfezfefefzefzefezfezzefzefezfeezfzefezf" },
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
    .top-img {
      background-image: url("../images/vtt1.jpg");
    }
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    input {
      height: 50px;
      width: 50%;
      background-color: white;
      border: 1px solid rgb(138, 138, 138);
      border-radius: 30px;
      padding: 0 20px;
      outline: none;
      margin-bottom: 100px;
    }
}

// GRAND ECRANS
@media only screen 
and (min-width : 1824px) {

}


</style>
