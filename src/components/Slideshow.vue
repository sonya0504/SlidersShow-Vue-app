<template>
  <div class="slider-wrapper" :class="{ loading: isLoading || !loaded }">
    <template v-if="loaded">
      <button
        class="btn btn-primary btn-active btn-lg slides-prev"
        :disabled="start || isLoading"
        @click="changeSlide(-1)"
      >
        <i class="icon icon-arrow-left"></i>
      </button>

      <div class="slides">
        <Slide
          :url="activeUrl"
          :number="number"
          :class="{ dimmed: isLoading }"
        />
      </div>

      <button
        class="btn btn-primary btn-active btn-lg slides-next"
        :disabled="end || isLoading"
        @click="changeSlide(1)"
      >
        <i class="icon icon-arrow-right"></i>
      </button>
    </template>
  </div>
</template>

<script>
import { preloadImage } from "../helpers/helpers";
import Slide from "./Slide";
export default {
  name: "SlideShow",
  props: {
    images: Array
  },
  data() {
    return {
      active: 0,
      isLoading: false,
      loaded: false
    };
  },
  computed: {
    activeUrl() {
      return this.images[this.active].download_url;
    },
    number() {
      return `${this.active + 1}/${this.images.length}`;
    },
    start() {
      return this.active === 0;
    },
    end() {
      return this.active === this.images.length - 1;
    }
  },
  watch: {
    images(value, prevValue) {
      if (prevValue.length === 0 && value.length !== 0) {
        preloadImage(this.activeUrl).then(url => (this.loaded = true));
      }
    },
    $route() {
      this.changeSlide(Number(this.$route.params.index), true);
    }
  },
  methods: {
    changeSlide(dir, router = false) {
      let index = router ? dir - 1 : this.active + dir;
      let slide = this.images[index];

      if (slide !== undefined) {
        this.isLoading = true;

        preloadImage(this.images[index].download_url).then(url => {
          this.active = index;
          this.isLoading = false;
          this.$router.push(`/slide/${index + 1}`).catch(() => {});
        });
      }
    }
  },
  components: {
    Slide
  }
};
</script>

<style scoped>
.slider-wrapper {
  min-height: 300px;
  position: relative;
}

.slides-next,
.slides-prev {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.slides-prev {
  left: 0;
}

.slides-next {
  right: 0;
}
</style>
