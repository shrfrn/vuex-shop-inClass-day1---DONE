export default {
    template: `
        <section class="user-details router-view">
            <h3>{{ user.fullname }}</h3>
            <ul v-if="user.orders.length">
                <li v-for="order in user.orders">
                    <pre>{{ order }}</pre>
                </li>
            </ul>
            <h4 v-else>No orders yet, <RouterLink to="/shop">make your first one</RouterLink></h4>
        </section>
    `,
    computed: {
        user() {
            return this.$store.getters.user
        }
    }
}