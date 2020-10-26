const state = {
    loading: false,
    darkTheme: false
};
const mutations = {
    setLoading(state, bool) {
        state.loading = bool;
    },
    setTheme(state, bool) {
        state.darkTheme = bool
    }
};
const getters = {
    getLoading: state => {
        return state.loading;
    },
    getTheme: state => {
        return state.darkTheme
    }
};
export default  {
    state,
    getters,
    mutations
};

