<template>
    <v-container fluid>
        <div v-for="gym in gyms">
           <v-layout>
                <v-flex xs12 sm6>
                    <v-card>
                        <v-img
                        v-bind:src="gym.photoUrl"
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

                        <v-list three-line>
                            <v-list-tile @click="">
                                <v-list-tile-content>
                                    <v-list-tile-title>+{{gym.phone}}</v-list-tile-title>
                                    <v-list-tile-sub-title>Phone</v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>

                            <div>
                                <map-with-marker :lat="gym.lat" :lng="gym.lng" style="height: 300px;"></map-with-marker>
                            </div>

                            <v-list-tile @click="">
                                <v-list-tile-content>
                                    <v-list-tile-title>{{gym.address}}</v-list-tile-title>
                                    <v-list-tile-sub-title>Address</v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-list-tile>
                                <v-list-tile-content v-for="data in classes" :key="data.id">
                                    <v-list-tile-title id="class-title">{{data.name.stringValue}}</v-list-tile-title>
                                    <div class="open-close-hours">
                                        <v-layout>
                                            <v-flex xs6>
                                                <v-list-tile-sub-title >{{data.start.stringValue}} - {{data.end.stringValue}}</v-list-tile-sub-title>
                                                <v-list-tile-sub-title >{{data.capacity.integerValue - data.students.arrayValue.values.length}} seats left!</v-list-tile-sub-title>
                                            </v-flex>
                                            <v-flex id="join-button" xs6>
                                                <v-btn color="error">Join Class</v-btn>
                                            </v-flex>
                                        </v-layout>
                                    </div>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                    </v-card>
                </v-flex>
            </v-layout>
        </div>
    </v-container>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        name: "PlaceDetail",
        components: {
            MapWithMarker: () => import('../../components/map/MapWithMarker')
        },
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
        created(){
            // this.bindData()
            this.getClasses(this.$route.params.id)
        },
        methods:{
            ...mapActions('detail',[
                'getClasses'
            ]),
        },
        computed: {
            ...mapState('search', {
                gym: state => state.gym
            }),
            ...mapState('detail', {
                classes: state => state.classes
            }),
            gyms(){
                if(this.$route.params.id){
                    return this.gym.filter((sportCenter)=>{
                        if(sportCenter.id == this.$route.params.id){
                            console.log(sportCenter.id)
                            console.log(sportCenter.name)
                            console.log(sportCenter.phone)
                            console.log(sportCenter.address)
                            return sportCenter.id == this.$route.params.id
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped>
   #join-button {

   }
</style>
