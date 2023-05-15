import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            isLoggedIn: false
        };
    },
    mutations: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        }
    },
    actions: {
        //Anmelden
        performLogin({ commit }) {
            commit('login');
        },
        //Abmelden
        performLogout({ commit }) {
            commit('logout');
        }
    },
    getters: {
        isLoggedIn: state => state.isLoggedIn
    }
});

export default store;
