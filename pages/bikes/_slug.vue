<template>
  <div class="w-full flex flex-wrap" :class="`gradient-${bike.theme}`">
    <div class="bg-none w-full md:w-1/2 md:h-screen static pt-12">
      <nuxt-link v-if="prev" tag="button" :to="`/bikes/${prev.slug}`">
        <NavButton
          :bike="prev"
          :image="prev.image"
          :theme="`${bike.theme}-600`"
          direction="left"
        />
      </nuxt-link>
      <div class="p-12 z-50 text-left">
        <span class="text-2xl">
          <b class="text-gray-800">{{ bike.manufacturer }}</b> |
          <b :class="`text-${bike.theme}`"> {{ bike.power }}</b>
          <h2 class="text-6xl font-bold">
            {{ bike.model }}
          </h2>
        </span>
      </div>
      <transition name="slide-fade">
        <img
        v-if="bike"
          :src="bike.image"
          class="w-full z-40 ml-24"
          style="z-index:1"
          alt=""
        />
      </transition>
    </div>

    <!-- Nuxt content Section -->
    <div
      class="w-full md:w-1/2 md:h-screen flex flex-wrap content-center static"
    >
      <NavButton
        v-if="next"
        :bike="next"
        :image="next.image"
        :theme="`${bike.theme}-600`"
        direction="right"
      />
      <nuxt-content
        :document="bike"
        class="w-3/4 md:w-2/3 mx-auto md:-mt-12 text-md lg:text-2xl xl:text-3xl md:text-gray-400"
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
  transition(to, from) {
    return "slide-right";
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
.gradient-blue {
  background-image: -webkit-linear-gradient(210deg, #618fe1 55%, #fff 35%);
  min-height: 400px;
}
.gradient-red {
  background-image: -webkit-linear-gradient(210deg, #e36461 55%, #fff 35%);
  min-height: 400px;
}
.gradient-gray {
  background-image: -webkit-linear-gradient(210deg, #262627 55%, #fff 35%);
  min-height: 400px;
}
</style>
