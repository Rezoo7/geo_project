<template>
  <div>
    <div style="margin-left: 5%">
      <br>
      <label class="sr-only" for="inline-form-input-name">X</label>
      <b-input
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0 w-50"
          placeholder="Coordonnées X"
          v-model="coordX"      
      ></b-input>
      <br> 
      <label class="sr-only" for="inline-form-input-name">X</label>
      <b-input
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0 w-50"
          placeholder="Coordonnées Y"
          v-model="coordY"
      ></b-input>
    
      <br><br>
      <b-button type="submit" v-on:click="onSubmit" style="margin-left:-55%"> Envoyer </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',

  data : function() {
    return {
        coordX: null,
        coordY: null
    }
  },    
  methods : {
    onSubmit() {
        console.log(this.coordX)
        console.log(this.coordY)

          const coords = JSON.stringify({ "x" : this.coordX, "y" : this.coordY })

        console.log(coords)

        //X Latitude : 48.22380065917969
        //Y Longitude : -1.7908880710601807

        

    }
  }


}
</script>

<style>

</style>
