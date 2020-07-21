<template>
  <div id="login">
      <div class="logged" v-if="isLogged">
          <h4> You are logged in, press here for logout</h4>
          <button class="btn btn-outline-danger" @click="logout()"> Logout</button>
      </div>
        <div class="form-login" v-if="!isLogged">
            <h1>Login</h1>
            <form @submit.prevent="login">
                <div class="email">
                    <label for="email"> Email </label>
                    <input type="email" name="email" v-model="email" placeholder="Email">
                </div>
                <div class="password">
                    <label for="password"> Password </label>
                    <input type="password" name="password" v-model="password" placeholder="Password">
                </div>
                <button type="submit" class="btn btn-outline-info">Login</button>
            </form>
       </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
// import $ from 'jquery';

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters([
      'isLogged'
    ])
  },
  methods: {
    login () {
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: 'Home' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style lang="scss">

    #login {
        height: 300px;
        width: 100vw;
        display: flex;
        align-items: center;
        align-items: center;
        .logged {
            width: 100vw;
        }
        .form-login {
            height: 400px;
            width: 100vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            .email,
            .password{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                margin-bottom: 20px;
            }
        }
    }

</style>
