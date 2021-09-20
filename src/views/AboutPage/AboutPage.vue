<template>
  <cv-grid class="bx--no-gutter">
    <cv-row>
      <cv-column :sm="4" :md="6" :lg="10" class="bx--col--no-gutter about">
        <div>
          Formed in April 2019, Barrington Quartet presents a dynamic mix of
          classical and contemporary music brought to life by a passionate group
          of high school students. Calling Roswell, GA its home, the group owes
          the inspiration of its name to historic Barrington Hall in downtown
          Roswell, the site of the quartet’s debut performance.
        </div>
        <div>
          Barrington Quartet offers an engaging balance of traditional and pop
          genres, performing music from the most well-known quartet pieces by
          composers such as Mozart and Dvorak to family favorites including
          <i>The Incredibles</i> and <i>Have a Holly Jolly Christmas</i>. The
          group debuted by performing as part of their high school orchestra
          concerts but quickly expanded to city-wide events. They have showcased
          their passion for music in concerts throughout the local community, at
          business grand openings, historic homes, and senior living facilities.
          Their morning performances at elementary schools have allowed them to
          share their love of music with a younger generation.
        </div>
        <div>
          Though the quartet members are young, they present impressive musical
          careers. All have played instruments since childhood and are currently
          part of the audition-only orchestra at Roswell High School. The
          ensemble received Superior ratings at their past evaluations and have
          been invited to perform at the school community’s Baccalaureate
          service, at intimate wedding ceremonies, and at memorial services.
        </div>
        <div>
          Embodying excellent musicianship and youthful vibrancy, the Barrington
          Quartet brings the beauty and power of music to diverse audiences. The
          group embraces the opportunity to share their sound with new listeners
          of all ages.
        </div>

        <div class="about__git">
          <cv-link
            href="https://github.com/davidnixon/bqapp"
            title="See this code on GitHub"
            target="_blank"
          >
            <LogoGithub16 />
          </cv-link>
        </div>
      </cv-column> </cv-row
  ></cv-grid>
</template>

<script>
import { LogoGithub16 } from "@carbon/icons-vue";
export default {
  name: "AboutPage",
  mixins: [],
  components: { LogoGithub16 },
  props: {},
  data: () => ({}),
};
</script>

<style lang="scss">
@import "@/styles/theme";
.about {
  div {
    @include carbon--type-style("body-long-02");
    margin-top: 1rem;
  }
  &__git {
    position: fixed;
    bottom: 0;
    right: 0;
  }
}
</style>
