<template>
  <main>
    <HeroSection />
    <!-- <PortfolioContent /> -->
     <ProjectSection/>
    <ContactInfo />
  </main>
</template>

<script>
import HeroSection from "../components/HeroSection.vue";
// import PortfolioContent from "../components/PortfolioContent.vue";
// import ContactInfo from "../components/ContactInfo.vue";
import ProjectSection from "@/components/ProjectSection.vue";

export default {
  components: {
    HeroSection,
    // PortfolioContent,
    // ContactInfo,
    ProjectSection
  },
};
</script>

<style scoped>

/*CONTACT SECTION*/

/*
.contact {
  background: linear-gradient(to bottom, var(--clr-6), var(--clr-2));
  padding: 2rem;
}*/
</style>
