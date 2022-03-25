<template>
  <div id="profile">
    <div class="alert alert-success" role="alert">
      <br />
      <h2 class="alert-heading">{{ msg1 }}</h2>
      <hr />
      <img src="../assets\profilepic.jpg" alt="" />
      <h1>Noie Glenn Manoy</h1>
      <hr />
      <br />

      <h3>{{ msg2 }}</h3>
      <p>
        To work in a company that offers stability,to acquire further knowledge
        and skill in my chosen profession and make a rapid career progress.
      </p>
      <br />

      <h3>{{ msg6 }}</h3>
      <p>Phone: +63 955 046 1830 <br />Email: noiemanoy@gmail.com</p>
      <br />

      <h3>{{ course1 }}</h3>
      <p>Bachelor of Science in Information Technology</p>
      <br />

      <h3>{{ course2 }}</h3>
      <p>Web Development</p>
      <br />

      <h3>{{ msg5 }}</h3>
      <p>Telapayong, Arayat, Pampanga</p>
      <br />

      <h3>{{ msg3 }}</h3>
      <p>August 11, 2001</p>
      <br />

      <h3>{{ msg4 }}</h3>
      <p>Male</p>
    </div>
    <education></education>
    <skills></skills>
  </div>
</template>

<script>
export default {
  name: "profile",

  data() {
    return {
      msg1: "PROFILE",
      msg2: "OBJECTIVE",
      msg3: "DATE OF BIRTH",
      msg4: "GENDER",
      msg5: "ADDRESS",
      msg6: "CONTACT DETAILS",
      course1: "COURSE",
      course2: "SPECIALIZATION",
    };
  },
};
</script>

<style>
</style>
