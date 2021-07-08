<template>
  <div>
    
      <div class="gift"></div>
      <img src="../images/vtt1.jpg" alt="" class="home-img">
      <ActuCardsHome />
      <About />
      <Mapbox/>
  </div>

</template>



<script>
export default {
  
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

  .home-img {
    margin-bottom: 100px;
    height: 300px;
    width: 100%;
    object-fit: cover;
  }
  
  .gift {
    height: 200px;
    width: 300px;
    background-color: white;
    box-shadow: 0px 6px 30px 8px rgba(0,0,0,0.10);
    position: absolute;
    left: 80px;
    top: 330px;
    border-radius: 5px;
  }

}


// GRAND ECRANS
@media only screen 
and (min-width : 1824px) {

}


</style>
