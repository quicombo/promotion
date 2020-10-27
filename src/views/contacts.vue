<template>
  <div class="contacts_wrapper">
    <vue-particles color="#dedede" class="background_shapes"></vue-particles>
    <div class="container absolute">
      <div class="row">
        <div class="col-lg-12">
          <div class="header">
            Держим связь
          </div>
        </div>
        <div class="col-lg-12">
          <div class="contacts">
            <ul class="contacts__list">
              <li class="contacts__list-item">
                <a href="https://www.linkedin.com/in/quicombo/" target="_blank">
                  <font-awesome-icon :icon="['fab', 'linkedin']" size="3x" class="linked"/>
                </a>
              </li>
              <li class="contacts__list-item">
                <a href="https://t.me/Quicombo" target="_blank">
                  <font-awesome-icon :icon="['fab', 'telegram-plane']" size="3x" class="telegram"/>
                </a>
              </li>
              <li class="contacts__list-item">
                <a href="mailto: quicombo@gmail.com" target="_blank">
                  <font-awesome-icon :icon="['fas', 'envelope']" size="3x" class="mail"/>
                </a>
              </li>
              <li class="contacts__list-item" title="Call me">
                <a href="tel:+375445672267" target="_blank">
                  <font-awesome-icon :icon="['fas', 'mobile-alt']" size="3x" class="call_me"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "contacts"
    }
</script>

<style scoped lang="scss">
  .header {
    text-align: center;
    font-size: 20px;
  }
.contacts_wrapper {
  padding-top: 100px;
  height: 100vh;
}
.absolute {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
}
  .contacts {
    margin-top: 20px;
  }
  .contacts__list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
  .contacts__list-item {
    position: relative;
    color: white;
    width: 256px;
    height: 64px;
    line-height: 64px;
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 10px 15px;
    &:before, &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      bottom: 0;
      left: 0;
      z-index: 1;
      transition: all 0.3s;
      border: 1px solid var(--dynamic-title-color);
    }
    a {
      z-index: 2;
      transition: all 0.3s;
      tranform: scale(1, 1);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
.contacts__list-item:hover::after {
  animation-name: rotatecw;
  animation-duration: 2s;
}
.contacts__list-item:hover::before {
  animation-name: rotateccw;
  animation-duration: 3s;
}
.contacts__list-item:hover::after, .contacts__list-item:hover::before {
  left: 38%;
  //transform: translateX(-50%);
  //left: 96px;
  width: 64px;

  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes rotatecw {
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
}

@keyframes rotateccw {
  from {transform: rotate(0deg);}
  to {transform: rotate(-360deg);}
}
  .linked {
    color: #2867B2;
  }
  .telegram {
    color: #0088cc;
  }
  .call_me {
    color: #AEE1CD;
  }
  .mail {
    color: #5398BE;
  }
.background_shapes {
  position: relative;
}
  @media screen and (max-width: 576px) {
    .contacts__list {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
