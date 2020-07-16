<template>
   <div id="laravel">
       <div class="container-newdata">
           <h1>Inserisci un nuovo utente:</h1>
            <form @submit="formSubmit" v-on:keyup.enter="formSubmit">
                <div class="role">
                    <strong> Ruolo: </strong>
                    <input type="text" class="form-control" v-model="role">
                </div>
                <div class="surname">
                    <strong> Cognome: </strong>
                    <input type="text" class="form-control" v-model="surname">
                </div>
                <button class="btn btn-outline-success" >Submit</button>
            </form>
            <pre>
               <small>{{outputSend}}</small>
            </pre>
       </div>
           <!-- <h1>{{player.role}}</h1> -->
           <table>
           <thead>
               <tr>
                   <th> Alias </th>
                   <th colspan="3"></th>
               </tr>
           </thead>
           <div class="container-stamp" v-for="player in players" :key="player.id">
           <tbody>
               <tr>
                   <td><h2>{{player.surname}}</h2></td>
                   <td><router-link :to="{name:'View', params:{id:player.id}}" tag="button" class="btn btn-outline-info" style="margin-bottom:20px">Vai ai dettagli di {{player.surname}}</router-link></td>
                   <td><router-link :to="{name:'Edit', params:{id:player.id}}" tag="button" class="btn btn-outline-warning" style="margin-bottom:20px">Modifica i dati di {{player.surname}}</router-link></td>
                   <td> <button type="button" class="btn btn-outline-danger"
                    @click="deleteAddress(player.id)">Delete</button></td>
               </tr>
           </tbody>
            </div>
       </table>
           <!-- <h2>{{player.surname}}</h2>
           <router-link :to="{name:'View', params:{id:player.id}}" tag="button" class="btn btn-outline-info" style="margin-bottom:20px">Vai ai dettagli di {{player.surname}}</router-link>
           <router-link :to="{name:'Edit', params:{id:player.id}}" tag="button" class="btn btn-outline-warning" style="margin-bottom:20px">Modifica i dati di {{player.surname}}</router-link>
           <button type="button" class="btn btn-outline-danger"
           @click="deleteAddress(player.id)">Delete</button> -->
            <!-- <form @click="update(player.id)">
                <strong>Role:</strong>
                <input type="text" class="form-control-sm" v-model="currentrole">
                <strong>Surname:</strong>
                <input type="text" class="form-control-sm" v-model="currentsurname">
                <button type="submit" @click="update(player.id)">Update</button>
            </form> -->

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
           outputSend: ''
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
               currentObj.outputSend = response.data;
           })
           .catch(function (error) {
               console.log(error);
               currentObj.outputSend = error;
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
           // this.outputDelete = response.data;
           })
          .catch(function (error) {
           console.log(error);
           // this.outputDelete = error;
           });
       },
      // update(id){
      //    var formData = {
      //      role: this.currentrole,
      //      surname: this.currentsurname,
      //  }
      //  this.axios.put('http://127.0.0.1:8000/api/players/' + id, formData, {
      //      headers: {
      //      'Authorization': 'Bearer '+ '',
      //      "Content-Type": "application/json",
      //      }
      //      })
      //      .then(function(response){
      //      console.log(response.data.message)
      //      })
      //     .catch(function (error) {
      //      console.log(error);
      //      });
      //  }
   }
}

</script>

<style lang="scss">

#laravel {
    .container-newdata {
        height: 400px;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
        .role,
        .surname{
            margin-bottom: 20px;
        }
    }
    .container-stamp {
        height: 100px;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}

</style>
