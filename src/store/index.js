import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api/job.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        jobs: [],
        languages: []
    },
    mutations: {
        setJobs(state, jobs) {
            state.jobs = jobs;
        },
        setLang(state, lang) {
            state.languages.push(lang);
        },
        deleteLang(state, lang) {
            state.languages = state.languages.filter(x => x !== lang);
        },
        clearLangState(state) {
            state.languages = [];
        }
    },
    actions: {
        getJobs({ commit }) {
            return new Promise((resolve) => {
                api.getJobs().then(jobs => {
                    commit('setJobs', jobs);
                    resolve();
                });
            });
        },
        addLang(context, lang) {
            if (!context.state.languages.some(x => x === lang)) {
                context.commit('setLang', lang);
            }
        },
        removeLang({ commit }, lang) {
            commit('deleteLang', lang);
        },
        clearLang({ commit }) {
            commit('clearLangState');
        }
    },
    getters: {
        getJobsFilters(state) {
            const languages = state.languages;
            if(languages.length > 0){
                let jobsFilter = [];
                languages.forEach(lang => {
                    const search = state.jobs.filter(j => j.languages.includes(lang));
                    jobsFilter = [...jobsFilter, ...search];
              
                })
                return new Set(jobsFilter);
            } else {
                return state.jobs;
            }
        }
    },
    modules: {

    }
})