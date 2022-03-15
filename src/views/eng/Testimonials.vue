<template>
  <main>
    <div id="avis">
      <h1>Testimonials</h1>
      <p>Here is a small list of testimonials from different clients to whom I have offered my services.</p>
      <div class="avis-container" v-for="avis in liste_avis" :key="avis.id">
        <img class="image-avis" :src="avis.acf.image" alt="">
        <div class="contenu-textuel-avis">
          <div class="note-avis">
            <img class="etoile-avis" src="@/assets/images/icones/etoile_jaune.svg" alt="">
            <img class="etoile-avis" src="@/assets/images/icones/etoile_jaune.svg" alt="">
            <img class="etoile-avis" src="@/assets/images/icones/etoile_jaune.svg" alt="">
            <img class="etoile-avis" src="@/assets/images/icones/etoile_jaune.svg" alt="">
            <img class="etoile-avis" src="@/assets/images/icones/etoile_grise.svg" alt="">
          </div>
          <div class="prenom-entreprise-avis">
            <p class="nom-prenom-avis">- {{avis.acf.nom_prenom}}</p>
            <p class="entreprise-avis">{{avis.acf.entreprise}}</p>
          </div>
          <p class="extrait-avis">"{{avis.acf.extrait}}"</p>
          <p class="avis-complet">{{avis.acf.avis_complet}}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import param from "@/param/param.js";

export default {
  name: "Testimonials",
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

<style scoped lang="less">
@import "/src/assets/styles/styles.less";

main {
  #avis {
    margin-bottom: 28px;
    @media screen and (min-width: 800px) {
      margin-bottom: 76px;
    }
    @media screen and (min-width: 1600px) {
      margin-bottom: 80px;
    }
    h1 {
      margin: 50px 0 15px;
      text-align: center;
      @media screen and (min-width: 800px) {
        margin: 50px 40px 20px;
      }
      @media screen and (min-width: 1600px) {
        margin-top: 60px;
      }
    }
    p {
      text-align: center;
      margin: 0 21px 56px;
      @media screen and (min-width: 800px) {
        margin: 0 40px 113px;
      }
      @media screen and (min-width: 1600px) {
        margin-bottom: 136px;
      }
    }
    .avis-container {
      background-color: #F0F0F0;
      margin: 0 18px 28px;
      border-radius: 10px;
      @media screen and (min-width: 800px) {
        margin: 0 248px 42px;
        display: flex;
      }
      @media screen and (min-width: 1600px) {
        margin: 0 410px 71px;
      }
      .image-avis {
        width: 122px;
        height: auto;
        text-align: initial;
        margin: 27px 0 17px 27px;
        @media screen and (min-width: 800px) {
          width: 157px;
          margin: 41px 27px 41px 16px;
        }
        @media screen and (min-width: 1600px) {
          width: 224px;
          margin: 48px 30px;
        }
      }
      .contenu-textuel-avis {
        .note-avis {
          display: flex;
          margin-left: 45px;
          @media screen and (min-width: 800px) {
            margin-top: 25px;
            margin-left: 0;
          }
          @media screen and (min-width: 1600px) {
            margin-top: 35px;
            margin-left: 4px;
          }
          .etoile-avis {
            margin-right: 4px;
            @media screen and (min-width: 800px) {
              margin-right: 7px;
              width: 16px;
            }
            @media screen and (min-width: 1600px) {
              margin-right: 6px;
              width: 23px;
            }
            &:last-child {
              margin-right: 0;
            }
          }
        }
        .prenom-entreprise-avis {
          display: flex;
          .nom-prenom-avis {
            margin: 14px 35px 10px 27px;
            font-family: "Mukta SemiBold", sans-serif;
            font-size: 16px;
            @media screen and (min-width: 800px) {
              margin: 15px 35px 6px 0;
            }
            @media screen and (min-width: 1600px) {
              margin: 20px 35px 13px 0;
              font-size: 20px;
            }
          }
          .entreprise-avis {
            margin: 14px 0 0;
            font-family: "Mukta SemiBold", sans-serif;
            font-size: 16px;
            @media screen and (min-width: 800px) {
              margin: 15px 0 0;
            }
            @media screen and (min-width: 1600px) {
              margin: 20px 0 0;
              font-size: 20px;
            }
          }
        }
        .extrait-avis {
          text-align: left;
          margin: 0 27px;
          font-size: 16px;
          font-family: Mukta, sans-serif;
          font-weight: bold;
          @media screen and (min-width: 800px) {
            margin: 0 10px 8px 0;
          }
          @media screen and (min-width: 1600px) {
            margin: 0 30px 7px 0;
            font-size: 20px;
          }
        }
        .avis-complet {
          text-align: left;
          margin: 0 27px;
          padding-bottom: 17px;
          @media screen and (min-width: 800px) {
            margin: 0 10px 0 0;
            padding-bottom: 25px;
          }
          @media screen and (min-width: 1600px) {
            margin: 0 30px 0 0;
            padding-bottom: 35px;
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
