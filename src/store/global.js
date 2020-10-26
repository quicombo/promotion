const state = {
    loading: false,
    isThemeDark: false
};
const mutations = {
    setLoading(state, bool) {
        state.loading = bool;
    },
    CHANGE_THEME: (state) => {
        state.isThemeDark = !state.isThemeDark
    }
};
const getters = {
    getLoading: state => {
        return state.loading;
    },
    THEME(state){
        return state.isThemeDark;
    }
};
const actions = {
    TOGGLE_THEME({commit}) {
        commit('CHANGE_THEME')
    }
}
export default  {
    state,
    getters,
    mutations,
    actions
};

