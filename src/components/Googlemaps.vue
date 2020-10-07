<template>
    <div>
        <GmapMap
            :center="{lat:47.206054, lng:-1.539269}"
            :zoom="15"
            style="width: 1000px; height: 600px">
        </GmapMap>
    </div>
</template>

<script>
export default {
    name:'Googlemaps',
}   
</script>