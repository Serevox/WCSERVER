<template>
  <div id="app">
    <div class="alert alert-primary" role="alert">
      <h1>&nbsp;{{ msg }}</h1>
      <profile></profile>
      <education></education>
      <skills></skills>
    </div>
  </div>
</template>

<script>
import Profile from "./components/Profile.vue";
import Education from "./components/Education.vue";
import Skills from "./components/Skills.vue";

export default {
  name: "app",
  components: {
    Profile,
    Education,
    Skills,
  },
  data() {
    return {
      msg: "Curriculum Vitae",
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 1%;
  padding-left: 30%;
  padding-right: 30%;
}
h1 {
  font-weight: bold;
  text-align: center;
}
h2,
h3 {
  font-weight: bold;
  font-size: 23px;
}

img {
  width: 25%;
  border-radius: 85px;
  margin-left: 35%;
}
p {
  margin-left: 25px;
  font-size: 18px;
}
</style>
