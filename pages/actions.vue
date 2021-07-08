<template>
  <div>
      
    
    <div class="top-img">
        <span class="title-page">actions</span>
    </div>
    <div class="container">

      <div class="content">
        <h4 class="content-title">Les objectifs de l’Udapei 74 :</h4>
        <p>L’Udapei 74 a pour but, en harmonie avec l’Unapei à laquelle elle adhère et l’Unapei ARA dont elle fait partie, et en liaison avec les associations membres : <br> <br>
            -> d’unir, au plan du département, toutes ses associations membres et de coordonner leurs actions en faveur des personnes dont le principal handicap est d’ordre mental <br> <br>
            -> de poursuivre, en collaboration avec ces associations, l’étude des questions relatives à la situation matérielle et morale des personnes dont le principal handicap est d’ordre mental et de leurs familles, <br> <br>
            -> de mettre en oeuvre tous les moyens nécessaires au meilleur développement moral, physique ou intellectuel des personnes handicapées mentales par l’éducation, la formation, le travail, l’hébergement, les loisirs, l’insertion, <br> <br>
            -> d’assurer, de coordonner ou de promouvoir les démarches administratives et les représentations auprès des autorités de contrôle des pouvoirs publics, de la justice, des commissions, des élus, etc … <br> <br>
            -> d’organiser dans le département l’information des médias et toute manifestation collective jugée utile, <br> <br>
            -> d’établir, dans le département, les concertations avec les autres associations non affiliées à l’Unapei, les établissements d’enseignement et les organismes divers qui œuvrent en faveur des personnes handicapées, quelle que soit la nature du handicap, <br> <br>
            -> de réaliser des études, réflexions, nécessaires au développement de l’accompagnement des personnes handicapées.</p>
      </div>

      <div class="content">
        <h4 class="content-title">Unapei :</h4>
        <p>(Union nationale des associations de parents, de personnes handicapées mentales et de leurs amis) <br> <br>
            Créé en 1960, l’Unapei est le premier mouvement associatif français oeuvrant pour la représentation et la défense des intérêts des personnes handicapées mentales.<br> <br>
            Les associations affiliées à l’Unapei comme l’Udapei 74, agissent pour répondre aux besoins et aux attentes des personnes handicapées mentales, favoriser leur insertion et leur permettre de vivre dignement avec et parmi les autres.<br> <br>
            L’Unapei est un mouvement national qui fédère près de 550 associations présentes au niveau local (APEI, Papillons Blancs, Chrysalide, Envol…), départemental (Adapei, Udapei, Association tutélaire) et régional (Urapei).</p>
      </div>

      <div class="content">
        <h4 class="content-title">L’Unapei en chiffres :</h4>
        <p> – 180 000 personnes handicapées accueillies. <br> <br>
            – 60 000 familles adhérentes des associations affiliées. <br> <br>
            – 3 100 établissements et services spécialisés. <br> <br>
            – 80 000 professionnels employés dans les associations et les établissements.</p>
      </div>
      
    </div>


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
    .top-img {
      background-image: url("../images/vtt1.jpg");
    }
    .content{
      height: 100%;
      width: 100%;
      margin-bottom: 50px;
    }
   
    .content-title {
      color: $green;
      text-transform: uppercase;
      font-size: 20px;
      margin-bottom: 30px;
    }
}

// GRAND ECRANS
@media only screen 
and (min-width : 1824px) {

}


</style>
