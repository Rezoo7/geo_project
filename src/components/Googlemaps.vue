<template>
    <div>
        <GmapMap
            :center="{lat:47.206054, lng:-1.539269}"
            :zoom="15"
            style="width: 90vh; height: 60vh; margin-left: 5%"
        >
        </GmapMap>
    </div>
</template>

<script>
export default {
    name:'Googlemaps',

    methods: {
      placeMarker() {
          //let marker = new google.maps.Marker({
            //  position: location,
          //    map: map
        //});
      }
    }
}   
</script>