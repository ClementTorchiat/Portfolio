<template>
  <main>
    <div id="a-propos">
      <h1>Enchanté, je suis Clément Torchiat !</h1>
      <p>Je design et intègre des sites uniques pour votre marque.</p>
      <div class="grille-images-a-propos">
        <img src="@/assets/images/img/a_propos_illustration_1.png" alt="">
        <img src="@/assets/images/img/a_propos_illustration_2.png" alt="">
        <img src="@/assets/images/img/a_propos_illustration_3.png" alt="">
        <img src="@/assets/images/img/a_propos_illustration_4.png" alt="">
      </div>
      <div class="texte_a_propos">
        <p>- Résumé</p>
        <h2>Mon objectif : votre succès</h2>
        <p>Je suis actuellement un étudiant en DUT MMI à Montbéliard, formation à travers laquelle j'apprend à créer des identités visuelles, des interfaces graphiques, des maquettes de sites, des sites internet complets et bien plus encore.<br><br>

          Mon objectif est d'apporter des solutions efficaces et concrètes à vos problèmes. Nous travaillerons ensemble afin de trouver un design et un site qui vous correspondent.<br><br>

          Le principal avantage, c'est qu'il n'y a ni intermédiaires, ni agences externes : seulement moi. Vous serez directement en contact avec moi et nous discuterons de votre projet ensemble. J'ai participé entièrement ou en partie à tout le travail que vous voyez ici.<br><br>

          Il est très important pour votre marque d'apparaître avec un design unique et une expérience utilisateur répondant aux besoins de vos clients. Les tarifs du webdesign et de l'intégration web peuvent sembler chers, mais ce que vous obtiendrez en retour en vaudra largement le coût.<br><br>

          Votre succès est mon succès. Je met la priorité sur les besoins de mes clients et non sur les bénéfices.</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Informations"
}
</script>

<style scoped lang="less">
@import "/src/assets/styles/styles.less";

main {
  #a-propos {
    text-align: center;
    margin-bottom: 57px;
    @media screen and (min-width: 800px) {
      margin-bottom: 96px;
    }
    h1 {
      margin: 50px 50px 11px;
      @media screen and (min-width: 800px) {
        margin-bottom: 20px;
      }
      @media screen and (min-width: 1600px) {
        margin-top: 60px;
      }
    }
    p {
      margin: 0;
    }
    .grille-images-a-propos {
      width: 343px;
      margin: 29px auto 32px;
      display: grid;
      grid-template-columns: 170px 157px;
      grid-template-rows: 104px;
      grid-template-areas:
      "area1 area2"
      ". area3";
      grid-gap: 16px;
      @media screen and (min-width: 800px) {
        width: 821px;
        margin: 62px auto 83px;
        grid-template-columns: 264px 244px;
        grid-template-rows: 163px;
        grid-template-areas:
        "area1 area2 area4"
        ". area3 .";
        grid-gap: 25px;
      }
      @media screen and (min-width: 1600px) {
        width: 1250px;
        height: 534px;
        margin: 67px auto 98px;
        grid-template-columns: 402px 372px;
        grid-template-rows: 248px;
        grid-gap: 37px;
      }
      img {
        &:first-child {
          width: 170px;
          height: auto;
          grid-area: area1;
          @media screen and (min-width: 800px) {
            width: 264px;
          }
          @media screen and (min-width: 1600px) {
            width: 402px;
          }
        }
        &:nth-child(2) {
          width: 157px;
          height: auto;
          grid-area: area2;
          @media screen and (min-width: 800px) {
            width: 244px;
          }
          @media screen and (min-width: 1600px) {
            width: 372px;
          }
        }
        &:nth-child(3) {
          width: 157px;
          height: auto;
          grid-area: area3;
          @media screen and (min-width: 800px) {
            width: 244px;
          }
          @media screen and (min-width: 1600px) {
            width: 372px;
          }
        }
        &:last-child {
          display: none;
          grid-area: area4;
          @media screen and (min-width: 800px) {
            display: initial;
            width: 264px;
            height: auto;
          }
          @media screen and (min-width: 1600px) {
            width: 402px;
          }
        }
      }
    }
    .texte_a_propos {
      text-align: left;
      margin: 0 33px;
      @media screen and (min-width: 800px) {
        margin: 0 22vw;
      }
      @media screen and (min-width: 1600px) {
        margin: 0 20vw;
      }
      p {
        &:first-child {
          color: #575757;
          font-family: Source Sans Pro, sans-serif;
          font-size: 18px;
          @media screen and (min-width: 800px) {
            font-size: 22px;
          }
          @media screen and (min-width: 1600px) {
            font-size: 30px;
          }
        }
      }
      h2 {
        margin: 14px 0 32px;
        @media screen and (min-width: 800px) {
          margin: 35px 0;
        }
        @media screen and (min-width: 1600px) {
          margin: 22px 0 49px;
        }
      }
    }
  }
}
</style>
