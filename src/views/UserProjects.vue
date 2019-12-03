<template>
<!-- *add modal as in projects -->
<div class="user-projects projects-container">
    <div class="project" v-for="project of $store.state.projectModule.userProjects" :key="project._id">
        <div class="project-photo">
            <div class="edit-buttons">
                <span>Edit</span>
                <span @click.prevent="$store.dispatch('DELETE_PROJECT', project._id)">Delete</span>
            </div>
        </div>
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
</template>
<script>
export default {
  mounted () {
    this.$store.dispatch('COLLECT_USER_PROJECTS', '5dd79f0d55a4e8125025f2be')
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
  .edit-buttons span:hover {
    cursor: pointer;
    text-decoration: underline;
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
  .edit-buttons {
      text-align: right;
  }
</style>
