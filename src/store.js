import Vue from 'vue'
import Vuex from 'vuex'
import {vuexfireMutations} from 'vuexfire'
import * as firebase from 'firebase'
// import firebaseApp from './lib/firebase/app'


import search from './stores/modules/search/search'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null
    },
    mutations: {
        ...vuexfireMutations,
        logout(state){
            console.log('Logged out')
            state.user = null;
            router.push({name: 'login'})
        },
        buildUserResult(state, user){
            state.user = {
                id: user.uid,
                name: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            }
        }
    },
    actions: {
        signUserInGoogle ({commit}) {
            firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
                .then(({user}) => {
                    commit('buildUserResult', user)
                    router.push({name: 'search'})
                })
                .catch(error => {
                    console.log(error)
                })
        },
        logout ({commit}) {
            firebase.auth().signOut().then(()=>{
                commit('logout')
            })
        },
        checkIsLoggedIn({commit}){
            firebase.auth().onAuthStateChanged((user)=>{
                if(user){
                    commit('buildUserResult', user)
                } else {
                    commit('logout')
                }
            })
        }
    }, modules: {
      search
    }
})
