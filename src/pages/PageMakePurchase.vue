<template>
  <HeaderUser />
  <div class="form-data">
    <h4>Оформление тура</h4>
    <label class="heading">Выбранный тур</label>
    <div class="tour-info" v-if="this.tour != null">
      <CardTour :tour="tour" />
    </div>

    <label class="heading">Выбранный отель</label>
    <div class="hostel-info" v-if="this.hotel != null">
      <CardHotel :hotel="hotel" />
    </div>

    <div class="parametrs">
      <div class="parametr">
        <label>Количество туристов:</label>
        <input class="input-simple" type="number" v-model="tourists">
      </div>
      <div class="parametr">
        <label>Количество ночей:</label>
        <input class="input-simple" type="number" v-model="nights">
      </div>
    </div>

    <div class="btn-bar">
      <button class="btn-simple" @click="confirm($event)">Перейти к покупке</button>
    </div>
  </div>
  <FooterComponent />
</template>

<script>
import CardTour from "@/components/CardTour.vue";
import CardHotel from "@/components/CardHotel.vue";
import HeaderUser from "@/components/HeaderUser.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import TourService from '@/services/TourService';
import HotelService from '@/services/HotelService';

export default {
  name: "PageMakePurchase",
  data() {
    return {
      tour: null,
      hotel: null,
      nights: '',
      tourists: ''
    }
  },
  components: {
    HeaderUser,
    CardTour,
    FooterComponent,
    CardHotel,
  },

  methods: {
    findTour() {
      TourService.findTour(localStorage.getItem("purchase-tourId")).then(response => {
        if (response.status == 200) {
          this.tour = response.data
        }
      })
    },
    findHotel() {
      HotelService.findHotel(localStorage.getItem("purchase-hotelId")).then(response => {
        if (response.status == 200) {
          this.hotel = response.data
        }
      })
    },

    confirm() {
      var sum = (this.tour.price + this.hotel.price) * this.tourists * this.nights
      localStorage.setItem('purchase-tourists', this.tourists)
      localStorage.setItem('purchase-nights', this.nights)
      localStorage.setItem('purchase-sum', sum)
      this.$router.push("/buy-tour")
    }
  },
  created() {
    this.findTour(),
      this.findHotel()
  }
};
</script>

<style scoped>
.form-data {
  margin: 25px 150px;
  background-color: #fcfcfc;
  border-radius: 25px;
  color: black;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-color: #128cad;
}

.parametrs {
  display: flex;
  justify-content: center;
}

.parametr {
  display: flex;
  flex-direction: column;
  margin: 0px 40px;
}

.hostel-info,
.parametrs,
.tour-info {
  margin: 10px 20px;
}

.feedbacks-container {
  margin: 10px 20px 30px 20px;
}

.feedback-card {
  margin-bottom: 10px;
}

.heading {
  text-align: left;
  margin-left: 20px;
  font-weight: lighter;
}

h4 {
  font-weight: bold;
  margin: 20px 0px 0px 0px;
}

.btn-bar {
  margin: 20px 460px;
}
</style>
