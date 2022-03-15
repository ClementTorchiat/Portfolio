<template>
  <div id="app">
    <heading v-if="!['Home', 'Portfolioeng', 'Serviceseng', 'Testimonials', 'About', 'Get-in-touch', 'Project'].includes($route.name)"></heading>
    <headingeng v-if="!['Accueil', 'Portfolio', 'Services', 'Avis', 'Informations', 'Contact', 'Projet'].includes($route.name)"></headingeng>
    <router-view/>
    <carte v-if="!['Contact', 'Home', 'Portfolioeng', 'Serviceseng', 'Testimonials', 'About', 'Get-in-touch', 'Project'].includes($route.name)"></carte>
    <carteeng v-if="!['Get-in-touch', 'Accueil', 'Portfolio', 'Services', 'Avis', 'Informations', 'Contact', 'Projet'].includes($route.name)"></carteeng>
    <footing v-if="!['Home', 'Portfolioeng', 'Serviceseng', 'Testimonials', 'About', 'Get-in-touch', 'Project'].includes($route.name)"></footing>
    <footingeng v-if="!['Accueil', 'Portfolio', 'Services', 'Avis', 'Informations', 'Contact', 'Projet'].includes($route.name)"></footingeng>
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
import Carteeng from "@/components/carteeng";
import Footingeng from "@/components/footereng";
export default {
  components: {Footingeng, Carteeng, Carte, Footing, Headingeng, Heading}
}
</script>
