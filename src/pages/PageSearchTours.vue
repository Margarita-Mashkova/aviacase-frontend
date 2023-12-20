<template>
  <HeaderUser />
  <SearchFilterTour />
  <div class="heading">
    <label>Результаты поиска</label>
  </div>
  <div class="form-data">
    <CardTour />
    <CardTour />
    <CardTour />
  </div>
  <FooterComponent />
</template>

<script>
import CardTour from "@/components/CardTour.vue";
import HeaderUser from "@/components/HeaderUser.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import SearchFilterTour from "@/components/SearchFilterTour.vue";

export default {
  name: "PageSearchTours",
  components: {
    HeaderUser,
    FooterComponent,
    CardTour,
    SearchFilterTour,
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

.heading {
    text-align: -webkit-center;
    font-weight: bold;
    font-size: 22pt;
    margin: 20px 0px;
  }

.card {
  margin: 7px 170px;
}
</style>
