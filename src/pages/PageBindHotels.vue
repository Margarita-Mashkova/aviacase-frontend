<template>
    <HeaderAdmin />
    <div class="form-data">
        <FormBindHotels />
    </div>
</template>
  
<script>
import FormBindHotels from "@/components/FormBindHotels.vue";
import HeaderAdmin from "@/components/HeaderAdmin.vue";

export default {
    name: "PageBindHotels",
    components: {
        FormBindHotels,
        HeaderAdmin
    },
};
</script>
  
<style scoped>
.form-data {
    margin: 55px 480px;
}
</style>
  