<template>
  <div class="content">
      
    <form action="mailto:arthurtassot@gmail.com" method="GET" target="_blank">
      <h3>Nous contacter</h3>
      
      <label for="subject">Objet :</label>
      <input type="text" name="subject">
      <label for="body">Votre message : </label>
      <textarea rows="5" cols="20" value="" name="body"></textarea>

      <input type="submit" value="Envoyez" id="btn" />

</form>


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

    .content {
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    form {
      display: flex;
      flex-direction: column;
      background-color: green;
      width: 50%;
      padding: 30px 30px 0 30px;
      border-radius: 8px;
    }
    h3 {
      text-align: center;
      color: white;
      margin-bottom: 20px;
      text-transform: uppercase;
    }
    input {
      height: 30px;
      margin-bottom: 20px;
      outline: none;
      padding-left: 10px;
      border-radius: 8px;
      border: none;
    }
    label {
      margin-bottom: 10px;
    }
    textarea {
      outline: none;
      padding: 10px;
      margin-bottom: 20px;
      resize: vertical;
      border-radius: 8px;
    }
    #btn {
      height: 50px;
      width: 200px;
      background-color: white;
      border: none;
      align-self: center;
      border-radius: 16px;
      outline: none;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;

      &:hover {
        transition: 0.5s all;
        border: 1px solid white;
        background-color: $green;
      }
    }
}

// GRAND ECRANS
@media only screen 
and (min-width : 1824px) {

}


</style>
