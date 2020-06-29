<template>
  <div>
    <nuxt-link v-if="bike" tag="button" :to="`/bikes/${bike.slug}`" >
      <div
        v-if="bike"
        :class="positioning.class"
        class="border border-white rounded flex justify-between flex-row bg-white"
      >
        <b class="text-2xl font-bold px-1" v-if="direction == 'left'" :class="`text-${theme}`">
          {{positioning.icon}}
        </b>
        <img :src="image" class="h-10" alt="" />
        <b class="text-2xl font-bold px-1" v-if="direction == 'right'" :class="`text-${theme}`">
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
          icon: '>'
        }
      }
      return {
          icon: '<'
        }
    }
  }
};
</script>
