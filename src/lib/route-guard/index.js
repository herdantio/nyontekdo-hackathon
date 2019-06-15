import store from '../../store'

const beforeEnterLogin = (to, from, next) => {
    if (store.state.user) {
        next('/search')
    } else {
        next()
    }
}

const beforeEnter = (to, from, next) => {
    if (store.state.user) {
        next()
    } else {
        next('/login')
    }
}

export {
    beforeEnter,
    beforeEnterLogin
}
