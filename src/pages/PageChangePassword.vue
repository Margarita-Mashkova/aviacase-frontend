<template>
    <HeaderAdmin />
    <div class="form-data">
        <FormChangePassword />
    </div>
</template>
  
<script>
import FormChangePassword from "@/components/FormChangePassword.vue";
import HeaderAdmin from "@/components/HeaderAdmin.vue";

export default {
    name: "PageChangePassword",
    components: {
        FormChangePassword,
        HeaderAdmin
    },
};
</script>
  
<style>
.form-data {
    margin: 100px 500px;
}
</style>
  