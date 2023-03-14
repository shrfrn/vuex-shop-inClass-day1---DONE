const { createStore } = Vuex
import { userService } from '../services/user.service.js'

const storeOptions = {
    strict: true,
    state() {
        return {
            count: 0,
            user: userService.getLoggedinUser(),
            cart: [],
        }
    },
    mutations: {
        increment(state, payload) {
            state.count += payload.val
        },
        addToCart(state, payload){
            state.cart.push(payload.product)
        },
    },
    getters: {
        cartTotal(state) {
            return state.cart.reduce((acc, prd) => acc + prd.price, 0)
        },
        cart(state) {
            return state.cart
        },
        cartLength(state) {
            return state.cart.length
        },
        user(state) {
            return state.user
        },
    }
}
export const store = createStore(storeOptions)