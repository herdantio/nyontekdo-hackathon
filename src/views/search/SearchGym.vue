<template>
    <v-container fluid>
        <h1>{{gyms}}</h1>
        <p v-for="gym in gyms">{{gym.id}}</p>
    </v-container>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    export default {
        name: "SearchGym",
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
                gyms: state => state.gym
            })
        }
    }
</script>

<style scoped>

</style>
