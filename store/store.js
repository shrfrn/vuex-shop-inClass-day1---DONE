const { createStore } = Vuex

const storeOptions = {
    strict: true,
    state() {
        return {
            count: 0,
        }
    },
    mutations: {
        increment(state, payload) {
            state.count += payload.val
        }
    }
}
export const store = createStore(storeOptions)