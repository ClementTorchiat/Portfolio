<template>
  <main>
    <div id="contact">
      <h1>Hey ! I was expecting you</h1>
      <form ref="form" @submit.prevent="envoyerEmail" class="formulaire" data-name="Formulaire" method="get" aria-label="Formulaire">
        <input class="contact-nom" type="text" maxlength="256" name="nom" data-name="nom" placeholder="What’s your name ?" required>
        <input class="contact-email" type="email" maxlength="256" name="email" data-name="email" placeholder="Your email" required>
        <input class="contact-budget" type="text" maxlength="256" name="budget" data-name="budget" placeholder="Your budget" required>
        <textarea class="contact-description" name="description" data-name="Description" placeholder="Tell me about your project (or insert a link to an existing mock-up)"></textarea>
        <button class="contact-bouton" type="submit" value="Send" data-wait="Veuillez patienter...">Send</button>
      </form>
    </div>
  </main>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  name: "Get-in-touch",
  methods:{
    envoyerEmail () {
      emailjs.sendForm('service_lbw4llt', 'template_jgq0r8n', this.$refs.form, 'o12gp0uyybtdIVXy6')
          .then((result) => {
            console.log('SUCCESS!', result.text);
            this.$router.push('/');
          }, (error) => {
            console.log('FAILED...', error.text);
          });
    }
  }
}
</script>

<style scoped lang="less">
@import "/src/assets/styles/styles.less";

main {
  #contact {
    text-align: center;
    @media screen and (min-width: 800px) {
      margin-bottom: 96px;
    }
    @media screen and (min-width: 1600px) {
      margin-bottom: 138px;
    }
    h1 {
      margin: 50px 50px 47px;
      @media screen and (min-width: 800px) {
        margin-bottom: 97px;
      }
      @media screen and (min-width: 1600px) {
        margin-top: 60px;
      }
    }
    .formulaire {
      @media screen and (min-width: 800px) {
        display: flex;
        flex-direction: column;
      }
      .contact-nom {
        width: 196px;
        font-family: "Mukta Light", sans-serif;
        font-size: 16px;
        color: #4E4E4E;
        background-color: #EFEFEF;
        padding: 16px 65px 16px 68px;
        border: #d3dae9 solid 0.1px;
        border-radius: 15px;
        background-image: url("https://clement-torchiat.fr/wp-content/uploads/2022/02/user-regular.svg");
        background-repeat: no-repeat;
        background-size: 20px auto;
        background-position: 7% 50%;
        margin-bottom: 21px;
        @media screen and (min-width: 800px) {
          width: 335px;
          padding: 17px 513px 17px 78px;
          margin: 0 auto 28px;
          background-size: 24px auto;
          background-position: 3% 50%;
        }
        @media screen and (min-width: 1600px) {
          font-size: 20px;
          padding: 22px 689px 22px 91px;
          margin-bottom: 42px;
        }
      }
      .contact-email {
        width: 196px;
        font-family: "Mukta Light", sans-serif;
        font-size: 16px;
        color: #4E4E4E;
        background-color: #EFEFEF;
        padding: 16px 65px 16px 68px;
        border: #d3dae9 solid 0.1px;
        border-radius: 15px;
        background-image: url("https://clement-torchiat.fr/wp-content/uploads/2022/02/envelope-regular.svg");
        background-repeat: no-repeat;
        background-size: 20px auto;
        background-position: 7% 50%;
        margin-bottom: 21px;
        @media screen and (min-width: 800px) {
          width: 335px;
          padding: 17px 513px 17px 78px;
          margin: 0 auto 28px;
          background-size: 24px auto;
          background-position: 3% 50%;
        }
        @media screen and (min-width: 1600px) {
          font-size: 20px;
          padding: 22px 689px 22px 91px;
          margin-bottom: 42px;
        }
      }
      .contact-budget {
        width: 196px;
        font-family: "Mukta Light", sans-serif;
        font-size: 16px;
        color: #4E4E4E;
        background-color: #EFEFEF;
        padding: 16px 65px 16px 68px;
        border: #d3dae9 solid 0.1px;
        border-radius: 15px;
        background-image: url("https://clement-torchiat.fr/wp-content/uploads/2022/02/Groupe-38.svg");
        background-repeat: no-repeat;
        background-size: 20px auto;
        background-position: 7% 50%;
        margin-bottom: 21px;
        @media screen and (min-width: 800px) {
          width: 335px;
          padding: 17px 513px 17px 78px;
          margin: 0 auto 28px;
          background-size: 24px auto;
          background-position: 3% 50%;
        }
        @media screen and (min-width: 1600px) {
          font-size: 20px;
          padding: 22px 689px 22px 91px;
          margin-bottom: 42px;
        }
      }
      .contact-description {
        width: 243px;
        height: 81px;
        font-family: "Mukta Light", sans-serif;
        font-size: 16px;
        color: #4E4E4E;
        background-color: #EFEFEF;
        padding: 16px 18px 100px 68px;
        border: #d3dae9 solid 0.1px;
        border-radius: 15px;
        background-image: url("https://clement-torchiat.fr/wp-content/uploads/2022/02/list-solid.svg");
        background-repeat: no-repeat;
        background-size: 20px auto;
        background-position: 7% 11%;
        margin-bottom: 21px;
        @media screen and (min-width: 800px) {
          width: 647px;
          padding: 17px 201px 169px 78px;
          margin: 0 auto 28px;
          background-size: 24px auto;
          background-position: 3% 8%;
        }
        @media screen and (min-width: 1600px) {
          font-size: 20px;
          width: 698px;
          padding: 22px 325px 216px 91px;
          margin-bottom: 42px;
          background-position: 3% 10%;
        }
      }
      .contact-bouton {
        font-family: Mukta, sans-serif;
        font-size: 20px;
        color: white;
        background-color: #4E686D;
        border: none;
        padding: 14px 131px;
        border-radius: 9px;
        cursor: pointer;
        @media screen and (min-width: 800px) {
          width: auto;
          margin: 0 auto;
          padding: 12px 429px;
          &:hover {
            background-color: #26393D;
          }
          &:active {
            background-color: #63888F;
          }
        }
        @media screen and (min-width: 1600px) {
          padding: 14px 538px;
        }
      }
    }
  }
}
</style>
