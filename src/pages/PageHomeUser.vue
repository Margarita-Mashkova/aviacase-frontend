<template>
  <HeaderUser />
  <img src="../assets/image_main2.jpg" height="100%" width="100%" />
  <div class="heading">
    <label>Популярные туры</label>
  </div>
  <div class="form-data">
    <CardTour/>
    <CardTour/>
    <CardTour/>
  </div>
  <FooterComponent />
</template>

<script>
import CardTour from "@/components/CardTourVertical.vue";
import HeaderUser from "@/components/HeaderUser.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "PageHomeUser",
  components: {
    HeaderUser,
    FooterComponent,
    CardTour,
  },
};
</script>

<style scoped>
.form-data {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 20px;  
}

.heading {
  text-align: -webkit-center;
  font-weight: bold;
  font-size: 22pt;
  margin: 20px 0px;
}

.card{
  margin: 10px 5px;
  width: 25%;
}
</style>
