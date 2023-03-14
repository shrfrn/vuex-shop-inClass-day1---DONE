import { showSuccessMsg } from '../services/event-bus.service.js'
import { productService } from '../services/product.service.js'

export default {
    template: `
        <section class="home router-view">
            <h1>Hi {{ user.username }}!</h1>
            <h1>We have {{ productCount }} Products in our store!</h1>
            
            <section class="counter">
                <h2>Count {{countForDisplay}}</h2>
                <button @click="inc(1)">+</button>
                <button @click="inc(10)">+10</button>
            </section>
            <img src="../img/Store.png"/>
        </section>
    `,
    data() {
        return {
            products: [],
            user: { username: 'Puki', balance: 20 },
        }
    },
    created() {
        this.products = productService.query()
        showSuccessMsg('HomePage Loaded')
    },
    methods: {
        inc(val) {
           console.log('INC INC')
        }
    },
    computed: {
        countForDisplay() {
            return 101
        },
        productCount() {
            return 0
        }
    }
}