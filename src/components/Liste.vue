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
import exemples from "../json/exemples.json"
export default {
    name: 'Liste',
    data () {
        return {
            trucks : exemples.trucks
        }
    }

}
</script>

<style>

</style>