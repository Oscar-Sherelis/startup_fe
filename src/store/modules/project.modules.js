import axios from 'axios'

export const projectModule = {
  state: {
    project: [],
    projects: [],
    userProjects: []
    // message: '',
    // addMessage: ''
  },
  getters: {},
  mutations: {
    SET_PROJECT: (state, payload) => {
      state.project = payload
    },
    SET_PROJECTS: (state, payload) => {
      state.projects = payload
    },
    SET_USER_PROJECTS: (state, payload) => {
      state.userProjects = payload
    },

    // Pagination

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
    COLLECT_PROJECT: async (context, payload) => {
      const res = await axios.get('http://localhost:5000/project/' + payload)
      context.commit('SET_PROJECT', res.data.project)
    },
    COLLECT_PROJECTS: async (context, payload) => {
      // make 2 sets for PER and PAGE
      // and make params in front-end mount
      const res = await axios.get('http://localhost:5000/projects/2/2')
      // const res = await axios.get('http://localhost:5000/projects/5/1')
      context.commit('SET_PROJECTS', res.data.projects)
    },
    COLLECT_USER_PROJECTS: async (context, payload) => {
      // take user id after auth and insert
      const res = await axios.get('http://localhost:5000/user-projects/' + payload)
      context.commit('SET_USER_PROJECTS', res.data.userProjects)
    },
    DELETE_PROJECT: async (context, payload) => {
      await axios.delete('http://localhost:5000/delete-project/' + payload)
    }
  }
}
