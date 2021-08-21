<template>
  <cv-grid>
    <cv-row>
      <cv-column :sm="4" :md="8" :lg="16" style="position: relative">
        <ColorPage :color="page1" />
        <ColorPage :color="page2" />
        <ColorPage :color="page3" />
        <div class="color-bar" />
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
    page3: ui02
  }),
  created() {
    console.log(this.page1);
  },
  methods: {}
};
</script>

<style lang="scss">
@import "@/styles/theme";
.color-bar {
  width: 4rem;
  height: 12rem;
  background-color: #edb5bf;
  position: fixed;
  bottom: 1rem;
}
</style>
