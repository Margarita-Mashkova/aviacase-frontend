<template>
    <HeaderAdmin />
    <div class="heading">
        <label>Список туров</label>
    </div>
    <div class="btn">
        <button class="btn-simple">Создать тур</button>
    </div>
    <div class="form-data">
        <CardTour />
        <CardTour />
        <CardTour />
    </div>
</template>
  
<script>
import CardTour from "@/components/CardTour.vue";
import HeaderAdmin from "@/components/HeaderAdmin.vue";

export default {
    name: "PageToursAdmin",
    components: {
        HeaderAdmin,
        CardTour
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
  