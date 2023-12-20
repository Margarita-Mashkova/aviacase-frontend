<template>
    <HeaderAdmin />
    <div class="form-data">
        <FormBindHostels />
    </div>
</template>
  
<script>
import FormBindHostels from "@/components/FormBindHostels.vue";
import HeaderAdmin from "@/components/HeaderAdmin.vue";

export default {
    name: "PageBindHostels",
    components: {
        FormBindHostels,
        HeaderAdmin
    },
};
</script>
  
<style>
.form-data {
    margin: 55px 480px;
}
</style>
  