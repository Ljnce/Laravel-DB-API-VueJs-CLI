<template>
    <div id="create">
        <div class="container-newdata">
            <h1>Inserisci un nuovo utente:</h1>
            <form @submit="formSubmit" v-on:keyup.enter="formSubmit">
                <div class="role">
                    <label for="role"> Ruolo </label>
                    <input type="text" class="form-control" v-model="role">
                </div>
                <div class="surname">
                    <label for="surname"> Personaggio </label>
                    <input type="text" class="form-control" v-model="surname">
                </div>
                <button class="btn btn-outline-success"> Submit </button>
            </form>
            <pre>
               <small>{{outputSend}}</small>
            </pre>
        </div>
    </div>
</template>

<script>

export default {
    name:"create",
    data () {
        return {
            role: '',
            surname: '',
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
    }
}

</script>

<style lang="scss">

#create {
    .container-newdata {
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
