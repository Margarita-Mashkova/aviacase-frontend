<template>
    <HeaderAdmin />
    <div class="heading">
        <label>Список отелей</label>
    </div>
    <div class="btn">
        <button class="btn-simple">Создать отель</button>
    </div>
    <div class="form-data">
        <CardHotel />
        <CardHotel />
        <CardHotel />
    </div>
</template>
  
<script>
import CardHotel from "@/components/CardHotel.vue";
import HeaderAdmin from "@/components/HeaderAdmin.vue";

export default {
    name: "PageHotelsAdmin",
    components: {
        HeaderAdmin,
        CardHotel
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
  