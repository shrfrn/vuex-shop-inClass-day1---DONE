import { showSuccessMsg } from '../services/event-bus.service.js'
import { productService } from '../services/product.service.js'

export default {
    template: `
        <section class="home router-view">
            <h1>Hi {{ user.username }}!</h1>
            <h1 v-if="products">We have {{ productCount }} Products in our store!</h1>
            
            <section class="counter">
                <h2>Count {{ countForDisplay }}</h2>
                <button @click="inc(1)">+</button>
                <button @click="inc(10)">+10</button>
            </section>
            <img src="../img/Store.png"/>
        </section>
    `,
    created() {
        showSuccessMsg('HomePage Loaded')
    },
    methods: {
        inc(val) {
           this.$store.commit({ type: 'increment', val })
        }
    },
    computed: {
        user() {
            return this.$store.state.user
        },  
        products() {
            return this.$store.state.products
        },
        countForDisplay() {
            return this.$store.state.count
        },
        productCount() {
            return this.products.length
        }
    }
}