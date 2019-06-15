<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title primary-title>
        </v-card-title>

        <v-card-actions>
          <v-btn block color="warning" @click="signUserInGoogle">Register with Google Account</v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn block color="warning" @click="signUserInGoogle">Login with Google Account</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: 'login',
    data(){
      return{
        valid: false,
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        password: '',
        passwordRules: [
          v => !!v || 'Password is required',
        ]
      }
    },
    methods: {
      ...mapActions([
              'signUserInGoogle',
              'checkIsLoggedIn'
      ])
    },
    computed: {
    }

  }
</script>

<style>

</style>
