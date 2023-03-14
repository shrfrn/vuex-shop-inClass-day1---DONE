export default {
    template: `
        <footer>
            <h4>Cart Total: \${{ totalPrice }}</h4>
            <h4>Count: {{ countForDisplay }}</h4>
        </footer>
    `,
    computed: {
        totalPrice() {
            return this.$store.getters.cartTotal
        },
        countForDisplay() {
            return this.$store.state.count
        },
    },
}