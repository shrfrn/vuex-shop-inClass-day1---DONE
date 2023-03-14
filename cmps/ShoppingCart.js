import { userService } from "../services/user.service.js"
import { showErrorMsg } from "../services/event-bus.service.js"

export default {
    props: ['products'],
    template: `
        <section class="shopping-cart">
            <ul>
                <li v-for="product in products">
                    <button @click="removeFromCart(product._id)">x</button>
                    <h3>{{ product.name }}</h3>
                </li>
                <p>Total: \${{ cartTotal }} </p>
                <button @click="checkout">Checkout</button>
            </ul>
        </section>
    `,
    methods: {
        removeFromCart(productId) {
            this.$store.commit({ type: 'removeFromCart', productId })
        },
        checkout() {
            if(this.user.balance < this.cartTotal) {
                showErrorMsg('Insufficient balance')
                return
            }
            userService.addOrder(this.cart, this.cartTotal)
                .then(updatedUser => this.$store.commit({ type: 'checkout', user: updatedUser }))
        },
    },
    computed: {
        cart(){
            return this.$store.getters.cart
        },
        cartTotal() {
            return this.$store.getters.cartTotal
        },
        user() {
            return this.$store.getters.user
        },
    },
}
