<template>
  <div class="flex flex-wrap">
    <div class="w-1/2">
      <img :src="home.image" class="h-screen" alt="">
    </div>
      <div class="flex content-center h-screen w-1/2 flex-wrap bg-gray-200 justify-center h-48">
        <div class="w-1/3 p-2 border-2 text-gray-600 border-2 border-red-200 text-center" >
          <nuxt-link to="/bikes/f-650-gs">
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

    return {
      home
    };
  }
};
</script>
