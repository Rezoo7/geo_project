<template>
  <div style="display: inline-block;width: 50%;margin-left: 5%;">
      <br><br>
      <b-list-group>
        <b-list-group-item button v-for="truck in trucks" v-bind:key="truck.id" href="#some-link" class="w-75">
             {{ truck.foodTruck.name }} - {{ truck.distance }} m
        </b-list-group-item>
      </b-list-group>
  </div>
</template>

<script>
export default {
    name: 'Liste',
    data () {
        return {
            trucks : null
        }
    },

    async created(){

      const headers = { "Content-Type": "application/json" }

      await fetch("http://60176a70e131.ngrok.io/foodtruck?x=48.2238&y=-1.7908", { headers })
      .then(response => response.json())
      .then(data => (this.trucks = data )
      
      )}

      //'http://60176a70e131.ngrok.io/foodtruck?x=48.22380065917969&y=-1.7908880710601807
}
</script>

<style>

</style>