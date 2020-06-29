<template>
  <div class="p-2 flex flex-wrap items-center w-full">
    <nuxt-link :to="`/bikes/${bike.slug}`">
    <img :src="bike.image" class="w-full" alt="" />
    <div class="text-left z-50">
      <p class="text-2xl">
        <b class="text-gray-800">{{ bike.manufacturer }}</b> |
        <b class="text-blue-400">{{ bike.model }}</b>
      </p>
    </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "BikeCard",
  props: {
    bike: Object
  }
};
</script>
