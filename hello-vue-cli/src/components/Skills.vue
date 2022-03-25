<template>
  <div id="skills">
    <div class="alert alert-info" role="alert">
      <br />
      <h2>{{ info }}</h2>
      <hr />
      <br />
      <h2>{{ training }}</h2>
      <p>
        Stotsenberg Medical Center <br />Front Desk Assistant <br />March 2020
      </p>
      <br />

      <h2>{{ seminar }}</h2>
      <p>
        Web Responsiveness: The Basics Of Building A Responsive Layout Using
        HTML And CSS <br />Code Geeks <br />November 2021
      </p>
      <p>
        Building Blocks Of The Web: Introduction To HTML And CSS <br />Code Geek
        <br />September 2020
      </p>

      <p>
        Listen, Learn, And Adapt: Recognizing The Qualities And Experiences Of
        Becoming A Great Leader <br />HAU SHTM Tourism Management <br />June
        2021
      </p>
      <p>
        Deep Learning And Its Application To Engineering And Technology
        <br />HAU Spell, HAU SEA, And ICpEP Region Iii <br />June 2021
      </p>
      <p>
        Introduction To Amazon Web Services <br />Trend Micro Secure Learning
        <br />December 2021
      </p>
      <p>
        Google Cloud Platform Foundations <br />Trend Micro Secure Learning
        <br />July 2021
      </p>

      <h2>{{ pl }}</h2>
      <p>Python <br />Java</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "skills",
  data() {
    return {
      info: "SKILLS",
      training: "TRAINING",
      seminar: "SEMINARS",
      pl: "PROGRAMMING LANGUAGES",
    };
  },
};
</script>
<style>
</style>