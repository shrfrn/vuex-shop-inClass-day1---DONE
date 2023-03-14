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
                {{ user.username }} | \${{ user.balance }} 
            </section>
        </header>
    `,
    data() {
        return {
            isCartShown : false,
            user: { username: 'Baba', balance: 20 },
        }
    },
    computed : {
        cartLength() {
            return 0
        },
        cartTotal() {
            return 0
        },
        cartProducts() {
            return [
                { name: 'haha', _id: '123abc1'},
                { name: 'lala', _id: '123abc2'},
                { name: 'gaga', _id: '123abc3'},
            ]
        },
    },
    components: {
        ShoppingCart,
    }
}