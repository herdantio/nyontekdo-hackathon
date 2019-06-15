<template>

</template>

<script>
    import {mapActions, mapState} from 'vuex'
    export default {
        name: "SearchGym",
        methods: {
            ...mapActions('search', [
                'bindData'
            ])
        },
        computed: {
            ...mapState('search', {
                gym: state => state.gym
            })
        }
    }
</script>

<style scoped>

</style>
