<template>
  <div class="carte_contact">
    <div class="carte_fond">
      <img src="@/assets/images/icones/carte_bleu.svg" alt="">
      <img src="@/assets/images/icones/carte_rouge.svg" alt="">
      <img src="@/assets/images/icones/carte_rouge_2.svg" alt="">
      <img src="@/assets/images/icones/carte_jaune_3.svg" alt="">
      <img src="@/assets/images/icones/carte_jaune_2.svg" alt="">
      <img src="@/assets/images/icones/carte_jaune.svg" alt="">
    </div>
    <div class="carte_contenu">
      <h1>Have a project in mind ?</h1>
      <p>Tell me about your project and get an answer as soon as possible.</p>
      <router-link to="/eng/get-in-touch">Get in touch</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "carteeng"
}
</script>

<style scoped lang="less">
.carte_contact {
  background-color: #B57243;
  border-radius: 30px;
  text-align: center;
  margin: 21px;
  padding-bottom: 38.5px;
  position: relative;
  @media screen and (min-width: 800px) {
    margin: 13px 169px;
    text-align: left;
    padding-bottom: 40px;
  }
  @media screen and (min-width: 1600px) {
    margin: 13px 310px;
    padding-bottom: 77px;
  }
  .carte_fond {
    img {
      position: absolute;
      &:first-child {
        top: 18px;
        left: 21px;
        @media screen and (min-width: 800px) {
          top: 41px;
          right: 25px;
          left: initial;
          width: 160px;
          height: auto;
          z-index: 6;
        }
        @media screen and (min-width: 1600px) {
          top: 45px;
          right: 25.5px;
          width: 258px;
        }
      }
      &:nth-child(2) {
        right: 0;
        bottom: 0;
        @media screen and (min-width: 800px) {
          z-index: 5;
          display: none;
        }
      }
      &:nth-child(3) {
        right: 0;
        bottom: 0;
        display: none;
        @media screen and (min-width: 800px) {
          display: initial;
          right: 165px;
          height: 100%;
          z-index: 4;
        }
        @media screen and (min-width: 1600px) {
          right: 303.5px;
        }
      }
      &:nth-child(4) {
        right: 0;
        bottom: 0;
        display: none;
        @media screen and (min-width: 1600px) {
          display: initial;
          z-index: 3;
        }
      }
      &:nth-child(5) {
        right: 0;
        bottom: 0;
        display: none;
        @media screen and (min-width: 800px) {
          width: 160px;
          height: auto;
          display: initial;
          z-index: 2;
        }
      }
      &:last-child {
        right: 0;
        bottom: 0;
        @media screen and (min-width: 800px) {
          display: none;
          z-index: 1;
        }
      }
    }
  }
  .carte_contenu {
    position: relative;
    z-index: 7;
    @media screen and (min-width: 800px) {
      margin-left: 40px;
    }
    @media screen and (min-width: 1600px) {
      margin-left: 42px;
    }
    h1 {
      font-family: Source Sans Pro, sans-serif;
      font-weight: bold;
      font-size: 40px;
      color: white;
      margin: 0 52px 27px;
      padding-top: 18px;
      @media screen and (min-width: 800px) {
        font-size: 46px;
        margin: 0;
        padding-top: 36px;
      }
      @media screen and (min-width: 1600px) {
        font-size: 60px;
        padding-top: 57px;
      }
    }
    p {
      font-family: Mukta, sans-serif;
      font-size: 16px;
      color: white;
      margin: 0 28px 85.5px;
      @media screen and (min-width: 800px) {
        margin: 0 0 31px;
        width: 45%;
      }
      @media screen and (min-width: 1600px) {
        font-size: 20px;
        margin: 0 0 39px;
      }
    }
    a {
      font-family: Mukta, sans-serif;
      font-size: 16px;
      color: white;
      text-decoration: none;
      padding: 10.5px 47px;
      background-color: #4E686D;
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
        padding: 12px 31.5px;
      }
    }
  }
}
</style>
