import { showSuccessMsg } from '../services/event-bus.service.js'
import { productService } from '../services/product.service.js'

import ProductList from '../cmps/ProductList.js'
import AddProduct from '../cmps/AddProduct.js'

export default {
    template: `
        <section class="shop-page router-view">
            <h1>The Shop</h1>   
            <ProductList @add-to-cart="addToCart" :products="products"/>
            <AddProduct />
        </section>
    `,
    methods: {
        addToCart(product) {
            this.$store.commit({ type: 'addToCart', product })
            showSuccessMsg(`TODO: Add ${product._id} to Cart`)
        },
    },
    computed: {
        products() {
            return this.$store.state.products
        },
    },
    components: {
        ProductList,
        AddProduct,
    }
}