<template>
  <div>
    <div>
      <h2>Search and add a pin</h2>
      <label>
        <b-input
            id="inline-form-input-name"
            v-model="coordX"
            placeholder="Coordonnées X"
        ></b-input>
        <b-input
            id="inline-form-input-name"
            v-model="coordY"
            placeholder="Coordonnées X"
        ></b-input>
        <button @click="addMarker">Add</button>
      </label>
      <br/>

    </div>
    <br>
    <gmap-map
        :center="center"
        :zoom="12"
        style="width:100%;  height: 400px;"
    >
      <gmap-marker
          v-for="(m, index) in markers"
          :key="index"
          :position="m.position"
          @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null,
      coordX : null,
      coordY : null
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      console.log(this.coordX,this.coordY);
        const marker = {
          lat: Number(this.coordX),
          lng: Number(this.coordY)
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>
