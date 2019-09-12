import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loading: false,
        data: {
            biologischeStoffe: null,
            chemischeStoffe: null
        }
    },
    mutations: {
        setLoading(state, b) {
            state.loading = b;
        },
        setBiologischeStoffe(state, s) {
            state.biologischeStoffe = s;
        }
    },
    actions: {
        getHandschuh(url) {
            axios.get(url,)
        }
    },

    getters: {
        loading:
            state => state.loading,
        biologischeStoffe:
            state => {
                if (state.data.biologischeStoffe !== null) {
                    return state.data.biologischeStoffe;
                } else {
                    state.loading = true;
                    axios.get("test/gef_biologisch.json").then(res => {
                        state.data.biologischeStoffe = res.data.items;
                        state.loading = false;
                        return res.data.items;
                    });
                }
            },
        chemischeStoffe:
            state => {
                if (state.data.chemischeStoffe !== null) {
                    return state.data.chemischeStoffe;
                } else {
                    state.loading = true;
                    axios.get("test/giftstoffe.json").then(res => {
                        state.data.chemischeStoffe = res.data.items;
                        state.loading = false;
                        return res.data.items;
                    });
                }
            },
    }
})
