<template>
  <article class="w-1/2 mx-auto content-center items-center justify-center">
      <BikeCard 
        :bike="bike" 
        :key="index" 
        v-for="(bike, index) in bike"
      />
  </article>
</template>

<script>
import BikeCard from "@/components/BikeCard.vue";

export default {
  components: {
    BikeCard
  },
  async asyncData({ $content }) {
    const bike = await $content("bikes").fetch();

    return {
      bike
    };
  }
};
</script>
