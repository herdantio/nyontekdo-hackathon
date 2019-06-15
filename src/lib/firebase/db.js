import * as firebase from 'firebase'
import {firebaseConfig} from '../config/config'


export const db = firebase
    .initializeApp(firebaseConfig)
    .firestore()
