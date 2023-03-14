export default {
    template: `
        <footer>
            <h4>Cart Total: \${{ totalPrice }}</h4>
            <h4>Count: {{ countForDisplay }}</h4>
        </footer>
    `,
    computed: {
        totalPrice() {
            return 0
        },
        countForDisplay() {
            return this.$store.state.count
        },
    },
}