import {vuexfireMutations, firestoreAction} from 'vuexfire'
import {db} from '../../../lib/firebase/db'

const search = {
    namespaced: true,
    state: {
        gym: []
    },
    actions: {
        bindData: firestoreAction(
            ({bindFirestoreRef}) => bindFirestoreRef('gym', db.collection('Gym'))
        )
    },
    mutations: {
        ...vuexfireMutations
    }
}

export default search
