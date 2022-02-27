<template>
  <main>
    <div id="services">
      <h1>De la simple idée jusqu'au produit final</h1>
      <p>Je propose des services qui contribuent au succès de votre entreprise. Vous en ressortirez avec un design singulier et une expérience utilisateur unique.</p>
      <div class="service-1">
        <div class="service-1-1">
          <h2>Recherche d'identité visuelle</h2>
          <p>Identifions ensemble la façon dont vous voulez être vu par vos clients. Imaginons ensemble votre logo et votre harmonie colorée. La cohérence de l'identité visuelle garantie la cohérence de votre image.</p>
          <router-link to="/contact">Entrons en contact</router-link>
        </div>
        <div class="service-1-2">
          <img src="@/assets/images/icones/services_rouge.svg" alt="">
          <img src="@/assets/images/icones/services_tiret_bleu.svg" alt="">
          <img src="@/assets/images/img/services_illustration_1.png" alt="">
        </div>
      </div>
      <div class="service-2">
        <div class="service-2-1">
          <h2>Maquettage graphique</h2>
          <p>Design de maquettes responsive avec une conception ergonomique et une navigation pratique qui vous correspondent. Ainsi, nous chercherons ensemble un design qui vous plaît.</p>
          <router-link to="/contact">Entrons en contact</router-link>
        </div>
        <div class="service-2-2">
          <img src="@/assets/images/icones/services_jaune.svg" alt="">
          <img src="@/assets/images/icones/services_tiret_rouge.svg" alt="">
          <img src="@/assets/images/img/services_illustration_2.png" alt="">
        </div>
      </div>
      <div class="service-3">
        <div class="service-3-1">
          <h2>Intégration Front End</h2>
          <p>Une fois que le maquettage est terminé et validé, j'intégrerai notre design en responsive. C'est une intégration front-end HTML/CSS complète pour une flexibilité accrue. Même si vous avez déjà un design, je pourrai l'intégrer.</p>
          <router-link to="/contact">Entrons en contact</router-link>
        </div>
        <div class="service-3-2">
          <img src="@/assets/images/icones/services_rouge.svg" alt="">
          <img src="@/assets/images/icones/services_tiret_bleu.svg" alt="">
          <img src="@/assets/images/img/services_illustration_3.png" alt="">
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Services"
}
</script>

<style scoped lang="less">
@import "/src/assets/styles/styles.less";

main {
  #services {
    text-align: center;
    h1 {
      margin: 50px 0 15px;
      @media screen and (min-width: 800px) {
        margin: 50px 380px 20px;
      }
      @media screen and (min-width: 1600px) {
        margin-top: 60px;
      }
    }
    p {
      margin: 0 21px;
      @media screen and (min-width: 800px) {
        margin: 0 360px;
      }
    }
    .service-1 {
      margin-top: 74px;
      @media screen and (min-width: 800px) {
        display: flex;
        text-align: left;
        margin-top: 97px;
      }
      .service-1-1 {
        @media screen and (min-width: 800px) {
          position: relative;
          width: 50%;
          margin-left: 106px;
          margin-right: 106px;
          margin-top: 105px;
        }
        h2 {
          margin: 0 0 26px;
          @media screen and (min-width: 800px) {
            margin-right: 100px;
            margin-bottom: 34px;
          }
        }
        p {
          margin-bottom: 37px;
          @media screen and (min-width: 800px) {
            margin: 0 0 43.5px;
          }
        }
        a {
          font-family: Mukta, sans-serif;
          font-size: 16px;
          color: white;
          background-color: #4E686D;
          text-decoration: none;
          padding: 11px 104px;
          border-radius: 9px;
          @media screen and (min-width: 800px) {
            padding: 10px 29px;
          }
        }
      }
      .service-1-2 {
        position: relative;
        background-color: #B57243;
        width: 100%;
        height: 285px;
        margin-top: 55px;
        @media screen and (min-width: 800px) {
          width: 75%;
          height: 522px;
          margin-top: 0;
        }
        img {
          position: absolute;
          &:first-child {
            width: auto;
            height: 199px;
            bottom: 0;
            right: 0;
            @media screen and (min-width: 800px) {
              height: 185px;
            }
          }
          &:nth-child(2) {
            width: 98px;
            height: auto;
            top: 16px;
            left: 16px;
            @media screen and (min-width: 800px) {
              width: 186px;
              top: 37px;
              right: 31px;
              left: unset;
            }
          }
          &:last-child {
            width: 308px;
            height: auto;
            top: 16px;
            left: 34px;
            @media screen and (min-width: 800px) {
              width: 452px;
              top: 75px;
              left: -66px;
            }
          }
        }
      }
    }
    .service-2 {
      margin-top: 45px;
      @media screen and (min-width: 800px) {
        display: flex;
        flex-wrap: wrap-reverse;
        flex-direction: row-reverse;
        margin-top: 0;
        text-align: left;
      }
      .service-2-1 {
        @media screen and (min-width: 800px) {
          position: relative;
          width: 30vw;
          padding: 102px 75px 0 137px;
        }
        h2 {
          margin: 0 0 26px;
          @media screen and (min-width: 800px) {
            margin-right: 100px;
            margin-bottom: 34px;
          }
        }
        p {
          margin-bottom: 37px;
          @media screen and (min-width: 800px) {
            margin: 0 0 43.5px;
          }
        }
        a {
          font-family: Mukta, sans-serif;
          font-size: 16px;
          color: white;
          background-color: #4E686D;
          text-decoration: none;
          padding: 11px 104px;
          border-radius: 9px;
        }
      }
      .service-2-2 {
        position: relative;
        background-color: #A54B29;
        width: 100%;
        height: 285px;
        margin-top: 55px;
        @media screen and (min-width: 800px) {
          width: 50vw;
          height: 522px;
          margin-top: 0;
        }
        img {
          position: absolute;
          &:first-child {
            width: auto;
            height: 199px;
            bottom: 0;
            left: 0;
          }
          &:nth-child(2) {
            width: 98px;
            height: auto;
            top: 16px;
            right: 16px;
          }
          &:last-child {
            width: 308px;
            height: auto;
            top: 16px;
            right: 34px;
          }
        }
      }
    }
    .service-3 {
      margin-top: 45px;
      margin-bottom: 50px;
      .service-3-1 {
        h2 {
          margin: 0 0 26px;
        }
        p {
          margin-bottom: 37px;
        }
        a {
          font-family: Mukta, sans-serif;
          font-size: 16px;
          color: white;
          background-color: #4E686D;
          text-decoration: none;
          padding: 11px 104px;
          border-radius: 9px;
        }
      }
      .service-3-2 {
        position: relative;
        background-color: #B89558;
        width: 100%;
        height: 285px;
        margin-top: 55px;
        img {
          position: absolute;
          &:first-child {
            width: auto;
            height: 199px;
            bottom: 0;
            right: 0;
          }
          &:nth-child(2) {
            width: 98px;
            height: auto;
            top: 16px;
            left: 16px;
          }
          &:last-child {
            width: 308px;
            height: auto;
            top: 16px;
            left: 34px;
          }
        }
      }
    }
  }
}
</style>
