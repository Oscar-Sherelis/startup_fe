<template>
  <div class="filter">
    <div class="filter-content">
      <div class="filter-form">
          <h2>Find a project</h2>
          <div class="form-wrapper">
            <h3>Select filter criterias</h3>
          <form>
              <select>
                <option selected>Project area</option>
              </select>
              <select>
                <option selected>Available positions</option>
              </select>
              <select>
                <option selected>Location</option>
              </select>
              <button>Filter</button>
          </form>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
// https://stackoverflow.com/questions/43839066/how-can-i-set-selected-option-selected-in-vue-js-2
export default {}
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
