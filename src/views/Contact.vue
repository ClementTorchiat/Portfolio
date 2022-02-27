<template>
  <main>
    <div id="contact">
      <h1>Hey ! Je vous attendais</h1>
      <form class="formulaire" data-name="Formulaire" method="get" aria-label="Formulaire">
        <input class="contact-nom" type="text" maxlength="256" name="Nom" data-name="Nom" placeholder="Comment vous appelez vous ?" required>
        <input class="contact-email" type="email" maxlength="256" name="Email" data-name="Email" placeholder="Votre email" required>
        <input class="contact-budget" type="text" maxlength="256" name="Budget" data-name="Budget" placeholder="Votre budget" required>
        <textarea class="contact-description" name="Description" data-name="Description" placeholder="Parlez moi de votre projet (ou insérez un lien vers une maquette déjà existante)"></textarea>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped lang="less">
@import "/src/assets/styles/styles.less";

main {
  #contact {
    text-align: center;
    margin-bottom: 57px;
    @media screen and (min-width: 800px) {
      margin-bottom: 96px;
    }
    h1 {
      margin: 50px 50px 47px;
      @media screen and (min-width: 800px) {
        margin-bottom: 20px;
      }
      @media screen and (min-width: 1600px) {
        margin-top: 60px;
      }
    }
    .formulaire {
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
      }
      .contact-description {
        width: 196px;
        font-family: "Mukta Light", sans-serif;
        font-size: 16px;
        color: #4E4E4E;
        background-color: #EFEFEF;
        padding: 16px 65px 16px 68px;
        border: #d3dae9 solid 0.1px;
        border-radius: 15px;
        background-image: url("https://clement-torchiat.fr/wp-content/uploads/2022/02/list-solid.svg");
        background-repeat: no-repeat;
        background-size: 20px auto;
        background-position: 7% 50%;
        margin-bottom: 21px;
      }
    }
  }
}
</style>
