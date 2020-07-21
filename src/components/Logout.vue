<template>
  <div id="logout">
    <button class="btn btn-outline-success" @click="logout()" v-if="isLogged">Logout</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'isLogged'
    ])
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
