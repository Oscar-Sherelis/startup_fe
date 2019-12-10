import axios from 'axios'

export const projectModule = {
  state: {
    project: [],
    projects: [],
    userProjects: [],
    // pagination
    perPage: 5,
    onPage: 0,
    allPages: ''
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
    SET_PER_PAGE: (state, payload) => {
      state.perPage = payload
    },
    SET_PAGE: (state, payload) => {
      state.page = payload
    },
    SET_NUMBER_OF_PAGES: (state, payload) => {
      state.allPages = payload
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
    COLLECT_PROJECT: async (context, payload) => {
      const res = await axios.get('http://localhost:5000/project/' + payload)
      context.commit('SET_PROJECT', res.data.project)
    },
    COLLECT_PROJECTS: async (context, payload) => {
      // make 2 sets for PER and PAGE
      // and make params in front-end mount first from left per page second page number
      const res = await axios.get('http://localhost:5000/projects/' + payload)
      context.commit('SET_PROJECTS', res.data.projects)
      context.commit('SET_NUMBER_OF_PAGES', res.data.count)
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
