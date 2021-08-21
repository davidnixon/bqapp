<template>
  <div class="color-page" v-bind:style="styleObject">
    <BannerImage :image="image" :alt="alt" v-if="image" />
  </div>
</template>

<script>
import BannerImage from "@/components/BannerImage";

export default {
  name: "ColorPage",
  props: { color: String, image: String, alt: String },
  components: { BannerImage },
  data: () => ({
    width: 600,
    height: 400,
  }),
  created() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  },
  computed: {
    styleObject() {
      return { height: this.height - 48 + "px", backgroundColor: this.color };
    },
  },
  methods: {},
};
</script>

<style lang="scss">
@import "@/styles/theme";
.color-page {
  margin-left: -4rem;
  margin-right: -4rem;
}
</style>
