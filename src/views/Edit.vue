<template lang="html">
  <div id="view">
      <div class="for">
          <h1>{{old.role}}</h1>
          <small>{{old.surname}}</small>
          <form>
              <strong>Role:</strong>
              <input type="text" class="form-control-sm" v-model="currentrole">
              <strong>Surname:</strong>
              <input type="text" class="form-control-sm" v-model="currentsurname">
              <button type="submit" @click="update()">Update</button>
          </form>
          <!-- <pre>
               <small>{{outputEdit}}</small>
          </pre> -->
      </div>
  </div>
</template>

<script>

export default {
    name: "view",
    data(){
        return {
            old: '',
            outputEdit: ''
        }
    },
    methods: {
        // Passo l'id all'API da mostrarmi, tramite la rotta url a cui ho dato l'id relativo, come parametro.
        // var id = this.$route.params.id;
        update(){
            var id = this.$route.params.id;
           var formData = {
             role: this.currentrole,
             surname: this.currentsurname,
         }
         this.axios.put('http://127.0.0.1:8000/api/players/' + id, formData, {
             headers: {
             'Authorization': 'Bearer '+ '',
             "Content-Type": "application/json",
             }
             })
             .then(function(response){
             console.log(response.data.message)
             // this.outputEdit = response.data;
             })
            .catch(function (error) {
             console.log(error);
             // this.outputEdit = error;
             });
         }

    }
}

</script>

<style lang="scss">

#view {

}

</style>
