const { createStore } = Vuex
import { userService } from '../services/user.service.js'
import { utilService } from '../services/util.service.js'

const storeOptions = {
    strict: true,
    state() {
        return {
            count: 0,
            user: userService.getLoggedinUser(),
            cart: [],
            products: null,
        }
    },
    mutations: {
        increment(state, { val }) {
            state.count += val
        },
        addToCart({ cart }, { product }){
            cart.push(product)
        },
        removeFromCart({ cart }, { productId }) {
            const idx = cart.findIndex(prd => prd._id === productId)
            cart.splice(idx, 1)
        },
        setProducts(state, payload) {
            state.products = payload.products
        },
        addProduct({ products }, { product }) {
            products.push(product)
        },
        checkout(state) {
            const order = {
                _id: utilService.makeId(),
                createdAt: Date.now(),
                items: state.cart,
                total: this.getters.cartTotal,
                status: 'pending',
            }
            state.user.orders.unshift(order)
            state.user.balance -= this.getters.cartTotal
            state.cart = []
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