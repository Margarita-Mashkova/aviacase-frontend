<template>
  <div class="form-position">
    <FormLogin />
  </div>
</template>

<script>
import FormLogin from "@/components/FormLogin.vue";

export default {
  name: "PageLoginAdmin",
  components: {
    FormLogin,
  },
};
</script>

<style>
form{
  width: 100%;
}
</style>
