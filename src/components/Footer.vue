<template lang="html">
    <div id="footer">
        <div class="min-footer">
            <h1>FOOTER IN PROGRESS</h1>
        </div>
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

#footer {
    height: 120px;
    width: 100vw;
    @include centerPosition();
    .min-footer {
        height: 120px;
        width: 80%;
        @include centerPosition();
        border: 1px solid black;
    }
}

</style>
