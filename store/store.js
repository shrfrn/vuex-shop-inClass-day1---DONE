const { createStore } = Vuex
import { userService } from '../services/user.service.js'

const storeOptions = {
    strict: true,
    state() {
        return {
            count: 0,
            user: userService.getLoggedinUser(),
        }
    },
    mutations: {
        increment(state, payload) {
            state.count += payload.val
        }
    }
}
export const store = createStore(storeOptions)