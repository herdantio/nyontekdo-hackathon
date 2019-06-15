<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Register</h3>
            <div>
              <v-form v-model="valid">
                <v-container>
                  <v-layout>
                    <v-flex xs12>
                      <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        color="blue"
                        required
                      ></v-text-field>
                    </v-flex>
                  </v-layout>

                  <v-layout>
                    <v-flex xs12>
                      <v-text-field
                        type="password"
                        v-model="password"
                        :rules="passwordRules"
                        label="Password"
                        color="blue"
                        required
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  
                </v-container>
              </v-form>
            </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="red">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
   name: 'login',
   data: () => ({
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
  })
}
</script>

<style>
  
</style>
