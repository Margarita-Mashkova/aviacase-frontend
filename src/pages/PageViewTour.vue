<template>
  <HeaderUser />
  <div class="form-data">

    <label class="heading">Просмотр тура</label>
    <div class="tour-info">
        <CardTour />
    </div>

    <label class="heading">Отзывы о туре</label>
    <div class="feedbacks-container">
        <!--v-if надпись, если отзывов еще нет-->
        <FeedbackView/>
    </div>

  </div>
  <FooterComponent />
</template>

<script>
import CardTour from "@/components/CardTour.vue";
import FeedbackView from "@/components/FeedbackView.vue";
import HeaderUser from "@/components/HeaderUser.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "PageViewTour",
  components: {
    HeaderUser,
    CardTour,
    FooterComponent,
    FeedbackView
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

.tour-info{
    margin: 10px 20px;
}

.feedbacks-container{
    margin: 10px 20px 30px 20px;
}

.feedback-card{
    margin-bottom: 10px;
}
</style>
