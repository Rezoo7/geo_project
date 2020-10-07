<template>
  <div>
    <div style="margin-left: 42%">
      <label class="sr-only" for="inline-form-input-name">X</label>
      <b-input
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0 w-25"
          placeholder="Coordonnées X"
          v-model="coordX"
      ></b-input>
      <br>
      <label class="sr-only" for="inline-form-input-name">X</label>
      <b-input
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0 w-25    "
          placeholder="Coordonnées Y"
          v-model="coordY"
      ></b-input>   
    </div>
    
    <br> <br>
    <b-button type="submit" v-on:click="onSubmit"> Envoyer </b-button>
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

        const coords = JSON.stringify({ "X" : this.coordX, "Y" : this.coordY })

        console.log(coords)
    }
  }


}
</script>

<style>

</style>