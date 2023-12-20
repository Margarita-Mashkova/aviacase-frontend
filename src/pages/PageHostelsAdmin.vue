<template>
    <HeaderAdmin />
    <div class="heading">
        <label>Список отелей</label>
    </div>
    <div class="btn">
        <button class="btn-simple">Создать отель</button>
    </div>
    <div class="form-data">
        <CardHostel />
        <CardHostel />
        <CardHostel />
    </div>
</template>
  
<script>
import CardHostel from "@/components/CardHostel.vue";
import HeaderAdmin from "@/components/HeaderAdmin.vue";

export default {
    name: "PageHostelsAdmin",
    components: {
        HeaderAdmin,
        CardHostel
    },
};
</script>
  
<style scoped>
.form-data {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-bottom: 20px;
}

.card {
    margin: 7px 170px;
}

.btn{
    display: flex;
    justify-content: center;
}

.btn-simple{
    width: auto;
    margin: 0px 0px 20px 0px;
    padding: 15px 100px;
}
</style>
  