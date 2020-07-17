<template lang="html">
    <div id="navigation">
      <router-link class="link" to="/">Home</router-link>  |
      <router-link class="link" to="/about">About</router-link> |
      <router-link class="link" to="/laravel">Laravel</router-link> |
      <router-link class="link" to="/create">Crea</router-link>
    </div>
</template>

<script>

export default {

}

</script>

<style lang="scss">

@mixin centerPosition ($display:flex, $align:center, $justy:center) {
    display:$display ;
    align-items: $align;
    justify-content: $justy
}

#navigation {
    height: 100px;
    @include centerPosition();
    .link {
        text-decoration: none;
        color: #000000;
        margin: 0 10px;
        &:hover {
            color:#41b883;
            transform: scale(1.2);
            font-size: bolder;
        }
    }
}

</style>
