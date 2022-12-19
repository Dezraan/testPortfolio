<template>
  <div>
    <section  data-scene data-speed="1.2" class="promo">
      <div @click="this.$store.state.hamburger = true" class="hamburger">
        <span></span>
        <span class="long"></span>
        <span></span>
      </div>
      <div class="container">
        <div class="promo_items">
          <h1 class="title title_fz48 promo__title">Я web-разработчик из города <a  href="https://ru.wikipedia.org/wiki/%D0%9B%D0%B8%D0%BF%D0%B5%D1%86%D0%BA" target="_blank">Липецк</a></h1>
          <div class="promo__btns">
            <a class="promo__link" :class="{'btn': this.$store.state.activeEl === false}"
                @click="this.$store.state.activeEl = false,
                this.$store.state.values= false">Портфолио</a>
            <a class="promo__link" :class="{'btn': this.$store.state.activeEl === true}"
                @click="this.$store.state.activeEl = true != this.$store.state.activeEl,
                this.$store.state.values = !this.$store.state.values">Про меня</a>
          </div>
        </div>
      </div>
    </section>
    <transition name="fade">
      <mini-modal v-if="this.$store.state.values"/>
    </transition>
    <transition name="fade" >
      <MenuBar v-if="this.$store.state.hamburger"/>
    </transition>
  </div>
</template>
<script>
import miniModal from "@/components/Ui/MiniModal";
import MenuBar from "@/components/Ui/MenuBar";
import mixin from "@/Mixins/mixin";
export default {
  mixins:[mixin],
  components: {
    miniModal,
    MenuBar,
  },
}
</script>
<style scoped lang="scss">
.fade-enter-active,  {
  transition: all .2s ease;
}
.fade-leave-active,
.fade-enter-active,  {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-leave-to,
.fade-enter-from
  {
  transform: translateX(0.4px);
  opacity: 0;
}
</style>
