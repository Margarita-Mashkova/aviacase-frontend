<template>
  <HeaderUser />
  <img src="../assets/image_main2.jpg" height="100%" width="100%" />
  <div class="heading" v-if="this.tours.length != 0">
    <label>Популярные туры</label>
  </div>
  <div class="form-data" v-if="this.tours.length != 0">
    <div v-for="tour in tours" v-bind:key="tour">
      <CardTour :tour="tour" />
    </div>
  </div>
  <FooterComponent />
</template>

<script>
import CardTour from "@/components/CardTourVertical.vue";
import HeaderUser from "@/components/HeaderUser.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import TourServise from "@/services/TourService"

export default {
  name: "PageHomeUser",
  data() {
    return {
      tours: []
    }
  },
  components: {
    HeaderUser,
    FooterComponent,
    CardTour,
  },
  methods: {
    findAllTours() {
      TourServise.findAllTours().then(response => {
        if (response.status == 200) {
          if (response.data.length >= 3) {
            for (let i = 0; i < 3; i++) {
              this.tours.push(response.data[i])
            }
          }
        }
      })
    },
  },
  mounted() {
    this.findAllTours()
  }
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

.card {
  margin: 10px 5px;
  width: 100%;
}
</style>
