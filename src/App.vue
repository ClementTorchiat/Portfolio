<template>
  <div id="app">
    <heading v-if="![''].includes($route.name)"></heading>
    <headingeng v-if="!['Accueil', 'Portfolio', 'Services', 'Avis', 'Informations', 'Contact'].includes($route.name)"></headingeng>
    <router-view/>
    <carte v-if="!['Portfolio', 'Contact'].includes($route.name)"></carte>
    <footing v-if="![''].includes($route.name)"></footing>
  </div>
</template>

<style lang="css">
body {
  background-color: #FAFAFA;
}
</style>
<script>
import Heading from "@/components/header";
import Headingeng from "@/components/headereng";
import Footing from "@/components/footer";
import Carte from "@/components/carte";
export default {
  components: {Carte, Footing, Headingeng, Heading}
}
</script>
