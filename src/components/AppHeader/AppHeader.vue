<template>
  <cv-header aria-label="Welcome">
    <cv-skip-to-content href="#main-content"
      >Skip to content</cv-skip-to-content
    >
    <cv-header-name to="/" prefix="Barrington Quartet">Welcome</cv-header-name>
    <cv-header-nav aria-label="navigation">
      <cv-header-menu-item :to="{ name: 'about-page' }">
        Our Story
      </cv-header-menu-item>
    </cv-header-nav>
  </cv-header>
</template>

<script>
export default {
  name: "AppHeader",
  data: () => ({}),
  created() {},
  methods: {},
};
</script>

<style lang="scss">
@import "@/styles/theme";
</style>
