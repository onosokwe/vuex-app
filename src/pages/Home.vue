<template>
  <div>
    <h1>Hi {{ user }}</h1>
    <p>{{ secretMessage }}</p>
    <input type="button" value="Logout" @click="logout" />
  </div>
</template>
<script>
import AuthService from "@/services/Auth.js";
export default {
  data() {
    return {
      secretMessage: "",
      user: "",
    };
  },
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("/login");
    }
    this.user = this.$store.getters.getUser;
    this.secretMessage = await AuthService.getSecretContent();
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
  },
};
</script>
