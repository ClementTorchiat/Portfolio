<template>
  <main>
    <div v-for="projet in liste_projets" :key="projet.id">
      <img :src="projet.better_featured_image.source_url" alt="Projet">
      <h3>{{projet.title.rendered}}</h3>
      <img :src="projet.acf.image_projet_1" alt="Image 1">
      <p>{{projet.acf.texte_projet_1}}</p>
      <a :href="projet.link">Voir</a>
    </div>
  </main>
</template>

<script>

import param from "@/param/param";
import axios from "axios";

export default {
  name: "Portfolio",
  components: {},
  data() {
    return {
      liste_projets: [],
    };
  },
  created() {
    axios.get(param.host + 'projet').then((response) => {
      console.log("Reponse", response);
      this.liste_projets = response.data;
    })
    .catch((error) => console.log(error));
  },
};
</script>

<style scoped>

</style>
