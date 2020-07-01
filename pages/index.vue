<template>
  <div class="flex flex-wrap">
    <div class="w-1/2">
      <img :src="home.image" class="h-screen" alt="" />
    </div>
    <div
      class="flex content-center h-screen w-1/2 flex-wrap bg-gray-200 justify-center h-48 overflow-y-auto"
    >
      <div class="md:w-2/3 mx-auto">
        <BikeCard v-for="bike in bikes" :bike="bike"/>
        <nuxt-link
          to="/bikes/f-650-gs"
          data-test="enter-button"
          class="w-1/3 p-2 border-2 text-white bg-red-700 border-2 border-red-800 text-center hover:bg-white hover:border-2 hover:text-red-800 shadow-lg"
        >
          ENTER GARAGE
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const home = await $content("home").fetch();
    const bikes = await $content("bikes").fetch();

    return {
      home,
      bikes
    };
  }
};
</script>
