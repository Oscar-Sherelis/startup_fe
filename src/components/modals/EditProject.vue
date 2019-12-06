<template>
  <div class="project-info edit-project">
    <modal name="edit-project-modal" adaptive=true height="100%" width="70%">
      <div class="modal-content">
        <div slot="top-right">
          <button id="close" @click="$modal.hide('edit-project-modal')">❌</button>
        </div>
        <div class="project">
          <form>
            <h2>Project name: </h2>
            <input type="text" v-model="$store.state.projectModule.project.projectName">
            <p>Description:</p>
            <input type="text" v-model="$store.state.projectModule.project.projectShortDescription">
            <h3>Job positions</h3>
                <input v-for="profession of $store.state.projectModule.project.professionalsNeeded" :key="profession.id" :value="profession">
            <p>Other information:</p>
            <textarea type="text" v-model="$store.state.projectModule.project.projectDescription"></textarea>
            <p>Project location: </p>
            <select @change="takeOptionValue(selectedArea, projectArea, $event)">
              <option selected>{{ $store.state.projectModule.project.projectLocation }}</option>
              <option v-for="location of locations" :key="location.id" :value="selectedLocation = location">{{ location }}</option>
            </select>
            <button>Save changes</button>
          </form>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      some: String,
      locations: []
    }
  },
  methods: {
    distinctLocations: function (mainArr) {
      this.locations = [...new Set(mainArr.map(x => x.projectLocation))]
    }
  },
  mounted () {
    this.distinctLocations(this.$store.state.projectModule.projects)
  }
}
</script>

<style scoped>
    form {
        width: 800px;
        box-sizing: border-box;
        text-align: center;
    }
    textarea,
    input {
         padding: 10px;
        min-width: 80%;
        max-width: 80%;
    }
</style>
