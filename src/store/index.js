import Vuex from 'vuex'
import Vue from 'vue'
import Axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

// Load Vuex
Vue.use(Vuex)

// Create App defaultState
const getDefaultState = () => {
    return {
        token: '',
        user: {}
    };
};

// Create Store
export default new Vuex.Store({
    strict: true,
    plugins: [createPersistedState()],
    state: getDefaultState(),
    getters: {
        isLoggedIn: state => {
            return state.token;
        },
        getUser: state => {
            return state.user;
        }
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_USER: (state, user) => {
            state.user = user;
        },
        RESET: state => {
            Object.assign(state, getDefaultState());
        }
    },
    actions: {
        login: ({ commit }, { token, user }) => {
            commit('SET_TOKEN', token);
            commit('SET_USER', user);
            // set auth header
            Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        },
        logout: ({ commit }) => {
            commit('RESET', '');
        }
    }
});