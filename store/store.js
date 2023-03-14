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
    }
}
export const store = createStore(storeOptions)