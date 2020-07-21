<template>
  <div id="home">
    <div class="home-img">
        <img alt="Vue logo" src="../assets/logo.png" style="height:120px" />
        <img alt="Vue logo" src="../assets/Laravel.svg" style="height:120px"/>
    </div>
    <div class="home-description">
        <h3> Welcome to my Laravel + Vue.js CLI project.</h3>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
};

</script>

<style lang="scss">

@mixin centerPosition ($display:flex, $align:center, $justy:center) {
    display:$display ;
    align-items: $align;
    justify-content: $justy
}

#home {
    height: 500px;
    @include centerPosition();
    flex-direction: column;
    .home-img {
        height: 250px;
        width: 80%;
        @include centerPosition();
        flex-direction: column;
        margin-top: 20px;
    }
    .home-description {
        height: 250px;
        width: 80%;
        @include centerPosition();
    }
}

</style>
