import Vue from 'vue'
// import Vuex from 'vuex'
import Vuex from '../../src/index'

Vue.use(Vuex) // 自动调用VUEX暴露的install函数
// window.Vue = Vue;

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  count: 0,
  age: 1,
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  increment(state) {
    state.count++
  },
  decrement(state) {
    state.count--
  }
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }
}

// getters are functions
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

export default () => {
  return new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules: {
      age: {
        state: {
          value: 19
        }
      }
    }
  })
}










































