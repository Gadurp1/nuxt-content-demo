<template>
  <div class="w-full flex flex-wrap" :class="`gradient-${bike.theme}`">
    <div class="bg-none w-full md:w-1/2 md:h-screen static pt-12 ">
      <div class="p-12 z-50 text-left md:-mb-40 md:mt-48 md:ml-24 text-section">
        <span class="text-2xl">
          <b class="text-gray-800 uppercase">{{ bike.manufacturer }}</b> |
          <b :class="`text-${bike.theme} font-light`"> {{ bike.power }}</b>
          <h2 class="text-gray-800 text-5xl font-light">
            {{ bike.model }}
          </h2>
        </span>
      </div>
        <img
          v-if="bike"
          :src="bike.image"
          class="w-full z-40 md:ml-24 bike-image"
          style="z-index:1"
          alt=""
        />
        <NavButton
          :bike="prev"
          :image="prev.image"
          :theme="`${bike.theme}-600`"
          direction="left"
          class="absolute top-0 mt-10 ml-12"
        />
    </div>

    <!-- Nuxt content Section -->
    <div
      class="w-full md:w-1/2 md:h-screen flex flex-wrap content-center static text-section"
    >
      <NavButton
        v-if="next"
        :bike="next"
        :image="next.image"
        :theme="`${bike.theme}-600`"
        direction="right"
        class="absolute top-0 right-0 mt-10 mr-12"
      />
      <nuxt-content
        :document="bike"
        class="w-3/4 md:w-2/3 mx-auto text-xl  md:text-gray-400 font-normal mt-8 md:mt-0 "
      />
      <div class="w-3/4 md:w-2/3 mx-auto  py-4 items-center flex flex-wrap">
        <span class="details-label">
          {{ bike.year }}
        </span>
        <span class="details-label">
          {{ bike.color }}
        </span>
        <span class="details-label"> {{ bike.displacement }} </span>
      </div>
    </div>
  </div>
</template>

<script>
import BikeCard from "@/components/BikeCard.vue";
import NavButton from "@/components/NavButton.vue";

export default {
  components: {
    BikeCard,
    NavButton
  },
  head({ $content, params }) {
    return {
      title: `${this.bike.manufacturer} ${this.bike.model}`,
      meta: [
        {
          hid: "description",
          name: this.bike.model,
          content: this.getNuxtContent(this.bike)
        },
        {
          property: "og:title",
          content: this.bike.model
        },
        {
          property: "og:description",
          content: this.getNuxtContent(this.bike)
        },
        {
          property: "og:image",
          content: this.bike.image
        }
      ]
    };
  },
  async asyncData({ $content, params }) {
    const [prev, next] = await $content(`bikes`)
      .sortBy("slug", "asc")
      .surround(params.slug, { before: 1, after: 1 })
      .fetch();

    const bike = await $content(`bikes/${params.slug}`).fetch();
    return {
      bike,
      prev,
      next
    };
  },
  methods: {
    getNuxtContent(bike) {
      return bike.body.children[0].children[0].value;
    }
  }
};
</script>

<!-- shirts.vue -->
<style scoped>
.details-label {
  @apply border text-gray-400 px-3 py-1 rounded mr-2;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
@media (min-width: 640px) {
  .gradient-blue {
    background-image: -webkit-linear-gradient(140deg, #618fe1 55%, #fff 35%);
    min-height: 400px;
  }
  .gradient-red {
    background-image: -webkit-linear-gradient(140deg, #e36461 55%, #fff 35%);
    min-height: 400px;
  }
  .gradient-gray {
    background-image: -webkit-linear-gradient(140deg, #262627 55%, #fff 35%);
    min-height: 400px;
  }
}

@keyframes slide-in {
  0% {
    transform: rotate(xx) translateX(-120%);
    transform-origin: 50% 50%;
  }
  47% {
    transform: rotate(xx) translateX(-60%);
    transform-origin: 50% 50%;
  }
  99% {
    transform: rotate(xx);
    transform-origin: 50% 50%;
  }
  -0% {
    transform: translateX(-120%);
  }
}

@keyframes fade-in {
  0% {
    transform: rotate(xx);
    opacity: 0;
  }
  23% {
    opacity: 0.25;
  }
  48% {
    opacity: 0.5;
  }
  75% {
    opacity: 0.75;
  }
  99% {
    opacity: 1;
  }
}
.text-section {
  animation: fade-in 1s 0s linear;
}
.bike-image {
  animation: slide-in .3s 0s linear;
}

</style>
