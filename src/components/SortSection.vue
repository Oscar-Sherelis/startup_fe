<template>
  <div class="sort">
      <h3>Sort {{ this.$store.state.projectModule.projects.length }} projects by:</h3>
      <form>
          <label>Project area
          <input type="radio" name="sort" @click="sortByArea()">
          </label>
          <label>Positions
          <input type="radio" name="sort" @click="sortByPosition()">
          </label>
          <label>Location
          <input type="radio" name="sort" @click="sortByLocation()">
          </label>
      </form>
  </div>
</template>

<script>
export default {
  methods: {
    sortByLocation: function () {
      this.$store.state.projectModule.projects.sort((a, b) => a.projectLocation < b.projectLocation ? -1 : 1)
    },
    sortByArea: function () {
      this.$store.state.projectModule.projects.sort((a, b) => a.projectArea < b.projectArea ? -1 : 1)
    },
    sortByPosition: function () {
      this.$store.state.projectModule.projects.sort((a, b) => a.professionalsNeeded[0] < b.professionalsNeeded[0] ? -1 : 1).professionalsNeeded.sort((a, b) => a < b ? -1 : 1)
    }
  }
}
</script>
<style>
.sort {
    width: 90%;
    margin: 0 auto;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
}
input {
    margin-right: 30px;
}

h3 {
    padding: 0;
    margin: 0 0 5px 0;
}
</style>
