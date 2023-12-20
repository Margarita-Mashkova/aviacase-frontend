<template>
  <div class="form-position">
    <FormRegistration />
  </div>
</template>

<script>
import FormRegistration from "@/components/FormRegistration.vue";

export default {
  name: "PageRegistration",
  components: {
    FormRegistration,
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
