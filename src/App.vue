<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Form/>
    <Googlemaps/>
  </div>
</template>

<script>
import Form from './components/Form.vue'
import Googlemaps from './components/Googlemaps'

export default {
  name: 'App',
  components: {
    Form , Googlemaps
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
  margin-top: 10px;
}
</style>
