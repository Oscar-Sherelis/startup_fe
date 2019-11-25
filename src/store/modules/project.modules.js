import axios from 'axios'

export const projectModule = {
  state: {
    projects: [],
    message: '',
    addMessage: ''
  },
  getters: {},
  mutations: {
    SET_PROJECTS: (state, payload) => {
      state.projects = payload
    },

    // set success or error messages for HelloWorld.vue
    SET_MESSAGE: (state, payload) => {
      state.message = payload
    },
    // set success or error  message for About.vue
    SET_ADD_MESSAGE: (state, payload) => {
      state.addMessage = payload
    }
  },
  actions: {
    COLLECT_PROJECTS: async context => {
      const res = await axios.get('http://localhost:5000/projects')
      context.commit('SET_PROJECTS', res.data.projects)
    }
  }
}
