<template>
  <HeaderUser />

  <div v-if="this.$route.name == 'hotels'">
    <SearchFilterHotel @updateHotelsList="onUpdateHotelsList" />
    <div class="heading">
      <label>Результаты поиска</label>
    </div>
    <div class="form-data" v-for="hotel in hotels" v-bind:key="hotel">
      <CardHotel :hotel="hotel" />
    </div>
    <div class="nothing" v-if="this.hotels.length == 0">
      <label>Отели по Вашему запросу не найдены :(</label>
    </div>
  </div>

  <div v-if="this.$route.name == 'choose-hotel'">
    <div class="heading">
      <label>Выберите один из отелей</label>
    </div>
    <div class="form-data" v-for="hotel in tourHotels" v-bind:key="hotel">
      <CardHotel :hotel="hotel" />
    </div>
    <div class="nothing" v-if="this.tourHotels.length == 0">
      <label>К данному туру не привязано ни одного отеля :(</label>
    </div>
  </div>
  <FooterComponent />
</template>
  
<script>
import CardHotel from "@/components/CardHotel.vue";
import HeaderUser from "@/components/HeaderUser.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import SearchFilterHotel from "@/components/SearchFilterHotel.vue";
import HotelService from "@/services/HotelService";
import TourService from "@/services/TourService";

export default {
  name: "PageSearchHotels",
  data() {
    return {
      hotels: [],
      tourHotels: []
    }
  },
  components: {
    HeaderUser,
    FooterComponent,
    CardHotel,
    SearchFilterHotel
  },
  methods: {
    findAllHotels() {
      HotelService.findAllHotels().then(response => {
        if (response.status == 200) {
          this.hotels = response.data
        }
      })
    },
    onUpdateHotelsList(data) {
      this.hotels = data.hotels
    },
    findTour() {
      TourService.findTour(localStorage.getItem("purchase-tourId")).then(response => {
        if (response.status == 200) {
          this.tourHotels = response.data.hotels
        }
      })
    }
  },
  mounted() {
    this.findAllHotels()
    if (localStorage.getItem("purchase-tourId") != null) {
      this.findTour()
    }
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
  margin: 229px 0px;
}

.card {
  margin: 7px 200px;
}
</style>
  