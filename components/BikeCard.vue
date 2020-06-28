<template>
  <div class="p-2 flex flex-wrap py-10">
    <div class="text-left -mb-24 z-50">
      <p class="text-2xl"> 
        <b class="text-gray-800">{{ bike.manufacturer }}</b> |
        <b class="text-blue-400">{{bike.year}} {{bike.power}}</b>
      </p>
      <h1 class="text-4xl font-bold">{{ bike.model }}</h1>
      <span>{{bike.color}}</span>
      <span>{{bike.displacement}}</span>
    </div>
    <div class="rounded shadow w-full">
      <img :src="bike.image" class="w-full" alt="" />
      <nuxt-content :document="bike" />
    </div>
  </div>
</template>y

<script>
export default {
  name: "BikeCard",
  props: {
    bike: Object
  }
};
</script>