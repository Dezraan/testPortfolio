<template>
  <section >
    <div class="about">
      <div class="about__close" @click="this.$store.state.values = false,
        this.$store.state.activeEl = false">
      </div>
      <p class="about__text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis laudantium sit tenetur, quos illo distinctio. Eaque unde consequatur quae provident repellat, nisi dolores, placeat rem laborum assumenda ipsa facere necessitatibus!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi sed eius expedita accusamus sit quasi repudiandae sunt, quibusdam itaque impedit. Quibusdam quas provident dicta molestiae aut exercitationem esse repellat ea!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquam debitis dolores, est molestias incidunt? Quae iure placeat, facilis enim eligendi autem exercitationem earum aspernatur numquam repellendus illo dignissimos eum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sint nihil cum! Aspernatur, vitae ratione dolor fugit, facilis nisi dolores voluptas architecto quisquam nostrum quia itaque illum obcaecati tempore iste?
      </p>
    </div>
  </section>
</template>

<script>
import mixin from "@/Mixins/mixin";
export default {
  mixins:[mixin],
}

</script>

<style scoped>

</style>
