<template>
  <div class="banner-image">
    <img :src="image" :alt="alt" :title="alt" v-bind:style="styleObject" />
  </div>
</template>

<script>
export default {
  name: "BannerImage",
  props: { image: String, alt: String },
  data: () => ({
    scroll: 400,
    height: 600,
    width: 400,
  }),
  created() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  },
  computed: {
    styleObject() {
      return {
        height: this.height - 48 + "px",
        maxWidth: `${this.width * 0.8}px`,
      };
    },
  },
  methods: {},
};
</script>

<style lang="scss">
@import "@/styles/theme";
.banner-image {
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  img {
    margin-left: auto;
    margin-right: auto;
    object-fit: contain;
  }
}
</style>
