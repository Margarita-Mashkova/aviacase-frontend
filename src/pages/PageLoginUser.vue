<template>
  <div class="form-position">
    <FormLogin />
  </div>
</template>

<script>
import FormLogin from "@/components/FormLogin.vue";

export default {
  name: "PageLoginUser",
  components: {
    FormLogin,
  },
};
</script>

<style>
form{
  width: 100%;
}

body {
  background-image: url("@/assets/login_background.jpg");
  background-size: cover;
}
</style>
