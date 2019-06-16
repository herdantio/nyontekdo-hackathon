import {vuexfireMutations, firestoreAction} from 'vuexfire'
import {db} from '../../../lib/firebase/db'

const detail = {
    namespaced: true,
    state: {
        classes: []
    },
    actions: {
        getClasses({state, dispatch}, id){
            state.classes = []
            db.collection(`/Gym/${id}/classes`)
                .get()
                .then(querySnapshot => {
                    querySnapshot.docs.forEach(data => {
                        console.log(data._document.proto.fields)
                        let {name, start, end, capacity, students} = data._document.proto.fields
                        state.classes.push({
                            id: data.id,
                            name,
                            start,
                            end,
                            capacity,
                            students
                        })
                    })

                })
        },
        bindClasses: colId => firestoreAction(
            ({bindFirestoreRef}) => {
                console.log('colId: '+colId)
                return bindFirestoreRef('classes', db.collection(`/Gym/${colId}/classes`))
            }
        )
    },
    mutations: {
        ...vuexfireMutations
    }
}

export default detail
