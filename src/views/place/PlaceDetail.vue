<template>
    <v-container fluid>
        <v-layout justify-center>
            <v-flex m8>
                <v-card>
                    <v-card-title primary-title>
                        <h3>{{name}}</h3>
                    </v-card-title>
                    <v-card-text>
                        <p>Address: {{address}}</p>
                        <p>Phone: {{phone}}</p>
                        <map-with-marker></map-with-marker>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import MapWithMarker from "@/components/map/MapWithMarker";
    export default {
        name: "PlaceDetail",
        components: {MapWithMarker},
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
        }
    }
</script>

<style scoped>

</style>
