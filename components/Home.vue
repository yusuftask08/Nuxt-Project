<template>
  <div class="mx-5 mt-2">
    <nav class="border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div
        class="container flex flex-wrap justify-between items-center mx-auto"
      >
        <a class="flex items-center">
          <span
            class="
              self-center
              text-xl
              font-semibold
              whitespace-nowrap
              dark:text-white
            "
            >Yengec App</span
          >
        </a>
        <div class="flex md:order-2">
          <button
            type="button"
            class="
              bg-gray-300
              hover:bg-gray-400
              text-gray-800
              font-bold
              py-2
              px-4
              rounded
              items-center
            "
            @click="Logout"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
    <div
      class="
        mt-16
        relative
        flex flex-col
        items-top
        justify-top
        sm:items-center sm:pt-0
      "
    >
      <button
        class="
          bg-gray-300
          hover:bg-gray-400
          text-gray-800
          font-bold
          py-2
          mb-6
          px-4
          rounded
          items-center
        "
        @click="getImage()"
      >
        <span>Random Images</span>
      </button>
      <div>
        <img class="object-contain h-58 w-96" :src="image" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  methods: {
    getImage() {
      this.$store.dispatch("photo/get");
    },
    Logout() {
      this.$router.push("/login");
    },
  },
  created() {
    this.getImage();
  },
  computed: {
    ...mapGetters({
      image: "photo/getImageData",
    }),
  },
};
</script>
