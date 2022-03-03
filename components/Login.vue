<template>
  <div class="min-h-screen bg-no-repeat bg-cover bg-center">
    <div class="flex justify-center">
      <div class="bg-white min-h-screen w-1/2 flex justify-center items-center">
        <div>
          <div class="rounded overflow-hidden shadow-lg px-5 py-5">
            <div class="my-3">
              <label class="block text-md mb-2" for="email">Email</label>
              <input
                v-model="user.email"
                class="
                  px-4
                  w-full
                  border-2
                  py-2
                  rounded-md
                  text-sm
                  outline-none
                "
                type="email"
                name="password"
                placeholder="email"
              />
            </div>
            <div class="mt-5">
              <label class="block text-md mb-2" for="password">Password</label>
              <input
                v-model="user.password"
                class="
                  px-4
                  w-full
                  border-2
                  py-2
                  rounded-md
                  text-sm
                  outline-none
                "
                type="password"
                name="password"
                placeholder="password"
              />
            </div>
            <div>
              <button
                class="
                  mt-4
                  mb-3
                  w-full
                  bg-green-500
                  hover:bg-green-400
                  text-white
                  py-2
                  rounded-md
                  transition
                  duration-100
                "
                @click="Login"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "yusuftask@gmail.com",
        password: "12345",
      },
    };
  },
  methods: {
    Login() {
      if (this.user.password == "12345") {
        this.$router.push("/");
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
</style>