<template>
  <div
    class="
      relative
      flex
      items-top
      justify-center
      min-h-screen
      bg-gray-100
      sm:items-center sm:pt-0
    "
  >
    <img class="object-cover h-50 w-100" :src="image" />
    <button
      class="
        bg-gray-300
        hover:bg-gray-400
        text-gray-800
        font-bold
        py-2
        px-4
        rounded
        inline-flex
        items-center
      "
      @click="getImage()"
    >
      <span>Change Images</span>
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  methods: {
    getImage() {
      this.$store.dispatch("fetchImage");
    },
  },
  created() {
    this.getImage();
  },
  computed: {
    ...mapGetters({
      image: "getImageData",
    }),
  },
};
</script>
