<template>
  <div id="app"> 
    <Form/> 
    <br>
    <Googlemaps/>
    <Liste/>
  </div>
</template>

<script>
import Form from './components/Form.vue'
import Googlemaps from './components/Googlemaps'
import Liste from './components/Liste'

export default {
  name: 'App',
  components: {
    Form , Googlemaps, Liste
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("./assets/background.png") ;
  width: 100%;
  height: 100vh;
}
</style>
