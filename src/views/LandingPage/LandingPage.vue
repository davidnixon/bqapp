<template>
  <cv-grid class="bx--no-gutter">
    <cv-row>
      <cv-column class="bx--col--no-gutter">
        <div
          class="bq-slide"
          v-for="(img, index) in slideshow.slice(0, 1)"
          :key="`${img.src}${index}`"
        >
          <div class="bq-slide__container">
            <img
              :src="img.src"
              alt="Barrington Quartet"
              v-bind:style="styleObject"
              v-bind:class="{
                'bq-slide--changing': change,
                'bq-slide--show': !change,
              }"
              @transitionend="actionShow(index)"
            />
          </div>
        </div>
      </cv-column>
    </cv-row>
    <cv-row>
      <cv-column :sm="4" :md="4" :lg="4">
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
export default {
  name: "LandingPage",
  components: {},
  data: () => ({
    change: false,
    names: "",
    slideshow: [
      { src: "/images/IMG958771.jpg" },
      { src: "/images/IMG950087.jpg" },
    ],
    width: 0,
    height: 0,
    duration: 8000, // ms
  }),
  created() {
    this.names = process.env.VUE_APP_NAMES || "add names to VUE_APP_NAMES";
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    window.addEventListener("resize", this.actionResize);
    setTimeout(() => {
      this.rotate();
    }, this.duration);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.actionResize);
  },
  computed: {
    styleObject() {
      return { maxHeight: `${this.height - 47 - 5}px` };
    },
  },
  watch: {},

  methods: {
    rotate() {
      this.change = true;
    },
    actionShow(index) {
      if (index === 0 && this.change) {
        const last = this.slideshow.slice(-1)[0];
        this.slideshow.splice(-1);
        this.slideshow.unshift(last);
        setTimeout(() => {
          this.change = false;
        }, 0);
        setTimeout(() => {
          this.rotate();
        }, this.duration);
      }
    },
    actionResize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/theme";
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&display=swap");
.bx--col-lg-1 {
  padding-left: 0;
  padding-right: 0;
}
.bq-slide {
  &__container {
    border-style: solid;
    border-color: $interactive-05;
    border-top-width: 1px;
    border-bottom-width: 4px;
    border-left-width: 1px;
    border-right-width: 1px;
    margin-bottom: 1rem;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    img {
      max-width: 100%;
      display: block;
    }
  }
  &--changing {
    transition: opacity 1s ease-out;
    opacity: 0;
  }
  &--show {
    transition: opacity 1s ease-in;
    opacity: 1;
  }
}
.business-card {
  position: fixed;
  bottom: 0.5rem;
  left: 0.5rem;
  // industrial roman
  font-family: "Playfair Display", serif;
  border-style: solid;
  border-color: $interactive-05;
  border-top-width: 1px;
  border-bottom-width: 16px;
  border-left-width: 1px;
  border-right-width: 1px;

  padding-top: 2px;
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  background-color: $ui-02;
  @include carbon--breakpoint-down("lg") {
    background-color: #6d7476aa;
  }

  div:nth-child(1) {
    font-size: 2.75rem;
  }
  div:nth-child(2) {
    margin-top: 0.5rem;
    font-size: 1rem;
    font-style: italic;
    @include carbon--breakpoint-down("lg") {
      font-size: 0.88rem;
    }
  }
  div:nth-child(3) {
    margin-top: 0.5rem;
    font-size: 1rem;
    font-style: italic;
  }
}
</style>
