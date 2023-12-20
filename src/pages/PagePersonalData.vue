<template>
  <HeaderUser />
  <div class="form-data">
    <PersonalData />
  </div>
  <FooterComponent/>
</template>

<script>
import PersonalData from "@/components/FormPersonalData.vue";
import HeaderUser from "@/components/HeaderUser.vue";
import FooterComponent from "@/components/FooterComponent.vue"

export default {
  name: "PagePersonalData",
  components: {
    PersonalData,
    HeaderUser,
    FooterComponent
  },
};
</script>

<style>
.form-data{
    margin: 25px 500px;
}
</style>
