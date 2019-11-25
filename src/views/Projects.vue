<template>
  <div class="projects">
    <button @click.prevent="$store.dispatch('COLLECT_PROJECTS')">Show projects</button>
    <div class="projects-container" v-for="project of $store.state.projectModule.projects" :key="project._id">
      <div class="project">
        <div class="project-photo"></div>
        <div class="description">
          <span class="project-area">{{ project.projectArea }}</span>
          <h2>{{ project.projectName}}</h2>
          <p>{{ project.projectShortDescription }}</p>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .project-photo {
    height: 50px;
  }
  .description {
    padding: 10px;
  }
</style>
