<template>
  <footer>
    <router-link to="/eng"><img src="@/assets/images/icones/logo_clement_torchiat.svg" alt="Clément Torchiat"></router-link>
    <div class="navigation_container">
      <ul>
        <li><h4>Navigation</h4></li>
        <li><router-link to="/eng/portfolio">Portfolio</router-link></li>
        <li><router-link to="/eng/services">Services</router-link></li>
        <li><router-link to="/eng/about">About</router-link></li>
        <li><router-link to="/eng/testimonials">Testimonials</router-link></li>
        <li><router-link to="/eng/get-in-touch">Get in touch</router-link></li>
      </ul>
    </div>
    <div class="reseaux_container">
      <h4>Social networks</h4>
      <div class="reseaux">
        <a href="https://www.linkedin.com/in/cl%C3%A9ment-torchiat-1965b71bb/"><img src="@/assets/images/icones/logo_linkedin.svg" alt="LinkedIn"></a>
        <a href="https://www.behance.net/clmenttorchiat"><img src="@/assets/images/icones/logo_behance.svg" alt="Behance"></a>
        <a><img src="@/assets/images/icones/logo_dribbble.svg" alt="Dribbble"></a>
        <a href="mailto:clement.torchiat@gmail.com"><img src="@/assets/images/icones/logo_mail.svg" alt="Mail"></a>
      </div>
    </div>
    <div class="localisation_container">
      <h4>Location</h4>
      <p>France, 25 Doubs.<br>
        Copyright © Clément Torchiat 2021.<br>
        All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footingeng"
}
</script>

<style scoped lang="less">
footer {
  text-align: center;
  margin-top: 60px;
  margin-bottom: 56px;
  @media screen and (min-width: 800px) {
    text-align: left;
    display: flex;
    margin: 126px 173.5px 90px;
  }
  @media screen and (min-width: 1600px) {
    margin: 149.2px 213px 119px;
  }
  a {
    @media screen and (min-width: 800px) {
      margin: 0 auto 0 0;
    }
    img {
      height: 67px;
      @media screen and (min-width: 800px) {
        width: 69.7px;
        height: auto;
      }
      @media screen and (min-width: 1600px) {
        width: auto;
        height: 79px;
      }
    }
  }
  .navigation_container {
    margin-top: 30px;
    @media screen and (min-width: 800px) {
      margin: 0 auto 0;
    }
    ul {
      list-style: none;
      padding-left: 0;
      @media screen and (min-width: 800px) {
        margin-top: 0;
      }
      li {
        margin-bottom: 10px;
        @media screen and (min-width: 800px) {
          margin-bottom: 8px;
        }
        @media screen and (min-width: 1600px) {
          margin-bottom: 22px;
        }
        h4 {
          margin: 0;
          font-family: Mukta, sans-serif;
          font-weight: bold;
          font-size: 20px;
          @media screen and (min-width: 800px) {
            font-size: 18px;
          }
          @media screen and (min-width: 1600px) {
            font-size: 22px;
          }
        }
        a {
          font-family: "Mukta Light", sans-serif;
          font-size: 16px;
          text-decoration: none;
          color: black;
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
  .reseaux_container {
    margin-top: 30px;
    @media screen and (min-width: 800px) {
      margin: 0 auto 0;
    }
    h4 {
      margin: 0;
      font-family: Mukta, sans-serif;
      font-weight: bold;
      font-size: 20px;
      @media screen and (min-width: 800px) {
        font-size: 18px;
      }
      @media screen and (min-width: 1600px) {
        font-size: 22px;
      }
    }
    .reseaux {
      margin-top: 11px;
      @media screen and (min-width: 800px) {
        margin-top: 9.4px;
      }
      @media screen and (min-width: 1600px) {
        margin-top: 26px;
      }
      a {
        margin: 0 12.5px;
        @media screen and (min-width: 800px) {
          margin: 0 14.3px 0 0;
        }
        @media screen and (min-width: 1600px) {
          margin: 0 22.8px 0 0;
        }
        &:first-child {
          img {
            width: 16.5px;
            height: auto;
            @media screen and (min-width: 1600px) {
              width: 26.16px;
            }
          }
        }
        &:nth-child(2) {
          img {
            width: 23px;
            height: auto;
            @media screen and (min-width: 1600px) {
              width: 36.6px;
            }
          }
        }
        &:nth-child(3) {
          img {
            width: 14.5px;
            height: auto;
            @media screen and (min-width: 1600px) {
              width: 23.1px;
            }
          }
        }
        &:last-child {
          img {
            width: 14.5px;
            height: auto;
            @media screen and (min-width: 1600px) {
              width: 24px;
            }
          }
        }
      }
    }
  }
  .localisation_container {
    margin-top: 30px;
    @media screen and (min-width: 800px) {
      margin: 0 0 0 auto;
    }
    h4 {
      margin: 0;
      font-family: Mukta, sans-serif;
      font-weight: bold;
      font-size: 20px;
      @media screen and (min-width: 800px) {
        font-size: 18px;
      }
      @media screen and (min-width: 1600px) {
        font-size: 22px;
      }
    }
    p {
      font-family: "Mukta Light", sans-serif;
      font-size: 16px;
      margin: 11px 0 0;
      @media screen and (min-width: 800px) {
        margin: 7px 0 0;
      }
      @media screen and (min-width: 1600px) {
        font-size: 20px;
        margin: 22px 0 0;
      }
    }
  }
}
</style>
