<template>
  <v-container fluid>
    <v-toolbar
      dense
      floating
    >
      <v-text-field
      hide-details
      label="Search"
      single-line
      v-model="searchBar"
      ></v-text-field>
    </v-toolbar>
    <div v-for="gym in gyms">
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <v-flex xs4>
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                aspect-ratio="2.75"
              ></v-img>
            </v-flex>
            <v-flex xs8 >
              <div class="description-text">
                <router-link v-bind:to="'/detail/'+gym.id"><h3 class="headline mb-0 text-xs-left">{{ gym.name}}</h3></router-link>
                <p class="text-xs-left">{{ gym.address }}</p>
                <p class="text-xs-left">+{{ gym.phone }}</p>
              </div>
            </v-flex>
          </v-card-title>
        </v-card>
      </v-flex>
      <br>
    </div>
  </v-container>
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  export default {
    name: "SearchGym",
    data(){

      return {
        searchBar: '',
        sportCenter: {
          name: '',
          address: '',
          phone: ''
        }
      }
    },
    mounted(){
        this.bindData()
    },
    methods: {
        ...mapActions('search', [
            'bindData'
        ])
    },
    computed: {
      ...mapState('search', {
        gym: state => state.gym
      }),
      gyms(){
        if(this.searchBar){
          return this.gym.filter((sportCenter)=>{
            if(sportCenter.name == this.searchBar){
              return sportCenter.name == this.searchBar
            }else if(sportCenter.address == this.searchBar){
              return sportCenter.address == this.searchBar
            }else if(sportCenter.phone == this.searchBar){
              return sportCenter.phone == Number(this.searchBar)
            }
          })
        }else{
          return this.gym
        }
      }
    }
  }
</script>

<style scoped>
  .description-text{
    margin-left: 20px;
  }
</style>
