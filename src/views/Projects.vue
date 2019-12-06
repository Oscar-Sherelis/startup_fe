<template>
  <div class="projects">
    <FilterSection />
    <SortSection />
    <Project />
    <div class="projects-container">
      <!-- maybe can start from 1 https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_slice_array -->
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
      <span>{{ page }} of {{ allPages }}</span>
      <button @click="nextPage()">
        <v-icon name="arrow-right"></v-icon>
      </button>
    </div>
    <div class="per-page">
      <select  @change="takeOptionValue($event)">
        <option selected :value="5">5</option>
        <option :value="10">10</option>
      </select>
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
 * Pagination not working properly
 * model when click on project from main page, show all project data
 * sort DONE
 * filter
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
      page: 1, // default page 1
      allPages: this.$store.state.projectModule.projects.length,
      per: 5
    }
  },
  props: {
    size: {
      type: Number,
      required: false,
      default: 3
    }
  },
  methods: {
    nextPage () {
      if ((this.size * this.page) < this.$store.state.projectModule.projects.length) {
        this.page++
      } else if (((this.size * this.page) - this.$store.state.projectModule.projects.length) < this.size) {
        this.page++
      }
    },
    prevPage () {
      if (this.page > 1) { this.page-- }
    },
    takeOptionValue: (event) => {
      console.log(event.target.value)
      // this.filterValues.push({ objectProperty: dataProperty })
    },
    // pageCount () {
    //   let arrayLenght, s
    //   arrayLenght = this.$store.state.projectModule.projects.length
    //   s = this.size
    //   return Math.ceil(arrayLenght / s)
    // },
    // paginatedData () {
    //   const start = this.page * this.size
    //   let end
    //   end = start + this.size
    //   return this.$store.state.projectModule.projects.slice(start, end)
    // },
    // numberOfPages () {
    //   if (this.allPages % this.size < this.size && this.allPages % this.size !== 0) {
    //     while (this.allPages % this.size !== 0) {
    //       this.allPages++
    //     }
    //     this.allPages = this.allPages / this.size
    //     return this.allPages
    //   }
    // },
    // end of pagination
    showModal (modalName) {
      this.$modal.show(modalName)
    }
  },
  mounted () {
    this.$store.dispatch('COLLECT_PROJECTS')
    // this.pageCount()
    // this.numberOfPages()
    // console.log(this.methods) shows undefined
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
