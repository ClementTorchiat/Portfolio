<template>
  <main>
    <h1>{{projet.title.rendered}}</h1>
    <h4><span v-for="tags_projet in projet.acf.tags_projet" :key="tags_projet.id">{{tags_projet}}</span></h4>
    <img :src="projet.acf.image_projet_1" alt="">
    <p>{{projet.acf.texte_projet_1}}</p>
    <img :src="projet.acf.image_projet_2" alt="">
    <p>{{projet.acf.texte_projet_2}}</p>
    <img :src="projet.acf.image_projet_3" alt="">
    <p>{{projet.acf.texte_projet_3}}</p>
    <h2>Other projects</h2>
    <div class="projets">
      <div class="derniers-projets" v-for="projet in liste_projets.slice(0,3)" :key="projet.id">
        <img class="image-projet" :src="projet.better_featured_image.source_url" alt="">
        <img class="fond-projet" src="@/assets/images/icones/projet_bord_noir.svg" alt="">
        <h4 class="titre-projet">{{projet.title.rendered}}</h4>
        <router-link class="bouton-projet" :to="{ name:'Project', params: {id : projet.id}}">See</router-link>
      </div>
    </div>
    <router-link to="/eng/portfolio" class="bouton-retourner-portfolio">Return to portfolio</router-link>
  </main>
</template>

<script>
import axios from "axios";
import param from "@/param/param";

export default {
  name: "Project",
  data() {
    return {
      liste_projets: [],
      projet: {
        image_projet_1: null,
        image_projet_2: null,
        image_projet_3: null,
        tags_projet: null,
        texte_projet_1: null,
        texte_projet_2: null,
        texte_projet_3: null,
      }
    };
  },
  created() {
    this.id = this.$route.params.id;
    axios.get(param.host+"projet").then(response => {
      this.liste_projets = response.data;
      for (let i = 0; i < this.liste_projets.length; i++) {
        if (this.liste_projets[i].id === this.id) {
          this.projet = this.liste_projets[i]
        }
      }
      console.log("Projet : ", this.projet)
    })
  },
}
</script>

<style scoped lang="less">
@import "/src/assets/styles/styles.less";

main {
  overflow-y: hidden;
  overflow-x: hidden;
  padding-bottom: 50px;
  text-align: center;
  @media screen and (min-width: 1600px) {
    padding-bottom: 100px;
  }
  h1 {
    text-align: center;
  }
  h4 {
    margin-left: 23px;
    text-align: left;
    @media screen and (min-width: 800px) {
      margin-left: 0;
      text-align: center;
    }
    @media screen and (min-width: 1600px) {
      margin-bottom: 60px;
    }
    span {
      font-family: Source Sans Pro, sans-serif;
      font-weight: bold;
      font-size: 14px;
      background-color: #E2E2E2;
      border-radius: 10px;
      padding: 5px 12px;
      margin-right: 15px;
      @media screen and (min-width: 800px) {
        font-size: 16px;
        margin-right: 18px;
        &:last-child {
          margin-right: 0;
        }
      }
      @media screen and (min-width: 1600px) {
        font-size: 20px;
        margin-right: 20px;
        padding: 5px 20px;
      }
    }
  }
  img {
    width: 100vw;
    @media screen and (min-width: 800px) {
      width: 724px;
      border-radius: 20px;
    }
    @media screen and (min-width: 1600px) {
      width: 900px;
    }
  }
  p {
    margin: 30px 35px;
    text-align: left;
    @media screen and (min-width: 800px) {
      margin: 40px 160px;
    }
    @media screen and (min-width: 1600px) {
      margin: 87px 228px;
    }
  }
  h2 {
    text-align: center;
    @media screen and (min-width: 800px) {
      margin-bottom: 0;
    }
  }
  .projets {
    align-content: center;
    @media screen and (min-width: 800px) {
      display: flex;
      flex-wrap: wrap;
      margin: 0 100px;
    }
    @media screen and (min-width: 1600px) {
      margin: 0 150px;
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
        margin: 44px auto 54px;
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
        margin: 73px auto 67px;
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
  .bouton-retourner-portfolio {
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
}
</style>
