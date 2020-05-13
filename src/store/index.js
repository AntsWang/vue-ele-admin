import Vue from 'vue';
import vuex from "vuex";
import mutations from './mutations';
import actions from './actions';
import login from './modules/login';

Vue.use(vuex);
const state = { token: '' }

export default new vuex.Store({
    state,
    mutations,
    actions,
    modules:{
        login
    }
})