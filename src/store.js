import Vue from 'vue'
import Vuex from 'vuex'
import {vuexfireMutations} from 'vuexfire'
import * as firebase from 'firebase'
import firebaseApp from './lib/firebase/app'

import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null
    },
    mutations: {
        ...vuexfireMutations,
        logout(state){
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
            firebaseApp.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
                .then(({user}) => {
                    commit('buildUserResult', user)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        logout ({commit}) {
            firebaseApp.auth().signOut().then(()=>{
                commit('logout')
            })
        },
        checkIsLoggedIn({commit}){
            firebaseApp.auth().onAuthStateChanged((user)=>{
                if(user){
                    commit('buildUserResult', user)
                } else {
                    commit('logout')
                }
            })
        }
    }
})
