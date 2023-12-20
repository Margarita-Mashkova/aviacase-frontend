<template>
    <HeaderAdmin />
    <div class="form-data">
        <FormTourEdit />
    </div>
</template>
  
<script>
import FormTourEdit from "@/components/FormTourEdit.vue";
import HeaderAdmin from "@/components/HeaderAdmin.vue";

export default {
    name: "PageTourEdit",
    components: {
        FormTourEdit,
        HeaderAdmin
    },
};
</script>
  
<style>
.form-data {
    margin: 20px 480px;
}
</style>
  