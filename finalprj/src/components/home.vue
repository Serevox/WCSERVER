<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <section>
      The New 7 Wonders of the World campaign began in 2000 with the goal of
      selecting seven new Wonders of the World from a list of 200 current
      monuments. The New 7 Wonders Foundation (N7W) in Zurich, Switzerland,
      organized the popularity poll, which was chaired by Canadian-Swiss Bernard
      Weber and conducted by free Web-based voting and minor amounts of
      telephone voting, with winners announced on July 7, 2007 in Lisbon, at
      Estádio da Luz. Because it was feasible for participants to vote several
      times, the poll was deemed unscientific. New 7 Wonders Foundation
      conducted "the largest poll on record," according to John Zogby, founder
      and current President/CEO of Zogby International, a polling firm based in
      Utica, New York.
    </section>

    <iframe
      width="1268"
      height="713"
      src="https://www.youtube.com/embed/W6AWgDrolB4"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      title: "Home",
    };
  },
};
</script>
<style scope>
.home {
  background-color: #c7cbeb;
  margin-top: -50px;
  padding: 35px;
}
h1 {
  text-align: center;
  font-family: "Archivo", sans-serif;
  font-size: 5em;

  margin: 50px 0px 0px 0px;
}
iframe {
  width: 60%;
  margin: 0px 0px 10px 20%;
  border-radius: 15px;
}
section {
  text-align: justify;
  margin: 0 15% 20px 23%;
  width: 50%;
  font-family: "PT Sans Caption", sans-serif;
  font-size: 1.2em;
}
</style>