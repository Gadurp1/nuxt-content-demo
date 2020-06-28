<template>
  <div class="w-full bg-cyan">
    <article class="w-1/2  mx-auto">
      <div class="flex flex-wrap justify-between ">
        <div v-for="bike in page.bikes" class="w-full">
          <BikeCard :bike="bike"/>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import BikeCard from "@/components/BikeCard.vue";

export default {
    components: {
    BikeCard
  },
  async asyncData({ $content }) {
    const page = await $content("bikes").fetch();

    return {
      page
    };
  }
};
</script>
