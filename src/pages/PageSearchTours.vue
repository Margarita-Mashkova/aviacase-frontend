<template>
  <HeaderUser />
  <SearchFilterTour @updateToursList="onUpdateToursList" />
  <div class="heading">
    <label>Результаты поиска</label>
  </div>

  <div class="tours-container">
    <div class="form-data" v-for="tour in tours" v-bind:key="tour">
      <CardTour :tour="tour" />
    </div>
  </div>

  <div class="nothing" v-if="this.tours.length == 0">
    <label>Туры по Вашему запросу не найдены :(</label>
  </div>
  <FooterComponent />
</template>

<script>
import CardTour from "@/components/CardTour.vue";
import HeaderUser from "@/components/HeaderUser.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import SearchFilterTour from "@/components/SearchFilterTour.vue";
import TourServise from "@/services/TourService"

export default {
  name: "PageSearchTours",
  data() {
    return {
      tours: []
    }
  },
  components: {
    HeaderUser,
    FooterComponent,
    CardTour,
    SearchFilterTour,
  },
  methods: {
    findAllTours() {
      TourServise.findAllTours().then(response => {
        if (response.status == 200) {
          this.tours = response.data
        }
      })
    },
    onUpdateToursList(data) {
      this.tours = data.tours
    }
  },
  created() {
    this.findAllTours()
  }
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

.nothing {
  text-align: -webkit-center;
  font-weight: bold;
  font-size: 22pt;
  margin: 177px 0px;
}

.tours-container {
  margin-bottom: 60px;
}

.card {
  margin: 7px 200px;
}
</style>
