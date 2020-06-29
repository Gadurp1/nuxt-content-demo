<template>
  <div class="w-full flex flex-wrap">
    <div class="bg-white w-full md:w-1/2 md:h-screen static pt-12">
      <nuxt-link v-if="prev" tag="button" :to="`/bikes/${prev.slug}`">
        <div
          v-if="prev"
          class="border border-white rounded flex justify-between flex-row absolute top-0 left-0 mt-10 mr-10 bg-white ml-12"
        >
          <b class="text-2xl m-2 font-bold shadow"><</b>
          <img :src="prev.image" class="h-12" alt="" />
        </div>
      </nuxt-link>
      <div class="p-12 z-50 text-left">
        <span class="text-2xl">
          <b class="text-gray-800">{{ bike.manufacturer }}</b> |
          <b :class="`text-${theme}`"> {{ bike.power }}</b>
          <h2 class="text-4xl font-bold">
            {{ bike.model }}
          </h2>
        </span>
      </div>
      <transition
        name="slide-fade"
      >
        <img :src="bike.image" class="w-full z-40" style="z-index:1" alt="" />
      </transition>
    </div>

    <!-- Nuxt content Section -->
    <div
      class="w-full md:w-1/2 md:h-screen flex flex-wrap content-center static text-section"
      :class="`md:bg-${bike.theme}`"
    >
      <nuxt-link v-if="next" tag="button" :to="`/bikes/${next.slug}`">
        <div
          v-if="next"
          class="border border-white rounded flex justify-between flex-row absolute top-0 right-0 mt-10 mr-10 bg-white mr-12"
        >
          <img :src="next.image" class="h-12" alt="" />
          <b class="text-2xl m-2 font-bold shadow" :class="`text-${bike.theme}`"
            >></b
          >
        </div>
      </nuxt-link>
      <nuxt-content
        :document="bike"
        class="w-3/4 md:w-2/3 mx-auto md:-mt-12 text-md lg:text-2xl xl:text-3xl md:text-gray-400"
      />
      <div class="w-3/4 md:w-2/3 mx-auto  py-4 items-center flex flex-wrap">
        <span
          class="border text-gray-400 px-3 py-1 rounded mr-2"
          :class="`bg-${theme}`"
          >{{ bike.year }}</span
        >
        <span class="border text-gray-400 px-3 py-1 rounded mr-2">{{
          bike.color
        }}</span>
        <span class="border text-gray-400 px-3 py-1 rounded mr-2">{{
          bike.displacement
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import BikeCard from "@/components/BikeCard.vue";

export default {
  components: {
    BikeCard
  },
  transition(to, from) {
    return "slide-right";
  },
  async asyncData({ $content, params }) {
    console.log(params);

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
  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
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
  .text-section{
    background-image: -webkit-linear-gradient(210deg, #34ADFF 55%, #fff 35%);
    min-height: 400px;
  }
</style>
