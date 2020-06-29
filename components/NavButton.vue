<template>
  <div>
    <nuxt-link v-if="bike" tag="button" :to="`/bikes/${bike.slug}`" >
      <div
        v-if="bike"
        :class="positioning.class"
        class="border border-white rounded flex justify-between flex-row absolute top-0  mt-10 bg-white"
      >
        <b class="text-2xl m-2 font-bold shadow" v-if="direction == 'left'" :class="`text-${theme}`">
          {{positioning.icon}}
        </b>
        <img :src="image" class="h-12" alt="" />
        <b class="text-2xl m-2 font-bold shadow" v-if="direction == 'right'" :class="`text-${theme}`">
          {{positioning.icon}}
        </b>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "NextButton",
  props: {
    bike: Object,
    theme: String,
    direction: String,
    image: String
  },
  computed: {
    positioning() {
      if (this.direction == 'right') {
        return {
          class: 'mr-12 right-0',
          icon: '>'
        }
      }
      return {
          class: 'ml-12 left-0',
          icon: '<'
        }
    }
  }
};
</script>
