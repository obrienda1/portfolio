import { createStore as _createStore } from 'vuex';

export function createStore() {
    return _createStore({
        state: {
            updates: []
        },
        mutations: {
            ADD_UPDATE(state, update) {
                state.updates.push(update);
            }
        },
        actions: {

        },
        modules: {

        },
        // Strict should not be used in production code. It is used here as a
        // learning aid to warn you if state is modified without using a mutation.
        strict: true
    })
}