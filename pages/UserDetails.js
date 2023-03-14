export default {
    template: `
        <section class="user-details">
            <pre>{{ user }}</pre>
        </section>
    `,
    computed: {
        user() {
            return this.$store.getters.user
        }
    }
}