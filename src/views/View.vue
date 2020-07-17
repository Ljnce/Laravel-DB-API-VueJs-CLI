<template lang="html">
  <div id="view">
      <div class="details">
          <h1>{{single.role}}</h1>
          <small>{{single.surname}}</small>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "view",
    data(){
        return {
            single: ''
        }
    },
    mounted () {
        // Passo l'id all'API da mostrarmi, tramite la rotta url a cui ho dato l'id relativo, come parametro.
        var id = this.$route.params.id;
        console.log(id);
    axios
    .get('http://127.0.0.1:8000/api/players/' + id, {
        headers: {
        'Authorization': 'Bearer '+ '',
        "Content-Type": "application/json",
        }
    })
    .then(response => {
        this.single = response.data
        console.log(response.data);
    })
    .catch(function (error) {
     console.log(error);
     });
 }
}

</script>

<style lang="scss">

@mixin centerPosition ($display:flex, $align:center, $justy:center) {
    display:$display ;
    align-items: $align;
    justify-content: $justy
}

#view {
    height: 500px;
    width: 100vw;
    .details {
        height: 500px;
        @include centerPosition();
        flex-direction: column;
    }
}

</style>
