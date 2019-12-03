<template>
  <div class="project-info">
    <modal name="project-modal" adaptive=true height="100%">
      <div class="modal-content">
        <div slot="top-right">
          <button id="close" @click="$modal.hide('project-modal')">❌</button>
        </div>
        <div class="project">
          <h2>Project name: {{ $store.state.projectModule.project.projectName }}</h2>
          <p>Description: {{ $store.state.projectModule.project.projectShortDescription }}</p>
          <h3>Job positions</h3>
          <ul>
            <li v-for="profession of $store.state.projectModule.project.professionalsNeeded" :key="profession.id">{{ profession }}</li>
          </ul>
          <p>Other information:</p>
          <p>{{ $store.state.projectModule.project.projectDescription }}</p>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
export default {

}
</script>
<style>
</style>
