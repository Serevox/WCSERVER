<template>
  <div id="education">
    <div class="alert alert-secondary" role="alert">
      <br />
      <h2>{{ Info }}</h2>
      <hr />
      <h3>{{ level4 }}</h3>
      <p>
        Holy Angel University (HAU)<br />
        #1 Holy Angel St, Angeles, 2009 Pampanga<br />
        School Year: 2020 - Present
      </p>
      <br />

      <h3>{{ level3 }}</h3>
      <p>
        Systems Plus College Foundation (SPCF)<br />
        Balibago, Angeles, Pampanga<br />
        School Year: 2020 - 2018
      </p>
      <br />

      <h3>{{ level2 }}</h3>
      <p>
        Magalang Christian Ecumenical School INC.<br />
        Marbea Subd., Sta. Cruz, 2011 Magalang, Pampanga<br />
        School Year: 2018 - 2014
      </p>
      <br />

      <h3>{{ level1 }}</h3>
      <p>
        Telapayong Elementary School <br />
        Purok 2, Telapayong, Arayat, Pampanga<br />
        School Year: 2014 - 2008
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "education",
  data() {
    return {
      Info: "EDUCATION",
      level1: "ELEMENTARY",
      level2: "JUNIOR HIGHSCHOOL",
      level3: "SENIOR HIGHSCHOOL",
      level4: "COLLEGE",
    };
  },
};
</script>

<style>
</style>
