<template>
   <div id="laravel">
       <div class="container">
           <div class="row justify-content-center">
               <div class="col-md-8">
                   <div class="card">
                       <div class="card-header">Vtest</div>
                       <div class="card-body">
                          <form @submit="formSubmit" v-on:keyup.enter="formSubmit">
                               <strong>Role:</strong>
                               <input type="text" class="form-control" v-model="role">
                               <strong>Surname:</strong>
                               <textarea class="form-control" v-model="surname"></textarea>
                               <button >Submit</button>
                           </form>
                           <strong>Output:</strong>
                          <pre>
                          {{output}}
                          </pre>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       <div class="halo-stamp" v-for="player in players" :key="player.id">
           <h1>{{player.role}}</h1>
           <h2 style="color:red">{{player.surname}}</h2>
           <h3>Elimina elemento</h3>
           <button @click="deleteAddress(player.id)">Delete</button>
           <form @click="update(player.id)">
                <strong>Role:</strong>
                <input type="text" class="form-control" v-model="currentrole">
                <strong>Surname:</strong>
                <textarea class="form-control" v-model="currentsurname"></textarea>
                <button type="submit" @click="update(player.id)">Update</button>
            </form>
       </div>
   </div>
</template>

<script>

export default {
   name: "Laravel",
   // Mi ritorno le proprietà della chiamata AXIOS fatta sul file App.vue
   props:['players'],
   data() {
      return {
           role: '',
           surname: '',
           currentrole: '',
           currentsurname: '',
           output: ''
       }
   },
   methods: {
   formSubmit(e) {
       e.preventDefault();
        var currentObj = this;
        var formData = new FormData()
        formData.append('role', currentObj.role)
        formData.append('surname', currentObj.surname)
        currentObj.axios.post('http://127.0.0.1:8000/api/players', formData, {
           // role: currentObj.role,
           // surname: currentObj.surname,
           headers: {
           'Authorization': 'Bearer '+ '',
           "Content-Type": "application/json",
           }
           })
           .then(function(response) {
               console.log(response);
               currentObj.output = response.data;
           })
           .catch(function (error) {
               console.log(error);
               currentObj.output = error;
           });
       },

   deleteAddress(id){
       this.axios.delete('http://127.0.0.1:8000/api/players/' + id, {
           headers: {
           'Authorization': 'Bearer '+ '',
           "Content-Type": "application/json",
           }
           })
           .then(function(response){
           console.log(response.data.message)
           })
          .catch(function (error) {
           console.log(error);
           });
       },
   update(id){
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
           })
          .catch(function (error) {
           console.log(error);
           });
       }
   }
}

</script>

<style lang="scss">

#laravel {
    .halo-stamp {
        height: 250px;
        width: 100vw;
    }
}

</style>
