<template>
  <AsideBar/>
  <PromoSections/>
  <ResumeSection/>
  <SkillsSections/>
  <PortfolioSections/>
  <ContactsSections/>
  <AnimationsUi/>
</template>

<script>
import PromoSections from "@/components/PromoSections";
import AsideBar from "@/components/Ui/AsideBar";
import ResumeSection from "@/components/ResumeSection";
import SkillsSections from "@/components/SkillsSections";
import PortfolioSections from "@/components/PortfolioSections";
import ContactsSections from "@/components/ContactsSections";
import AnimationsUi from "@/components/Ui/AnimationsUi";
export default {
  components: {

    PromoSections,
    AnimationsUi,
    ContactsSections,
    PortfolioSections,
    ResumeSection,
    SkillsSections,
    AsideBar,
  },
}
</script>

<style scoped>

</style>
