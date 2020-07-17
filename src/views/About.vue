<template>
    <div id="about">
        <div class="min-about">
            <h3> La creazione di questo piccolo progetto, è stata suddivisa in 3 fasi:</h3>
            <h4 style="color:red"> Fasi 1 </h4>
            <ul>
                <li> 1) Creazione progetto Laravel </li>
                <li> 2) Creazione Database tramite Laravel (MySQL)</li>
                <li> 3) Creazione Faker per popolare la tabella creata in precedenza</li>
                <li> 4) Passaggio tabella DB da Controller alla View, per test visualizzazione</li>
            </ul>
            <h4 style="color:red"> Fase 3 </h4>
            <ul>
                <li> 1) Creazione API e Bearer Token, della tabella DB appena creata, tramite Laravel </li>
                <li> 2) Creazione Controller API: GET/POST/PUT/DELETE con relative prove di funzionamento "in live" su POSTMAN</li>
            </ul>
            <h4 style="color:red"> Fase 2 </h4>
            <ul>
                <li> 1) Creazione progetto Vue CLI </li>
                <li> 2) Installazione pacchetti necessari quali Axios e jQuery </li>
                <li> 3) Organizzazione e ordino delle parti e delle Route </li>
                <li> 4) Stampa delle API tramite Axios, con relativi test GET/POST/PUT/DELETE </li>
            </ul>
       </div>
  </div>
</template>

<script>

</script>

<style lang="scss">

@mixin centerPosition ($display:flex, $align:center, $justy:center) {
    display:$display ;
    align-items: $align;
    justify-content: $justy
}

#about {
    height: 500px;
    @include centerPosition();
    .min-about {
        width: 80%;
    }
}

</style>
