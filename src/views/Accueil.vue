<template>
  <main>
    <div id="accueil-1">
      <div class="gauche">
        <p>- Étudiant</p>
        <h1>Développeur de sites uniques pour votre entreprise</h1>
        <p>Transformez votre entreprise en une expérience utilisateur impressionnante et un design unique. Utilisez mes compétences pour y parvenir.</p>
        <div class="boutons-accueil-1">
          <router-link to="contact">Entrons en contact</router-link>
          <router-link to="portfolio">Voir mon travail</router-link>
        </div>
      </div>
      <div class="droite">
        <img src="@/assets/images/icones/accueil_rouge.svg" alt="">
        <img src="@/assets/images/icones/accueil_jaune.svg" alt="">
        <img src="@/assets/images/icones/accueil_bleu.svg" alt="">
        <img src="@/assets/images/icones/accueil_orange.svg" alt="">
        <img src="@/assets/images/icones/accueil_tiret_bleu.svg" alt="">
        <img src="@/assets/images/img/clement_torchiat.png" alt="">
        <div class="infos-accueil-1">
          <img src="@/assets/images/icones/icone_ux.svg" alt="">
          <img src="@/assets/images/icones/icone_dev.svg" alt="">
          <img src="@/assets/images/icones/icone_dut.svg" alt="">
        </div>
      </div>
    </div>
    <div id="accueil-2">
      <h2>Des solutions à tous vos problèmes</h2>
      <p>Je réalise divers travaux qui s'adaptent à votre projet.</p>
      <div class="icones-accueil-2">
        <div class="services-accueil-2">
          <img src="@/assets/images/icones/icone_identite_visuelle.svg" alt="Identité Visuelle">
          <h3>Identité visuelle</h3>
          <p>Création de votre logo et de votre harmonie colorée. La cohérence de l'identité visuelle garantie la cohérence de votre image.</p>
          <router-link to="/services">Découvrir</router-link>
        </div>
        <div class="services-accueil-2">
          <img src="@/assets/images/icones/icone_maquettage_graphique.svg" alt="Maquettage Graphique">
          <h3>Maquettage graphique</h3>
          <p>Design de maquettes responsive avec une conception ergonomique et une navigation pratique qui vous correspondent.</p>
          <router-link to="/services">Découvrir</router-link>
        </div>
        <div class="services-accueil-2">
          <img src="@/assets/images/icones/icone_integration.svg" alt="Intégration">
          <h3>Intégration</h3>
          <p>Intégration front-end de site vitrines et de landing pages en responsive. C'est une intégration HTML/CSS complète pour une flexibilité accrue.</p>
          <router-link to="/services">Découvrir</router-link>
        </div>
      </div>
    </div>
    <div id="accueil-3">
      <h2>Derniers travaux</h2>
      <p>Mes derniers travaux et projets réalisés.</p>
      <div class="projets-accueil-3">
        <div class="derniers-projets-accueil-3" v-for="projet in liste_projets.slice(0,3)" :key="projet.id">
          <img class="image-projet-accueil-3" :src="projet.better_featured_image.source_url" alt="">
          <img class="fond-projet-accueil-3" src="@/assets/images/icones/projet_bord_noir.svg" alt="">
          <h4 class="titre-projet-accueil-3">{{projet.title.rendered}}</h4>
          <a class="bouton-projet-accueil-3" href="">Voir</a>
        </div>
      </div>
      <router-link to="/portfolio">Voir tous mes travaux</router-link>
    </div>
    <div id="accueil-4">
      <h2>Pourquoi travailler avec moi ?</h2>
      <p>Une réponse efficace à vos projets.</p>
      <div class="promo-accueil-4">
        <div class="section-promo-accueil-4">
          <img src="@/assets/images/icones/icone_promo_moins_cher.svg" alt="Moins cher">
          <h3>Moins cher</h3>
          <p>Je suis la solution idéale pour les petites entreprises : j'adapte mon travail à votre budget et à votre objectif.</p>
        </div>
        <div class="section-promo-accueil-4">
          <img src="@/assets/images/icones/icone_promo_echanges.svg" alt="Réactivité des échanges">
          <h3>Réactivité des échanges</h3>
          <p>Je suis à l'écoute de toutes vos demandes et je m'adapte à vos besoins changeants ou non dans les plus brefs délais.</p>
        </div>
        <div class="section-promo-accueil-4">
          <img src="@/assets/images/icones/icone_promo_unique.svg" alt="Unique et qualitatif">
          <h3>Unique et qualitatif</h3>
          <p>Cherchons ensemble une identité graphique et une architecture qui vous correspond et qui correspond aux demandes actuelles du marché.</p>
        </div>
        <div class="section-promo-accueil-4">
          <img src="@/assets/images/icones/icone_promo_intermediaires.svg" alt="Pas d'intermédiaires">
          <h3>Pas d'intermédiaires</h3>
          <p>Vous traitez avec moi et moi seul tout le long du projet : je suis à l'écoute de toutes vos demandes et je répond aussi spontanément que possible.</p>
        </div>
      </div>
      <router-link to="/contact">Entrons en contact</router-link>
    </div>
  </main>
</template>
<script>

import axios from "axios";
import param from "@/param/param";

export default {
  name: 'Accueil',
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
}
</script>

<style scoped lang="less">
@import "/src/assets/styles/styles.less";

main {
  #accueil-1 {
    margin-top: 68px;
    text-align: center;
    @media screen and (min-width: 800px) {
      display: flex;
      margin-top: 0;
      text-align: left;
      width: 100%;
      height: 87.6vh;
    }
    .gauche {
      margin-left: 13px;
      margin-right: 13px;
      @media screen and (min-width: 800px) {
        margin-top: 107px;
        margin-left: 90px;
        padding-right: 9vw;
        margin-right: 0;
        width: 48%;
        height: 60vh;
      }
      @media screen and (min-width: 1600px) {
        margin-top: 100px;
        margin-left: 159px;
        padding-right: 5vw;
      }
      p {
        &:first-child {
          font-family: Source Sans Pro, sans-serif;
          font-size: 18px;
          color: #575757;
          margin-top: 0;
          margin-bottom: 10px;
          @media screen and (min-width: 800px) {
            font-size: 22px;
            margin-bottom: 20px;
          }
          @media screen and (min-width: 1600px) {
            font-size: 30px;
            margin-bottom: 22px;
          }
        }
        &:nth-child(3) {
          margin-top: 10px;
          margin-bottom: 0;
          @media screen and (min-width: 800px) {
            margin-top: 20px;
          }
          @media screen and (min-width: 1600px) {
            margin-top: 22px;
          }
        }
      }
      h1 {
        margin: 0;
      }
      .boutons-accueil-1 {
        display: grid;
        @media screen and (min-width: 800px) {
          display: flex;
          margin-top: 60px;
        }
        @media screen and (min-width: 1600px) {
          margin-top: 44px;
        }
        a {
          &:first-child {
            color: white;
            text-decoration: none;
            background-color: #4E686D;
            font-family: Mukta, sans-serif;
            font-size: 16px;
            padding: 10.5px 103px;
            border-radius: 9px;
            margin-top: 28px;
            white-space: nowrap;
            @media screen and (min-width: 800px) {
              padding: 8px 25px;
              margin-top: 0;
              margin-right: 28px;
              &:hover {
                background-color: #26393D;
              }
              &:active {
                background-color: #63888F;
              }
            }
            @media screen and (min-width: 1600px) {
              font-size: 20px;
              padding: 12px 32px;
              margin-right: 14px;
            }
          }
          &:last-child {
            color: #4E686D;
            text-decoration: none;
            background-color: transparent;
            font-family: Mukta, sans-serif;
            font-size: 16px;
            padding: 10px 103px;
            border-radius: 9px;
            border: #4E686D 1px solid;
            margin-top: 19px;
            white-space: nowrap;
            @media screen and (min-width: 800px) {
              padding: 8px 35px;
              margin-top: 0;
              &:hover {
                background-color: #4E686D;
                color: white;
              }
              &:active {
                background-color: #63888F;
                border: #63888F 1px solid;
              }
            }
            @media screen and (min-width: 1600px) {
              font-size: 20px;
              padding: 12px 32px;
              margin-right: 14px;
            }
          }
        }
      }
    }
    .droite {
      position: relative;
      background-color: #B57243;
      width: 100%;
      height: 418px;
      margin-top: 69px;
      @media screen and (min-width: 800px) {
        margin-top: 0;
        max-width: 45vw;
        transform: translateY(-99px);
        height: 100vh;
      }
      @media screen and (min-width: 1600px) {
        max-width: 50vw;
        transform: translateY(-155px);
      }
      img {
        position: absolute;
        &:first-child {
          left: 0;
          top: 0;
          height: 79px;
          width: auto;
          @media screen and (min-width: 800px) {
            width: 78px;
            height: auto;
          }
          @media screen and (min-width: 1600px) {
            width: auto;
            height: 93px;
          }
        }
        &:nth-child(2) {
          left: 0;
          bottom: 0;
          width: 114px;
          height: auto;
          @media screen and (min-width: 800px) {
            width: 173px;
          }
          @media screen and (min-width: 1600px) {
            width: 293px;
          }
        }
        &:nth-child(3) {
          left: 0;
          bottom: 0;
          width: 36px;
          height: auto;
          @media screen and (min-width: 800px) {
            width: 54px;
          }
          @media screen and (min-width: 1600px) {
            width: 93px;
          }
        }
        &:nth-child(4) {
          top: 0;
          right: 0;
          width: 261px;
          height: auto;
          @media screen and (min-width: 800px) {
            width: 26vw;
          }
          @media screen and (min-width: 1600px) {
            width: 492px;
          }
        }
        &:nth-child(5) {
          top: 27px;
          right: 21px;
          width: 116px;
          height: auto;
          @media screen and (min-width: 800px) {
            top: 17.5px;
            right: 28.5px;
            width: 13.5vw;
          }
          @media screen and (min-width: 1600px) {
            top: 13.5px;
            right: 26.5px;
            width: 258px;
          }
        }
        &:nth-child(6) {
          right: 0;
          bottom: 0;
          width: 267px;
          height: auto;
          @media screen and (min-width: 800px) {
            width: 36vw;
          }
          @media screen and (min-width: 1600px) {
            width: auto;
            height: 100%;
          }
        }
      }
      .infos-accueil-1 {
        img {
          position: absolute;
          width: 162px;
          height: 34px;
          left: 26px;
          @media screen and (min-width: 800px) {
            width: 195px;
            height: auto;
            left: 18px;
          }
          @media screen and (min-width: 1600px) {
            width: 14vw;
            left: 5vw;
          }
          &:first-child {
            top: 115px;
            @media screen and (min-width: 800px) {
              top: 139px;
            }
            @media screen and (min-width: 1600px) {
              top: 12vw;
            }
          }
          &:nth-child(2) {
            top: 166px;
            @media screen and (min-width: 800px) {
              top: 201px;
            }
            @media screen and (min-width: 1600px) {
              top: 16vw;
            }
          }
          &:last-child {
            top: 217px;
            @media screen and (min-width: 800px) {
              top: 262px;
            }
            @media screen and (min-width: 1600px) {
              top: 20vw;
            }
          }
        }
      }
    }
  }
  #accueil-2 {
    text-align: center;
    margin: 38px 40px 0;
    @media screen and (min-width: 800px) {
      margin: 60px 6vw 0;
    }
    @media screen and (min-width: 1600px) {
      margin: 112px 6vw 0;
    }
    h2 {
      margin: 0;
    }
    p {
      font-family: "Mukta Light", sans-serif;
      font-size: 14px;
      margin-top: 4px;
      margin-bottom: 0;
      @media screen and (min-width: 800px) {
        font-size: 16px;
        margin-top: 0;
      }
      @media screen and (min-width: 1600px) {
        font-size: 20px;
      }
    }
    .icones-accueil-2 {
      margin-top: 42px;
      @media screen and (min-width: 800px) {
        display: flex;
        margin-top: 43px;
      }
      @media screen and (min-width: 1600px) {
        margin-top: 96px;
      }
      .services-accueil-2 {
        @media screen and (min-width: 800px) {
          margin: 0 1.4vw 0;
        }
        @media screen and (min-width: 1600px) {
          margin: 0 5.2vw 0;
        }
        &:nth-child(2) {
          margin-top: 52px;
          @media screen and (min-width: 800px) {
            margin-top: 0;
          }
        }
        &:last-child {
          margin-top: 52px;
          @media screen and (min-width: 800px) {
            margin-top: 0;
          }
        }
        img {
          @media screen and (min-width: 800px) {
            width: auto;
            height: 40px;
          }
          @media screen and (min-width: 1600px) {
            height: 60px;
          }
        }
        h3 {
          margin: 14px 0;
          @media screen and (min-width: 800px) {
            margin: 23px 0 15px;
          }
          @media screen and (min-width: 1600px) {
            margin: 20px 0;
          }
        }
        p {
          font-size: 16px;
          font-family: Mukta, sans-serif;
          margin-bottom: 19px;
          margin-top: 0;
          @media screen and (min-width: 800px) {
            font-size: 16px;
            margin-bottom: 23px;
          }
          @media screen and (min-width: 1600px) {
            font-size: 20px;
          }
        }
        a {
          font-size: 16px;
          font-family: "Mukta Medium", sans-serif;
          color: black;
          text-decoration: none;
          &:after {
            content: url("../assets/images/icones/icone_fleche_decouvrir.svg");
            margin-left: 8px;
            @media screen and (min-width: 800px) {
              margin-left: 11px;
            }
          }
          @media screen and (min-width: 800px) {
            &:hover {
              font-weight: bold;
            }
            &:active {
              color: #26393D;
            }
          }
          @media screen and (min-width: 1600px) {
            font-size: 20px;
          }
        }
      }
    }
  }
  #accueil-3 {
    text-align: center;
    margin: 63px 0 0;
    @media screen and (min-width: 800px) {
      margin-top: 78px;
    }
    @media screen and (min-width: 1600px) {
      margin-top: 206px;
    }
    h2 {
      margin: 0;
    }
    p {
      font-family: "Mukta Light", sans-serif;
      font-size: 14px;
      margin-top: 4px;
      margin-bottom: 0;
      @media screen and (min-width: 800px) {
        font-size: 16px;
        margin-top: 0;
      }
      @media screen and (min-width: 1600px) {
        font-size: 20px;
      }
    }
    .projets-accueil-3 {
      align-content: center;
      @media screen and (min-width: 800px) {
        display: flex;
        flex-wrap: wrap;
        margin: 0 100px;
      }
      @media screen and (min-width: 1600px) {
        margin: 0 150px;
      }
      .derniers-projets-accueil-3 {
        border-radius: 20px;
        position: relative;
        max-width: 285px;
        height: 214px;
        margin: 25px auto 0;
        &:last-child {
          margin-bottom: 56px;
          @media screen and (min-width: 800px) {
            margin-bottom: 0;
          }
        }
        @media screen and (min-width: 800px) {
          max-width: 300px;
          width: 300px;
          height: 225px;
          margin: 44px auto 54px;
          &:hover {
            .fond-projet-accueil-3 {
              visibility: visible;
              opacity: 1;
            }
            .titre-projet-accueil-3 {
              visibility: visible;
              opacity: 1;
            }
            .bouton-projet-accueil-3 {
              visibility: visible;
              opacity: 1;
            }
          }
        }
        @media screen and (min-width: 1600px) {
          max-width: 480px;
          width: 480px;
          height: 360px;
          margin: 73px auto 67px;
        }
        .image-projet-accueil-3 {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          margin: auto;
          display: block;
          z-index: 4;
          border-radius: 20px;
        }
        .fond-projet-accueil-3 {
          position: absolute;
          border-radius: 20px;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 5;
          @media screen and (min-width: 800px) {
            visibility: hidden;
            opacity: 0;
            transition: visibility 0s, opacity 0.5s linear;
          }
        }
        .titre-projet-accueil-3 {
          position: absolute;
          bottom: 10px;
          left: 15px;
          z-index: 6;
          margin: 0;
          font-family: Mukta, sans-serif;
          font-weight: normal;
          font-size: 18px;
          color: white;
          @media screen and (min-width: 800px) {
            visibility: hidden;
            opacity: 0;
            transition: visibility 0s, opacity 0.5s linear;
          }
          @media screen and (min-width: 1600px) {
            bottom: 20px;
            left: 28px;
            font-size: 22px;
          }
        }
        .bouton-projet-accueil-3 {
          position: absolute;
          bottom: 10px;
          right: 15px;
          z-index: 6;
          font-size: 16px;
          font-family: Mukta, sans-serif;
          color: white;
          background-color: #4E686D;
          padding: 2px 14px;
          border-radius: 9px;
          @media screen and (min-width: 800px) {
            visibility: hidden;
            opacity: 0;
            transition: visibility 0s, opacity 0.5s linear;
            padding: 2px 24px;
            &:hover {
              background-color: #26393D;
            }
            &:active {
              background-color: #63888F;
            }
          }
          @media screen and (min-width: 1600px) {
            bottom: 20px;
            right: 30px;
            font-size: 20px;
            padding: 4px 34px;
          }
        }
      }
    }
    a {
      font-family: Mukta, sans-serif;
      font-size: 16px;
      color: white;
      background-color: #4E686D;
      text-decoration: none;
      padding: 11px 93px;
      border-radius: 9px;
      @media screen and (min-width: 800px) {
        padding: 10px 19px;
        &:hover {
          background-color: #26393D;
        }
        &:active {
          background-color: #63888F;
        }
      }
      @media screen and (min-width: 1600px) {
        font-size: 20px;
        padding: 12px 28px;
      }
    }
  }
  #accueil-4 {
    text-align: center;
    margin-top: 83px;
    margin-bottom: 74px;
    @media screen and (min-width: 800px) {
      margin-top: 96px;
      margin-bottom: 136px;
    }
    @media screen and (min-width: 1600px) {
      margin-top: 220px;
      margin-bottom: 226px;
    }
    h2 {
      margin: 0 40px;
      @media screen and (min-width: 800px) {
        margin: 0;
      }
    }
    p {
      font-family: "Mukta Light", sans-serif;
      font-size: 14px;
      margin-top: 4px;
      margin-bottom: 0;
      @media screen and (min-width: 800px) {
        font-size: 16px;
        margin-top: 0;
      }
      @media screen and (min-width: 1600px) {
        font-size: 20px;
      }
    }
    .promo-accueil-4 {
      margin: 40px 58px 0;
      @media screen and (min-width: 800px) {
        display: flex;
        flex-flow: row wrap;
        margin: 44px 180px 65px;
      }
      @media screen and (min-width: 1600px) {
        flex-flow: row nowrap;
        margin: 96px 160px 109px;
      }
      .section-promo-accueil-4 {
        @media screen and (min-width: 800px) {
          margin: 0 auto;
          width: 320px;
        }
        img {
          @media screen and (min-width: 800px) {
            width: auto;
            height: 40px;
          }
          @media screen and (min-width: 1600px) {
            height: 60px;
          }
        }
        h3 {
          margin: 13px 0;
          @media screen and (min-width: 800px) {
            margin: 23px 0 16px;
          }
          @media screen and (min-width: 1600px) {
            margin: 20px 0;
          }
        }
        p {
          margin-top: 0;
        }
        &:nth-child(2) {
          margin-top: 52px;
          @media screen and (min-width: 800px) {
            margin-top: 0;
          }
        }
        &:nth-child(3) {
          margin-top: 52px;
          @media screen and (min-width: 800px) {
            margin-top: 71px;
          }
          @media screen and (min-width: 1320px) {
            margin-top: 0;
          }
        }
        &:last-child {
          margin: 52px 0 57px;
          @media screen and (min-width: 800px) {
            margin: 71px auto 0;
          }
          @media screen and (min-width: 1600px) {
            margin: 0 auto;
          }
        }
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
        &:hover {
          background-color: #26393D;
        }
        &:active {
          background-color: #63888F;
        }
      }
      @media screen and (min-width: 1600px) {
        font-size: 20px;
        padding: 12px 32px;
      }
    }
  }
}
</style>
