<template>
  <div class="w-full flex flex-wrap">
    <div class="bg-white w-full md:w-1/2 md:h-screen static pt-12">
        <div class="border border-white p-2 absolute top-0 left-0 mt-10 ml-10 text-white font-bold rounded" :class="`bg-${bike.theme}`">
        <nuxt-link
          v-if="next"
          tag="button"
          :to="`/bikes/${next.slug}`"
        >
         < Prev
        </nuxt-link>
      </div>
      <div class="p-12 z-50 text-left">
        <span class="text-2xl">
          <b class="text-gray-800">{{ bike.manufacturer }}</b> |
          <b :class="`text-${theme}`"> {{ bike.power }}</b>
          <h2 class="text-4xl font-bold">
            {{ bike.model }}
          </h2>
        </span>
      </div>
      <img :src="bike.image" class="w-full z-40" style="z-index:1" alt="" />
    </div>
    <!-- Nuxt content Section -->
    <div
      class="w-full md:w-1/2 md:h-screen flex flex-wrap content-center static"
      :class="`md:bg-${bike.theme}`"
    >
      <div class="border border-white p-2 absolute top-0 right-0 mt-10 mr-10 bg-white">
        <nuxt-link
          v-if="next"
          tag="button"
          :to="`/bikes/${next.slug}`"
        >
          Next >
        </nuxt-link>
      </div>
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
      .only("slug")
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
.page-enter-active {
  animation: acrossIn 0.4s ease-out both;
}
.page-leave-active {
  animation: acrossOut 0.6s ease-in both;
}
@keyframes acrossIn {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes acrossOut {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
}
.clothrack {
  font-family: "Indie Flower", cursive;
  padding: 50px;
  width: 100vw;
  height: 100vh;
}
.clothes {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 500px;
}
html,
body {
  font-family: "Indie Flower", cursive;
  background: #9fdfbf;
  color: #000000;
  width: 100vw;
  height: 100vh;
}
h1 {
  width: 1000px;
  justify-content: center;
  display: flex;
}
a,
a:visited {
  color: #ffffff;
  text-decoration: none;
}
</style>
