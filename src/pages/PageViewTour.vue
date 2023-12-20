<template>
  <HeaderUser />
  <div class="form-data">

    <label class="heading">Просмотр тура</label>
    <div class="tour-info" v-if="tour != null">
      <CardTour :tour="tour"/>
    </div>

    <label class="heading">Отзывы о туре</label>
    <div class="feedbacks-container" v-if="tour?.feedbacks.length != 0">
      <div v-for="feedback in tour?.feedbacks" v-bind:key="feedback">
        <FeedbackView :feedback="feedback" @updateFeedbacksList="onUpdateFeedbacksList"/>
      </div>
    </div>
    <label v-else class="heading">Отзывов о туре пока нет</label>

  </div>
  <FooterComponent />
</template>

<script>
import CardTour from "@/components/CardTour.vue";
import FeedbackView from "@/components/FeedbackView.vue";
import HeaderUser from "@/components/HeaderUser.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import TourService from '@/services/TourService';

export default {
  name: "PageViewTour",
  data() {
    return {
      tour: null
    }
  },
  components: {
    HeaderUser,
    CardTour,
    FooterComponent,
    FeedbackView
  },
  methods: {
    findTourById() {
      TourService.findTour(this.$route.params.id).then(response => {
        if (response.status == 200) {
          this.tour = response.data
        }
      })
    },
    onUpdateFeedbacksList() {
      this.findTourById()
    }
  },
  mounted() {
    this.findTourById()
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

.tour-info {
  margin: 10px 20px;
}

.feedbacks-container {
  margin: 10px 20px 30px 20px;
}

.feedback-card {
  margin-bottom: 10px;
}

.heading{
  margin-bottom: 30px;
}

</style>
