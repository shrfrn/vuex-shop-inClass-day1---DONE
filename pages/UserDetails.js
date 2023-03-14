import { userService } from "../services/user.service.js"
import { showSuccessMsg } from "../services/event-bus.service.js"

export default {
    template: `
        <section class="user-details router-view">
            <form @submit.prevent="addFunds" class="add-funds">
                <h3>Add Juba</h3>
                <input type="number" v-model.number="amount">
                <button>Add</button>
            </form>
            <h3>{{ user.fullname }}</h3>
            <ul v-if="user.orders.length">
                <li v-for="order in user.orders">
                    <pre>{{ order }}</pre>
                    <button @click="changeOrderStatus(order)">
                        {{ order.status === 'PENDING' ? 'Approve' : 'Cancel' }}
                    </button>
                </li>
            </ul>
            <h4 v-else>No orders yet, <RouterLink to="/shop">make your first one</RouterLink></h4>
        </section>
    `,
    data() {
        return {
            amount: 0,
        }
    },
    methods: {
        addFunds() {
            userService.updateBalance(this.amount)
                .then(() => {
                    this.$store.commit({ type: 'addFunds', amount: this.amount })
                    showSuccessMsg(`Added ${this.amount} Zuzim`)
                })
        },
        changeOrderStatus(order) {
            const newStatus = order.status === 'PENDING' ? 'APPROVED' : 'PENDING'
            userService.changeOrderStatus(order._id, newStatus)
                .then(() => {
                    this.$store.commit({ type: 'changeOrderStatus', orderId: order._id, status: newStatus })
                })
        }
    },
    computed: {
        user() {
            return this.$store.getters.user
        }
    }
}