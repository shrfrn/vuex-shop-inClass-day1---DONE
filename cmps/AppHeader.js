import ShoppingCart from './ShoppingCart.js'

export default {
    template: `
        <header>
            <h1 class="main-title">Vuex</h1> 

            <button @click="isCartShown=!isCartShown" class="cart-info">
                {{ cartLength }} Products in your Cart
            </button>

            <ShoppingCart 
                v-if="isCartShown && cartProducts.length > 0" 
                :products="cartProducts"/>

            <nav>
                <router-link to="/">Home</router-link> | 
                <router-link to="/shop">Shop</router-link>
            </nav>

            <section class="user-info">
                <RouterLink to="/user">{{ user.username }}</RouterLink> | \${{ user.balance }} 
            </section>
        </header>
    `,
    data() {
        return {
            isCartShown : false,
        }
    },
    computed : {
        user() {
            return this.$store.getters.user
        },  
        cartLength() {
            return this.$store.getters.cartLength
        },
        cartProducts() {
            return this.$store.getters.cart
        },
    },
    components: {
        ShoppingCart,
    }
}