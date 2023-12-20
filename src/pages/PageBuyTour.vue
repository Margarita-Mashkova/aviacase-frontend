<template>
  <HeaderUser />
  <div class="form-data">
    <h4>Покупка тура</h4>
    <div class="table-info">
      <table>
        <tbody>
          <tr>
            <td><b>Наименование тура</b></td>
            <td>{{ tourName }}</td>
          </tr>
          <tr>
            <td><b>Наименование отеля</b></td>
            <td>{{ hotelName }}</td>
          </tr>
          <tr>
            <td><b>Количество туристов</b></td>
            <td>{{ tourists }} чел.</td>
          </tr>
          <tr>
            <td><b>Количество ночей</b></td>
            <td>{{ nights }}</td>
          </tr>
          <tr>
            <td><b>Итого</b></td>
            <td><b>{{ sum }} руб.</b></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="btn-bar">
      <button class="btn-simple" @click="buyTour($event)">Купить</button>
    </div>
  </div>
  <FooterComponent />
</template>

<script>
import HeaderUser from "@/components/HeaderUser.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import PurchaseService from "@/services/PurchaseService";

export default {
  name: "PageBuyTour",
  data(){
    return{
      tourId: localStorage.getItem("purchase-tourId"),
      tourName: localStorage.getItem("purchase-tourName"),
      hotelId: localStorage.getItem("purchase-hotelId"),
      hotelName: localStorage.getItem("purchase-hotelName"),
      tourists: localStorage.getItem("purchase-tourists"),
      nights: localStorage.getItem("purchase-nights"),
      sum: localStorage.getItem("purchase-sum"),
    }
  },
  components: {
    HeaderUser,
    FooterComponent,
  },
  methods: {
    buyTour(e){
      let purchase = {nights: this.nights, tourists: this.tourists, hotelId: this.hotelId, tourId: this.tourId}
      PurchaseService.buyTour(purchase).then(response =>{
        if(response.status == 200){
          localStorage.setItem("purchase-tourId", '')
          localStorage.setItem("purchase-tourName", '')
          localStorage.setItem("purchase-hotelId", '')
          localStorage.setItem("purchase-hotelName", '')
          localStorage.setItem("purchase-tourists", '')
          localStorage.setItem("purchase-nights", '')
          localStorage.setItem("purchase-sum", '')
          console.log(response.data)
          this.$router.push("/purchases")
        }
      })
      e.preventDefault()
    }
  }
};
</script>

<style scoped>
.form-data{
  margin: 25px 350px;
  background-color: #fcfcfc;
  border-radius: 25px;
  color: black;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-color: #128cad;
}

h4{
  font-weight: bold;
  margin: 20px 0px 0px 0px;
}

.btn-bar{
  margin: 0px 200px 30px 200px;
}

.table-info{
    margin: 72px 120px;
}

table{
    width: 100%;
    border: 1px solid #128cad;
}
</style>
