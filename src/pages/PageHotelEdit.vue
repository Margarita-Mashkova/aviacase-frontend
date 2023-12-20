<template>
    <HeaderAdmin />
    <div class="form-data">
        <FormHotelEdit />
    </div>
</template>
  
<script>
import FormHotelEdit from "@/components/FormHotelEdit.vue";
import HeaderAdmin from "@/components/HeaderAdmin.vue";

export default {
    name: "PageHotelEdit",
    components: {
        FormHotelEdit,
        HeaderAdmin
    },
};
</script>
  
<style scoped>
.form-data {
    margin: 20px 480px;
}
</style>
  