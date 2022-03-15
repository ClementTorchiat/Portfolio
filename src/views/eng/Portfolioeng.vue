<template>
  <main>
    <div class="portfolio">
      <h1>Portfolio</h1>
      <p>A list of my various academic, personal and professional projects.</p>
      <div id="liste-des-projets">
        <div class="derniers-projets" v-for="projet in liste_projets" :key="projet.id">
          <img class="image-projet" :src="projet.better_featured_image.source_url" alt="">
          <img class="fond-projet" src="@/assets/images/icones/projet_bord_noir.svg" alt="">
          <h4 class="titre-projet">{{projet.title.rendered}}</h4>
          <router-link class="bouton-projet" :to="{ name:'Project', params: {id : projet.id}}">See</router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

import param from "@/param/param";
import axios from "axios";

export default {
  name: "Portfolioeng",
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

<style scoped lang="less">
@import "/src/assets/styles/styles.less";

main {
  .portfolio {
    text-align: center;
    h1 {
      margin: 50px 0 11px;
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
    #liste-des-projets {
      align-content: center;
      margin: 50px 0 80px;
      @media screen and (min-width: 800px) {
        display: flex;
        flex-wrap: wrap;
        margin: 30px 100px 50px;
      }
      @media screen and (min-width: 1600px) {
        margin: 0 150px 50px;
      }
      .derniers-projets {
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
          margin: 50px auto 0;
          &:hover {
            .fond-projet {
              visibility: visible;
              opacity: 1;
            }
            .titre-projet {
              visibility: visible;
              opacity: 1;
            }
            .bouton-projet {
              visibility: visible;
              opacity: 1;
            }
          }
        }
        @media screen and (min-width: 1600px) {
          max-width: 480px;
          width: 480px;
          height: 360px;
          margin: 50px auto 0;
        }
        .image-projet {
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
        .fond-projet {
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
        .titre-projet {
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
        .bouton-projet {
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
          text-decoration: none;
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
  }
}
</style>
