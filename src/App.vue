<template>
  <div id="app">
    <Navigation />
    <!-- Faccio passare la chiamata axios API tramite il props, agli altri file -->
    <router-view :players="players"/>
    <Footer />
  </div>
</template>

<script>

import axios from 'axios';
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'app',
    data () {
        return {
            players: null
        }
    },
    // Richiamo API da mostrare a schermo sul file Laravel.Vue
    mounted () {
        axios
        .get('http://127.0.0.1:8000/api/players', {
            headers: {
            'Authorization': 'Bearer '+ '',
            "Content-Type": "application/json",
            }
        })
        .then(response => {
            this.players = response.data
            console.log(response.data);
        })
    },
    // Importo i componenti che mi serve da stampare in tutte le pagine
    components: {
        Navigation,
        Footer
    }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
