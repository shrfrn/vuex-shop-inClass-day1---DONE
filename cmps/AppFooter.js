export default {
    template: `
        <footer>
            <h4>Cart Total: \${{ totalPrice }}</h4>
            <h4>Count: {{ countForDisplay }}</h4>
        </footer>
    `,
    computed: {
        totalPrice() {
            const cart = this.$store.state.cart
            return cart.reduce((acc, prd) => acc + prd.price, 0)
        },
        countForDisplay() {
            return this.$store.state.count
        },
    },
}