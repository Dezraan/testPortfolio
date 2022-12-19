<template>
  <section data-scene data-speed="1.2" class="contacts">
    <div class="container">
      <div class="contacts__wrapper">
        <div class="contacts__photo">
          <div class="contacts__photo-white"></div>
        </div>
        <div class="contacts__descr">
          <h2 class="title title_fz16 contacts__title">Контакты</h2>
          <div class="title title_fz36 contacts__subtitle">Свяжитесь со мной</div>
          <div class="divider"></div>

          <div class="title title_fz14 contacts__text">
            Любым удобным для вас способом:
          </div>
          <div class="contacts__social">
            <a href="#" class="contacts__link">
              <img src="../assets/icons/social/facebook_straight.svg" alt="facebook">
            </a>
            <a href="#" class="contacts__link">
              <img src="../assets/icons/social/telegram.svg" alt="telegram">
            </a>
            <a href="#" class="contacts__link">
              <img src="../assets/icons/social/instagram_straight.svg" alt="instagram">
            </a>
          </div>
          <div class="title title_fz14 contacts__text">
            Или оставьте ваши данные и я сама вам напишу:
          </div>

          <form action="#" class="contacts__form">
            <div class="contacts__input">
              <input required name="name" id="name" type="text">
              <label for="name">Ваше имя</label>
            </div>
            <div class="contacts__input">
              <input required name="email" id="email" type="email">
              <label for="email">Ваша почта</label>
            </div>

            <div class="contacts__textarea">
              <textarea name="text" id="text"></textarea>
              <label for="text">Ваше сообщение</label>
            </div>
            <div class="contacts__triggers">
              <button class="contacts__btn btn">Отправить сообщение</button>
              <div class="contacts__policy">
                <input required type="checkbox">
                <span>Я согласен(а) с <a href="/policy.html">политикой конфиденциальности</a></span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {

}
</script>

<style scoped>

</style>
