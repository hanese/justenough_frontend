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
            document.cookie = 'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
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
