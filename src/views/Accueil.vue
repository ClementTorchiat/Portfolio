<template>
  <div class="accueil">
    <heading></heading>
    <main>
      <div class="accueil-1">
        <div class="gauche">

        </div>
        <div class="droite">

        </div>
      </div>

      <h1>Test</h1>
      <p>Test</p>
    </main>
    <Carte></Carte>
    <Footing></Footing>
  </div>
</template>

<script>

import Heading from "@/components/header";
import Carte from "@/components/carte";
import Footing from "@/components/footer";
export default {
  name: 'Accueil',
  components: {Heading, Carte, Footing},
}
</script>

<style scoped lang="less">
@import "/src/assets/styles/styles.less";
</style>