<template>
  <div class="contacts_wrapper">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="contacts">
            <ul class="contacts__list">
              <li class="contacts__list-item">
                <a href="https://www.linkedin.com/in/quicombo/" target="_blank">
                  <font-awesome-icon :icon="['fab', 'linkedin']" size="5x" class="linked"/>
                </a>
              </li>
              <li class="contacts__list-item">
                <a href="https://t.me/Quicombo" target="_blank">
                  <font-awesome-icon :icon="['fab', 'telegram-plane']" size="5x" class="telegram"/>
                </a>
              </li>
              <li class="contacts__list-item">
                <a href="mailto: quicombo@gmail.com" target="_blank">
                  <font-awesome-icon :icon="['fas', 'envelope']" size="5x" class="mail"/>
                </a>
              </li>
              <li class="contacts__list-item">
                <a href="https://t.me/Quicombo" target="_blank">
                  <font-awesome-icon :icon="['fas', 'mobile-alt']" size="5x" class="call_me"/>
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
.contacts_wrapper {
  padding-top: 100px;
  height: 100vh;
}
  .contacts {
    margin-top: 20px;
  }
  .contacts__list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    width: 100%;
  }
  .contacts__list-item {
    margin: 0 10px;
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
  @media screen and (max-width: 576px) {
    .contacts__list {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
