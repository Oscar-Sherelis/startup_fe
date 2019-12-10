<template>
  <div class="projects">
    <FilterSection />
    <SortSection />
    <Project />
    <div class="projects-container">
      <div class="project" v-for="project of this.$store.state.projectModule.projects" :key="project._id" @click.prevent="$store.dispatch('COLLECT_PROJECT', project._id), showModal('project-modal')">
        <div class="project-photo"></div>
        <div class="description">
          <p class="project-area"><span>{{ project.projectArea }}</span></p>
          <h2>{{ project.projectName}}</h2>
          <p class="bold">Short description:</p>
          <p>{{ project.projectShortDescription }}</p>
          <p class="bold">Professions required:</p>
          <ul>
            <li v-for="profession of project.professionalsNeeded" :key="profession.id">{{ profession }}</li>
          </ul>
          <div class="location">
            <v-icon name="map-pin"></v-icon>
            <p>{{ project.projectLocation}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="buttons">
      <button @click="prevPage()">
        <v-icon name="arrow-left"></v-icon>
      </button>
      <span>{{ page + 1 }} of {{  Math.ceil(this.$store.state.projectModule.allPages / this.$store.state.projectModule.perPage) }}</span>
      <button @click="nextPage()">
        <v-icon name="arrow-right"></v-icon>
      </button>
    </div>
    <div class="per-page">
      <select v-model="per" @change="setPerPage()">
        <option selected>5</option>
        <option>10</option>
      </select>
      <h1>{{ }}</h1>
    </div>
  </div>
</template>
<script>
// cannot use Filter, because not works
import FilterSection from '../components/FilterSection.vue'
import SortSection from '../components/SortSection.vue'
import Project from '../components/modals/Project.vue'
// Make:
/**
 * Pagination working not properly, but good
 * model when click on project from main page, show all project data
 * sort DONE
 * filter
 * delete done
 * add logeined page make, edit, delete projects
 *
 * Optional:
 * Make mobile
 * https://stackoverflow.com/questions/48515023/display-different-vuejs-components-for-mobile-browsers/54617885
 */
export default {
  name: 'projects',
  components: {
    FilterSection,
    SortSection,
    Project
  },
  data () {
    return {
      page: 0, // default page 0
      per: 5, // show projects in one page
      countedPages: Math.ceil(this.$store.state.projectModule.allPages / this.$store.state.projectModule.perPage)
    }
  },
  methods: {
    nextPage () {
      if ((this.page + 1) < (this.countedPages)) {
        this.page++
        this.$store.commit('SET_PAGE', this.page)
        this.$store.dispatch('COLLECT_PROJECTS', this.$store.state.projectModule.perPage + '/' + this.$store.state.projectModule.page)
      }
    },
    prevPage () {
      if (this.page > 0) {
        this.page--
        this.$store.commit('SET_PAGE', this.page)
        this.$store.dispatch('COLLECT_PROJECTS', this.$store.state.projectModule.perPage + '/' + this.$store.state.projectModule.page)
      }
    },
    setPerPage () {
      this.$store.commit('SET_PER_PAGE', this.per)
      this.$store.dispatch('COLLECT_PROJECTS', this.$store.state.projectModule.perPage + '/' + this.$store.state.projectModule.page)
    },
    // end of pagination
    showModal (modalName) {
      this.$modal.show(modalName)
    }
  }
}
</script>
<style scoped>
  .projects-container {
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto auto auto;
  }
  .project {
    border: 2px solid pink;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .project:hover {
    cursor: pointer;
  }
  .project:nth-child(3n+3) {
    margin-right: 0;
  }
  .project-photo {
    height: 100px;
    background-color: rgb(7, 32, 61);
  }
  .description {
    padding: 10px 20px;
  }
  .project-area {
    margin-top: -20px;
  }
  span {
    background-color: #fff;
    padding: 5px;
  }
  .bold {
    font-weight: bold;
  }
  .location {
    display: flex;
    align-items: center;
  }
  .icon {
    height: 25px;
  }
  .buttons {
    text-align: center;
  }
  .buttons button {
    background-color: #fff;
    border: none;
  }
  .per-page {
    text-align: center;
  }
</style>
