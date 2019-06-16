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

                        <v-list>
                            <v-list-tile>
                                <v-list-tile-content v-for="data in classes" :key="data.id">
                                    <v-list-tile-title>{{data.name.stringValue}}</v-list-tile-title>
                                    <v-list-tile-sub-title>{{data.start.stringValue}} - {{data.end.stringValue}}</v-list-tile-sub-title>
                                    <v-list-tile-sub-title>{{data.capacity.integerValue - data.students.arrayValue.values.length}} seats left!</v-list-tile-sub-title>
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

</style>
