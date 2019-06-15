import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAM8vhgafZDFyTAINPqcePpFh_U8niGreI",
    authDomain: "nyontekdo.firebaseapp.com",
    databaseURL: "https://nyontekdo.firebaseio.com",
    projectId: "nyontekdo",
    storageBucket: "nyontekdo.appspot.com",
    messagingSenderId: "152649245526",
    appId: "1:152649245526:web:5a4a335a9a056d11"
}

export const db = firebase
    .initializeApp(firebaseConfig)
    .firestore()
