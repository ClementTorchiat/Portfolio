<template>
  <main>
    <div id="services">
      <h1>From a simple idea to the final product</h1>
      <p>I offer services that contribute to the success of your business. You will end up with a singular design and a unique user experience.</p>
      <div class="services-grid">
        <div class="service-1-1">
          <h2>Visual identity and research</h2>
          <p>Let's identify together how you want to be seen by your customers. Let's imagine your logo and your colored harmony together. The consistency of the visual identity guarantees the consistency of your image.</p>
          <router-link to="/eng/get-in-touch">Get in touch</router-link>
        </div>
        <div class="service-1-2">
          <img src="@/assets/images/icones/services_rouge.svg" alt="">
          <img src="@/assets/images/icones/services_tiret_bleu.svg" alt="">
          <img src="@/assets/images/img/services_illustration_1.png" alt="">
        </div>
        <div class="service-2-1">
          <h2>Mock-up</h2>
          <p>Responsive mockup with an ergonomic design and convenient navigation that suits you. Thus, we will look together for a design that you like.</p>
          <router-link to="/eng/get-in-touch">Get in touch</router-link>
        </div>
        <div class="service-2-2">
          <img src="@/assets/images/icones/services_jaune.svg" alt="">
          <img src="@/assets/images/icones/services_tiret_rouge.svg" alt="">
          <img src="@/assets/images/img/services_illustration_2.png" alt="">
        </div>
        <div class="service-3-1">
          <h2>Front End Integration</h2>
          <p>Once the mockup is finished and validated, I will integrate our responsive design. It's a full HTML/CSS integration for added flexibility. Even if you already have a design, I can integrate it.</p>
          <router-link to="/eng/get-in-touch">Get in touch</router-link>
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
  name: "Serviceseng"
}
</script>

<style scoped lang="less">
@import "/src/assets/styles/styles.less";

main {
  overflow-x: hidden;
  #services {
    text-align: center;
    h1 {
      margin: 50px 0 15px;
      @media screen and (min-width: 800px) {
        margin: 50px 40px 20px;
      }
      @media screen and (min-width: 1600px) {
        margin-top: 60px;
      }
    }
    p {
      margin: 0 21px;
      @media screen and (min-width: 800px) {
        margin: 0 40px;
      }
    }
    .services-grid {
      @media screen and (min-width: 800px) {
        margin-top: 97px;
        margin-bottom: 100px;
        display: grid;
        grid-template-columns: 50vw 50vw;
        grid-template-rows: 522px 522px 522px;
        grid-template-areas:
        "area1 area2"
        "area4 area3"
        "area5 area6";
      }
      @media screen and (min-width: 1600px) {
        margin-top: 136px;
        margin-bottom: 200px;
        grid-template-rows: 783px 783px 783px;
      }
      .service-1-1 {
        margin-top: 74px;
        @media screen and (min-width: 800px) {
          grid-area: area1;
          text-align: left;
          margin: 105px 107px 0;
        }
        @media screen and (min-width: 1600px) {
          margin: 188px 204px 0 213px;
        }
        h2 {
          margin: 0 0 26px;
          @media screen and (min-width: 800px) {
            margin-bottom: 34px;
          }
          @media screen and (min-width: 1600px) {
            margin-bottom: 43px;
          }
        }
        p {
          margin-bottom: 37px;
          @media screen and (min-width: 800px) {
            margin: 0 0 43.5px;
          }
          @media screen and (min-width: 1600px) {
            margin-bottom: 55px;
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
      .service-1-2 {
        position: relative;
        background-color: #B57243;
        width: 100%;
        height: 285px;
        margin-top: 55px;
        @media screen and (min-width: 800px) {
          height: 522px;
          margin-top: 0;
          grid-area: area2;
        }
        @media screen and (min-width: 1600px) {
          height: 783px;
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
            @media screen and (min-width: 1600px) {
              height: 327px;
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
            @media screen and (min-width: 1600px) {
              width: 258px;
              top: 65px;
              right: 63px;
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
            @media screen and (min-width: 1600px) {
              width: 660px;
              top: 122px;
              left: -90px;
            }
          }
        }
      }
      .service-2-1 {
        margin-top: 45px;
        @media screen and (min-width: 800px) {
          text-align: left;
          margin: 102px 100px 0 137px;
          grid-area: area3;
        }
        @media screen and (min-width: 1600px) {
          margin: 188px 208.5px 0;
        }
        h2 {
          margin: 0 0 26px;
          @media screen and (min-width: 800px) {
            margin-right: 100px;
            margin-bottom: 34px;
          }
          @media screen and (min-width: 1600px) {
            margin-bottom: 43px;
          }
        }
        p {
          margin-bottom: 37px;
          @media screen and (min-width: 800px) {
            margin: 0 0 43.5px;
          }
          @media screen and (min-width: 1600px) {
            margin-bottom: 55px;
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
      .service-2-2 {
        position: relative;
        background-color: #A54B29;
        width: 100%;
        height: 285px;
        margin-top: 55px;
        @media screen and (min-width: 800px) {
          height: 522px;
          margin-top: 0;
          grid-area: area4;
        }
        @media screen and (min-width: 1600px) {
          height: 783px;
        }
        img {
          position: absolute;
          &:first-child {
            width: auto;
            height: 199px;
            bottom: 0;
            left: 0;
            @media screen and (min-width: 800px) {
              height: 185px;
            }
            @media screen and (min-width: 1600px) {
              height: 327px;
            }
          }
          &:nth-child(2) {
            width: 98px;
            height: auto;
            top: 16px;
            right: 16px;
            @media screen and (min-width: 800px) {
              width: 186px;
              top: 39px;
              left: 36px;
            }
            @media screen and (min-width: 1600px) {
              width: 258px;
              top: 67px;
              left: 55px;
            }
          }
          &:last-child {
            width: 308px;
            height: auto;
            top: 16px;
            right: 34px;
            @media screen and (min-width: 800px) {
              width: 452px;
              top: 75px;
              right: -66px;
            }
            @media screen and (min-width: 1600px) {
              width: 660px;
              top: 122px;
              right: -95px;
            }
          }
        }
      }
      .service-3-1 {
        margin-top: 45px;
        @media screen and (min-width: 800px) {
          text-align: left;
          margin: 105px 107px 0;
          grid-area: area5;
        }
        @media screen and (min-width: 1600px) {
          margin: 188px 204px 0 213px;
        }
        h2 {
          margin: 0 0 26px;
          @media screen and (min-width: 800px) {
            margin-bottom: 34px;
          }
          @media screen and (min-width: 1600px) {
            margin-bottom: 43px;
          }
        }
        p {
          margin-bottom: 37px;
          @media screen and (min-width: 800px) {
            margin: 0 0 43px;
          }
          @media screen and (min-width: 1600px) {
            margin-bottom: 55px;
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
      .service-3-2 {
        position: relative;
        background-color: #B89558;
        width: 100%;
        height: 285px;
        margin-top: 55px;
        margin-bottom: 61px;
        @media screen and (min-width: 800px) {
          grid-area: area6;
          margin: 0;
          height: 522px;
        }
        @media screen and (min-width: 1600px) {
          height: 783px;
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
            @media screen and (min-width: 1600px) {
              height: 327px;
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
              left: initial;
              right: 31px;
            }
            @media screen and (min-width: 1600px) {
              width: 258px;
              top: 65px;
              right: 63px;
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
            @media screen and (min-width: 1600px) {
              width: 660px;
              top: 122px;
              left: -100px;
            }
          }
        }
      }
    }
  }
}
</style>
