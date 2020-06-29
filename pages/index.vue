<template>
  <article class="w-1/2  mx-auto">
  <SiteNav />
    <div class="flex flex-wrap justify-between ">
      <div class="w-full">
        <BikeCard :bike="bike"/>
      </div>
    </div>
  </article>
</template>

<script>
import BikeCard from "@/components/BikeCard.vue";
import SiteNav from "@/components/SiteNav.vue";

export default {
    components: {
    BikeCard,
    SiteNav
  },
  async asyncData({ $content }) {
    const bike = await $content('bikes').where({ manufacturer: { $eq: 'Ducati' } }).limit(1).fetch()
    console.log(bike)
    return {
      bike
    };
  }
};
</script>
