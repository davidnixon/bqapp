<template>
  <cv-grid>
    <cv-row>
      <cv-column :sm="4" :md="8" :lg="16" style="position: relative">
        <ColorPage
          :color="page1"
          image="/images/IMG950087.jpg"
          alt="Barrington Quartet"
        />
        <ColorPage
          :color="page2"
          image="/images/IMG958771.jpg"
          alt="Barrington Quartet"
        />
        <ColorPage :color="page3" />
        <div class="color-bar" />
        <div class="business-card">
          <div>Barrington Quartet</div>
          <div>{{ names }}</div>
          <div>
            <a
              href="mailto:barringtonqt@gmail.com"
              subject="Question about Barrington Quartet"
              >barringtonqt@gmail.com</a
            >
          </div>
        </div>
      </cv-column>
    </cv-row>
  </cv-grid>
</template>
<script>
import ColorPage from "@/components/ColorPage";
import { interactive01, uiBackground, ui02 } from "@/styles/barrington";

export default {
  name: "LandingPage",
  components: { ColorPage },
  data: () => ({
    page1: interactive01,
    page2: uiBackground,
    page3: ui02,
    names: "",
  }),
  created() {
    this.names = process.env.VUE_APP_NAMES || "add names to VUE_APP_NAMES";
  },
  methods: {},
};
</script>

<style lang="scss">
@import "@/styles/theme";
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&display=swap");
.color-bar {
  width: 4rem;
  height: 12rem;
  background-color: $interactive-05;
  position: fixed;
  bottom: 1rem;

  display: none;
}
.business-card {
  // industrial roman
  font-family: "Playfair Display", serif;
  width: 15rem;
  position: fixed;
  top: 3.5rem;
  left: 2.5rem;
  border-style: solid;
  border-color: $interactive-05;
  border-top-width: 1px;
  border-bottom-width: 16px;
  border-left-width: 1px;
  border-right-width: 1px;

  padding-top: 2px;
  padding-bottom: 4px;
  padding-left: 4px;

  div:nth-child(1) {
    font-size: 1.5rem;
  }
  div:nth-child(2) {
    margin-top: 0.5rem;
    font-size: 0.75rem;
    font-style: italic;
  }
  div:nth-child(3) {
    margin-top: 0.5rem;
    font-size: 0.75rem;
    font-style: italic;
  }
}
</style>
