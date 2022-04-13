<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <p>
      The incredible works of art and architecture known as the Seven Wonders of
      the Ancient World serve as a testament to human creativity, imagination,
      and pure hard labor.
    </p>
    <hr />
    <h2>What is it about the 7 Wonders of the World</h2>
    <p>
      They are, nevertheless, reminders of humanity's ability for dissension,
      destruction, and possibly embellishment. When ancient writers established
      a list of "seven marvels," it sparked discussion about whose
      accomplishments deserved to be included. The initial list derives from a
      225 B.C. book by Philo of Byzantium. On The Seven Wonders is a book about
      the seven wonders of the world.
    </p>
    <h2>What makes them unique?</h2>
    <p>
      Our world is full of both man-made and natural buildings that are all
      one-of-a-kind. Churches, tombs, temples, monuments, mosques, houses, and
      even cities are examples of man-made structures. These constructions have
      lasted the test of time, and their brilliance continues to astound many
      people. Although there are many around the world, just seven are chosen as
      the best.
    </p>
    <h2>What are the current 7 Wonders of the World</h2>
    <p>
      At present, as chosen by the New7Wonders Foundation, the Seven Wonders of
      the World are the Taj Mahal, the Colosseum, the Chichen Itza, Machu
      Picchu, Christ the Redeemer, Petra, and the Great Wall of China.
    </p>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      title: "The 7 Wonders of the World",
    };
  },
};
</script>
<style scoped>
.about {
  background-color: #c7cbeb;
  margin: -50px 0 0px 0;
  padding: 35px 0 15% 0;
}

h1 {
  text-align: center;
  font-family: "Archivo", sans-serif;
  font-size: 5em;

  margin: 50px 0px 0px 0px;
}
h2 {
  font-size: 3em;
  font-family: "Noto Serif", serif;
  text-align: center;
  margin: 4% 0% 0% 25%;
  width: 50%;
}

p {
  font-family: "PT Sans Caption", sans-serif;
  font-size: 1.2em;
  margin: 0 25% 20px 25%;
  width: 50%;
  text-align: justify;
}
img {
  max-width: 40%;
  margin: 2% 0% 0% 30%;
}
</style>