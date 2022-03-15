<template>
  <main>
    <div id="a-propos">
      <h1>Nice to meet you, I am Clément Torchiat !</h1>
      <p>I design and integrate unique websites for your brand.</p>
      <div class="grille-images-a-propos">
        <img src="@/assets/images/img/a_propos_illustration_1.png" alt="">
        <img src="@/assets/images/img/a_propos_illustration_2.png" alt="">
        <img src="@/assets/images/img/a_propos_illustration_3.png" alt="">
        <img src="@/assets/images/img/a_propos_illustration_4.png" alt="">
      </div>
      <div class="texte_a_propos">
        <p>- Summary</p>
        <h2>My goal : your success </h2>
        <p>I am currently a DUT MMI student in Montbéliard, training through which I learn to create visual identities, graphic interfaces, websites mock-ups, complete websites and much more.<br><br>

          My goal is to provide effective and concrete solutions to your problems. We will work together to find a design and a website that suits you.<br><br>

          The main advantage is that there are no intermediaries or external agencies: only me. You will be in direct contact with me and we will discuss your project together. I participated in whole or in part in all the work you see here.<br><br>

          It is very important for your brand to appear with a unique design and user experience that meets the needs of your customers. Web design and web integration prices may seem expensive, but what you get in return will be well worth the cost.<br><br>

          Your success is my success. I prioritize the needs of my clients, not profits.</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "About"
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
