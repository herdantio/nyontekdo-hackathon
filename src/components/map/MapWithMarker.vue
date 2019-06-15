<template>
    <gmap-map
        :center="{lat:10, lng:10}"
        :zoom="7"
        map-type-id="terrain"
        style="height: 300px"
    >
        <GmapMarker
                :key="index"
                :position="{lat, lng}"
                :clickable="clickable"
                :draggable="draggable"
        />
    </gmap-map>
</template>

<script>
    export default {
        name: "MapWithMarker",
        props:{
            index:{
                default: '123'
            },
            clickable: false,
            draggable: false,
            lat:{
                default: 10
            },
            lng:{
                default:10
            }
        }
    }
</script>

<style scoped>

</style>
