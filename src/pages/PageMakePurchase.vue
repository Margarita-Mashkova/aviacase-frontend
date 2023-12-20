<template>
  <HeaderUser />
  <div class="form-data">
    <h4>Оформление тура</h4>
    <label class="heading">Выбранный тур</label>
    <div class="tour-info">
      <CardTour />
    </div>

    <label class="heading">Выбранный отель</label>
    <div class="hostel-info">
      <CardHostel />
    </div>

    <div class="parametrs">
        <div class="parametr">
            <label>Количество туристов:</label>
            <input class="input-simple" type="number">
        </div>
        <div class="parametr">
            <label>Количество ночей:</label>
            <input class="input-simple" type="number">
        </div>
    </div>

    <div class="btn-bar">
      <button class="btn-simple">Перейти к покупке</button>
    </div>
  </div>
  <FooterComponent />
</template>

<script>
import CardTour from "@/components/CardTour.vue";
import CardHostel from "@/components/CardHostel.vue";
import HeaderUser from "@/components/HeaderUser.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "PageMakePurchase",
  components: {
    HeaderUser,
    CardTour,
    FooterComponent,
    CardHostel,
  },
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

.parametrs{
    display: flex;
    justify-content: center;
}

.parametr{
    display: flex;
    flex-direction: column;
    margin: 0px 40px;
}

.hostel-info, .parametrs, .tour-info {
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

.btn-bar{
    margin: 20px 460px;
}
</style>
