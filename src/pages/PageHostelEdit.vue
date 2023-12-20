<template>
    <HeaderAdmin />
    <div class="form-data">
        <FormHostelEdit />
    </div>
</template>
  
<script>
import FormHostelEdit from "@/components/FormHostelEdit.vue";
import HeaderAdmin from "@/components/HeaderAdmin.vue";

export default {
    name: "PageHostelEdit",
    components: {
        FormHostelEdit,
        HeaderAdmin
    },
};
</script>
  
<style>
.form-data {
    margin: 20px 480px;
}
</style>
  