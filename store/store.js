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
        increment(state, { val }) {
            state.count += val
        },
        addToCart({ cart }, { product }){
            cart.push(product)
        },
    },
    getters: {
        cartTotal({ cart }) {
            return cart.reduce((acc, prd) => acc + prd.price, 0)
        },
        cart({ cart }) {
            return cart
        },
        cartLength({ cart }) {
            return cart.length
        },
        user({ user }) {
            return user
        },
    }
}
export const store = createStore(storeOptions)