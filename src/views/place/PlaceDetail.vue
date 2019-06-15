<template>
    <v-container fluid>
        <v-layout>
            <div v-for="gym in gyms">
                <v-flex xs12 sm6 offset-sm3>
                    <v-card>
                        <v-img
                        src="https://cdn.vuetifyjs.com/images/lists/ali.png"
                        height="300px"
                        >
                            <v-layout
                                column
                                fill-height
                            >
                                <v-card-title>
                                

                                <v-spacer></v-spacer>

                                </v-card-title>

                                <v-spacer></v-spacer>

                                <v-card-title class="white--text pl-5 pt-5">
                                    <div class="display-1 pl-5 pt-5">{{gym.name}}</div>
                                </v-card-title>
                            </v-layout>
                        </v-img>

                        <v-list two-line>
                        <v-list-tile @click="">
                            <v-list-tile-content>
                                <v-list-tile-title>+{{gym.phone}}</v-list-tile-title>
                                <v-list-tile-sub-title>Phone</v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>

                        <v-list-tile @click="">
                            <v-list-tile-content>
                                <v-list-tile-title>{{gym.address}}</v-list-tile-title>
                                <v-list-tile-sub-title>Address</v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        </v-list>
                    </v-card>
                </v-flex>
            </div>
            
        </v-layout>
    </v-container>
</template>

<script>
    import {mapState} from 'vuex'
    import MapWithMarker from "@/components/map/MapWithMarker";
    export default {
        name: "PlaceDetail",
        components: {MapWithMarker},
        sportCenter: {
          name: '',
          address: '',
          phone: ''  
        },
        props: {
            name:{
                default: 'Test'
            },
            address:{
                default: 'Jl. sandang'
            },
            phone:{
                default: '000000'
            }
        },
        component:{
            MapWithMarker: require('../../components/map/MapWithMarker')
        },
        created(){
            console.log(this.$route.params.id)
        },
        computed: {
            ...mapState('search', {
                gym: state => state.gym
            }),
            gyms(){
                return this.gym
            }
        }
    }
</script>

<style scoped>

</style>
