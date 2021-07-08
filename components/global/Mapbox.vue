<template>
    <div>
        <h3 id="title">Trouvez un établissement APEI près de chez vous !</h3>
        <div id="map"> </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
        
        }
    },

  mounted () {
        const mapboxgl = require('mapbox-gl')

        this.map = new mapboxgl.Map({
        accessToken: 'pk.eyJ1Ijoib3V0dHJpcCIsImEiOiJja21leGhuNXcwMjJyMm9rYmx6ZmZrZmtnIn0.FtnMFdqoSxHS4kwK7o3GpA',
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [2.213749, 46.227638],
        zoom: 4,
        pitch: 0,
        maxZoom: 17

        })

        const map = this.map


        var popup1 = new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<p> Aapei Epanou </p> </br>  <span>32 rue Gustave Eiffel </br> </span>  <span>Seynod 74600</span> </br> <span>04 50 69 30 75</span> </br> <span>contact@aapei-epanou.org</span>'
        );
        new mapboxgl.Marker({
        color: '#F44444',
        id: 'marker',
        }).setLngLat([ 6.0751692827490285, 45.88488992094962])
        .setPopup(popup1)
        .addTo(map)
        

        var popup2 = new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<p> Aller plus haut </p> </br>  <span>264 rue de la Boquette</span> </br> <span> 74300 Cluses </span> </br> <span>04 50 98 77 29</span> </br> <span>lbertagnolio@allerplushaut.fr</span>'
        );
        new mapboxgl.Marker({
        color: '#F44444',
        id: 'marker',
        }).setLngLat([6.5866382980986025, 46.06242693484371])
        .setPopup(popup2)
        .addTo(map)

        var popup3 = new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<p> Apei de Thonon et du Chablais </p> </br>  <span>Route du Ranch – Vongy</span> </br> <span> 74204 Thonon-les-Bains </br> </span>  <span>04 50 71 55 33</span> </br> <span>contact@apeichablais.org</span>'
        );
        new mapboxgl.Marker({
        color: '#F44444',
        id: 'marker',
        }).setLngLat([6.506160398109394, 46.38165310404946])
        .setPopup(popup3)
        .addTo(map)

        var popup4 = new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<p> APEI du Centre Arthur Lavy </p> </br>  <span>231 rue Saint François de Sales </br> </span>  <span>Thorens-Glières 74570</span> </br> <span>04 50 55 64 00</span>'
        );
        new mapboxgl.Marker({
        color: '#F44444',
        id: 'marker',
        }).setLngLat([6.2483552692604265, 45.995325695891346])
        .setPopup(popup4)
        .addTo(map)
        
        var popup5 = new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<p> Amitié et Avenir </p> </br>  <span>21 avenue des Hirondelles </br> </span>  <span>Annecy 74000</span> </br> <span>04 50 46 55 47</span> </br> <span>amitie.et.avenir@gmail.com</span>'
        );
        new mapboxgl.Marker({
        color: '#F44444',
        id: 'marker',
        }).setLngLat([6.114285340421522, 45.90550340070422])
        .setPopup(popup5)
        .addTo(map)

        var popup6 = new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<p> ATMP 74 </p> </br>  <span>3 rue du Kiosque </br> </span>  <span>74962 Cran Gevrier</span> </br> <span>04 50 67 98 98</span>'
        );
        new mapboxgl.Marker({
        color: '#F44444',
        id: 'marker',
        }).setLngLat([6.105857682749842, 45.90840928337499])
        .setPopup(popup6)
        .addTo(map)

        var popup7 = new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<p> Nous Aussi Vétraz </p> </br>  <span>43 route de Collonges </br> </span>  <span>74106 Vetraz-Monthoux</span> </br> <span>04 50 37 32 28</span> </br> <span>info@nousaussi.fr </span>'
        );
        new mapboxgl.Marker({
        color: '#F44444',
        id: 'marker',
        }).setLngLat([6.248800128789577, 46.177727073008924])
        .setPopup(popup7)
        .addTo(map)

        var popup8 = new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<p> Unapei ARA </p> </br>  <span>7 rue Coty</br> </span>  <span>42000 St-Etienne</span> </br> <span> 07 61 73 19 83 </span> </br> <span>unapei.ara.mael@gmail.com</span>'
        );
        new mapboxgl.Marker({
        color: '#F44444',
        id: 'marker',
        }).setLngLat([4.372929511443677, 45.467310068113484])
        .setPopup(popup8)
        .addTo(map)

        var popup9 = new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<p> Unapei </p> </br>  <span>15 rue Coysevox </br> </span>  <span>75876 Paris </span> </br> <span>01 44 85 50 50</span> </br> <span>public@unapei.org</span>'
        );
        new mapboxgl.Marker({
        color: '#F44444',
        id: 'marker',
        }).setLngLat([2.32947849807723, 48.89167420358378])
        .setPopup(popup9)
        .addTo(map)


    }
}






</script>

<style lang="scss" scoped>
    #title {
        text-align: center;
        margin-bottom: 70px;
    }

    #map {
        height: 400px;
        width: 100%;
    }


</style>