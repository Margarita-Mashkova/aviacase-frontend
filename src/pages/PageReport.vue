<template>
    <HeaderAdmin />
    <div class="form-data">
        <FormReport />
    </div>
</template>
  
<script>
import FormReport from "@/components/FormReport.vue";
import HeaderAdmin from "@/components/HeaderAdmin.vue";

export default {
    name: "PageReport",
    components: {
        FormReport,
        HeaderAdmin
    },
};
</script>
  
<style scoped>
.form-data {
    margin: 50px 400px;
}
</style>
  