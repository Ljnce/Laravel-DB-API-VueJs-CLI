<template lang="html">
  <div id="edit">
      <div class="container-edit">
          <h1> Modifica utente </h1>
          <form>
                <div class="role">
                    <strong>Role:</strong>
                    <input type="text" class="form-control" v-model="currentrole">
                </div>
                <div class="surname">
                    <strong>Surname:</strong>
                    <input type="text" class="form-control" v-model="currentsurname">
                </div>
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
    created () {
        this.update();
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

#edit {
    .container-edit {
        height: 400px;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .role,
        .surname{
            margin-bottom: 20px;
        }
    }
}

</style>
