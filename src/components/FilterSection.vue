<template>
  <div class="filter">
    <div class="filter-content">
      <div class="filter-form">
          <h2>Find a project</h2>
          <div class="form-wrapper">
            <h3>Select filter criterias</h3>
          <form>
              <select @change="takeOptionValue($event)">
                <option selected>Project area</option>
                <option v-for="area of areas" :key="area.id" :value="area">{{ area }}</option>
              </select>
              <select @change="takeOptionValue(selectedProfession, $event)">
                <option selected>Available positions</option>
                <option v-for="profession of professions" :key="profession.id" :value="selectedProfession = profession">{{ profession }}</option>
              </select>
              <select @change="takeOptionValue(selectedLocation, $event)">
                <option selected>Location</option>
                <option v-for="location of locations" :key="location.id" :value="selectedLocation = location">{{ location }}</option>
              </select>
              <button @click.prevent="runFilter()">Filter</button>
          </form>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
// https://stackoverflow.com/questions/43839066/how-can-i-set-selected-option-selected-in-vue-js-2
export default {
  data () {
    return {
      areas: [],
      professions: [],
      locations: [],

      selectedArea: '',
      selectedProfession: '',
      selectedLocation: '',

      filterValues: []
    }
  },
  // distinct in js: https://codeburst.io/javascript-array-distinct-5edc93501dc4
  methods: {
    distinctAreas: function (mainArr) {
      this.areas = [...new Set(mainArr.map(x => x.projectArea))]
    },
    distinctProfessions: function (mainArr) {
      let dataHolder = []
      mainArr.forEach(element => {
        dataHolder.push(...new Set(element.professionalsNeeded))
      })
      this.professions = [...new Set(dataHolder)]
    },
    distinctLocations: function (mainArr) {
      this.locations = [...new Set(mainArr.map(x => x.projectLocation))]
    },
    takeOptionValue: (event) => {
      // why cannot see areas???
      this.areas.forEach(value => {
        if (value === event.target.value) {
          this.$store.state.projectModule.projects = this.$store.state.projectModule.projects.filter((item) => { item = event.target.value })
        }
      })
      // this.filterValues.push({ objectProperty: dataProperty })
    },
    runFilter: function () {
      console.log(this.selectedArea)
      // need to change with
      // https://gist.github.com/stomg7969/e4674d684271394fb049ff7a041cc5ed
      if (this.filterValues.length > 0) {
        // console.log(this.filterValues)
        this.$store.state.projectModule.projects = this.$store.state.projectModule.projects.filter((item) => {
          for (let key in this.filterValues) {
            if (item.key === undefined || item.key !== this.filterValues.key) {
              return false
            }
            // console.log('item: ' + item.key)
            console.log(key)
          }
          return true
        })
      }
      // console.log(this.filterValues)
      // console.log(this.$store.state.projectModule.projects)
    }
  },
  /**
   * Not working in firefox
   * https://stackoverflow.com/questions/46120360/vuejs-event-not-working-in-firefox-fine-in-chrome
   */
  mounted () {
    this.distinctAreas(this.$store.state.projectModule.projects)
    this.distinctProfessions(this.$store.state.projectModule.projects)
    this.distinctLocations(this.$store.state.projectModule.projects)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.filter-content {
    height: 40vh;
    background-color: silver;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.filter-form {
  width: 90%;
}
.form-wrapper {
  background-color: #fff;
  padding: 15px;
  border-radius: 5px;
}
form {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
form button {
  color: #07203d;
  border: 2px solid #07203d;
  background-color: #fff;
  border-radius: 15px;
  padding: 5px 30px;
}
select {
  padding: 10px;
  width: 30%;
}
</style>
