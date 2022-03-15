<template>
  <main>
    <div id="accueil-1">
      <div class="gauche">
        <p>- Student</p>
        <h1>Developer of unique websites for your brand</h1>
        <p>Transform your business into an amazing user experience and a unique design. Use my skills to achieve this.</p>
        <div class="boutons-accueil-1">
          <router-link to="/eng/get-in-touch">Get in touch</router-link>
          <router-link to="/eng/portfolio">See my work</router-link>
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
      <h2>Solutions to all your problems</h2>
      <p>I carry out various works that adapt to your project.</p>
      <div class="icones-accueil-2">
        <div class="services-accueil-2">
          <img src="@/assets/images/icones/icone_identite_visuelle.svg" alt="Identité Visuelle">
          <h3>Visual identity</h3>
          <p>Creation of your logo and of your colored harmony.  The consistency of the visual identity guarantees the consistency of your image.</p>
          <router-link to="/eng/services">See more</router-link>
        </div>
        <div class="services-accueil-2">
          <img src="@/assets/images/icones/icone_maquettage_graphique.svg" alt="Maquettage Graphique">
          <h3>Mock-up</h3>
          <p>Responsive mockup with an ergonomic design and convenient navigation that suits you.</p>
          <router-link to="/eng/services">See more</router-link>
        </div>
        <div class="services-accueil-2">
          <img src="@/assets/images/icones/icone_integration.svg" alt="Intégration">
          <h3>Integration</h3>
          <p>Front-end integration of showcase sites and responsive landing pages. It's a full HTML/CSS integration for added flexibility.</p>
          <router-link to="/eng/services">See more</router-link>
        </div>
      </div>
    </div>
    <div id="accueil-3">
      <h2>Latest works</h2>
      <p>My latest work and completed projects.</p>
      <div class="projets-accueil-3">
        <div class="derniers-projets-accueil-3" v-for="projet in liste_projets.slice(0,3)" :key="projet.id">
          <img class="image-projet-accueil-3" :src="projet.better_featured_image.source_url" alt="">
          <img class="fond-projet-accueil-3" src="@/assets/images/icones/projet_bord_noir.svg" alt="">
          <h4 class="titre-projet-accueil-3">{{projet.title.rendered}}</h4>
          <router-link class="bouton-projet-accueil-3" :to="{ name:'Project', params: {id : projet.id}}">See</router-link>
        </div>
      </div>
      <router-link to="/eng/portfolio">See all my work</router-link>
    </div>
    <div id="accueil-4">
      <h2>Why work with me ?</h2>
      <p>An effective response to your projects.</p>
      <div class="promo-accueil-4">
        <div class="section-promo-accueil-4">
          <img src="@/assets/images/icones/icone_promo_moins_cher.svg" alt="Moins cher">
          <h3>Cheaper</h3>
          <p>I am the ideal solution for small companies : I adapt my work to your budget and your objective.</p>
        </div>
        <div class="section-promo-accueil-4">
          <img src="@/assets/images/icones/icone_promo_echanges.svg" alt="Réactivité des échanges">
          <h3>Responsiveness of exchanges</h3>
          <p>I am attentive to all your requests and I adapt to your changing needs as soon as possible.</p>
        </div>
        <div class="section-promo-accueil-4">
          <img src="@/assets/images/icones/icone_promo_unique.svg" alt="Unique et qualitatif">
          <h3>Unique and qualitative</h3>
          <p>Let's look together for a graphic identity and an architecture that suits you and meets current market demands.</p>
        </div>
        <div class="section-promo-accueil-4">
          <img src="@/assets/images/icones/icone_promo_intermediaires.svg" alt="Pas d'intermédiaires">
          <h3>No intermediaries </h3>
          <p>You deal with me and me alone throughout the project: I listen to all your requests and respond as spontaneously as possible.</p>
        </div>
      </div>
      <router-link to="/eng/contact">Get in touch</router-link>
    </div>
  </main>
</template>
<script>

import axios from "axios";
import param from "@/param/param";

export default {
  name: 'Home',
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
            width: 28vw;
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
            margin-left: 8px;
            @media screen and (min-width: 800px) {
              margin-left: 11px;
            }
          }
          @media screen and (min-width: 800px) {
            &:hover {
              text-decoration: underline;
            }
            &:active {
              font-weight: bold;
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
