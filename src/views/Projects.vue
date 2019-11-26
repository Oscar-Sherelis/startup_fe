<template>
  <div class="projects">
    <Filter />
    <div class="projects-container">
    <div class="project" v-for="project of $store.state.projectModule.projects" :key="project._id">
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
  </div>
</template>
<script>
import Filter from '@/components/Filter.vue'
// Make:
/**
 * Pagination
 * model when click on project from main page, show all project data
 * make sort and filter
 *
 * Optional:
 * Make mobile
 */
export default {
  components: {
    Filter
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
    background-color: silver;
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
    height: 20px;
  }
</style>
