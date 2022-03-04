<template>
  <div>
    <p>salur</p>
  </div>
</template>

<script>
import axios from "axios";
import param from "@/param/param.js";

export default {
  name: "Avis",
  data() {
    return {
      liste_avis: [],
    };
  },
  created() {
    axios.get(param.host + 'avis').then((response) => {
      console.log("Reponse", response);
      this.liste_avis = response.data;
    })
        .catch((error) => console.log(error));
  },
}
</script>

<style scoped>

</style>
