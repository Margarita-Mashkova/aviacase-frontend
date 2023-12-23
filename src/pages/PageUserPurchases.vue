<template>
  <HeaderUser />
  <div class="heading">
    <label>Купленные туры</label>
  </div>
  <div class="purchase-container" v-if="this.purchases.length != 0">
    <div class="form-data" >
      <div v-for="purchase in purchases" v-bind:key="purchase">
        <CardTour :purchase="purchase" />
      </div>      
    </div>
  </div>
  <div class="nothing" v-else>
    <label>Вы еще не покупали туры</label>
  </div>

  <FooterComponent />
</template>
  
<script>
import CardTour from "@/components/CardUserPurchase.vue";
import HeaderUser from "@/components/HeaderUser.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import UserService from "@/services/UserService";

export default {
  name: "PageUserPurchases",
  data() {
    return {
      purchases: []
    }
  },
  components: {
    HeaderUser,
    FooterComponent,
    CardTour
  },
  methods: {
    findUserPurchases() {
      UserService.getUserPurchases().then(response => {
        if (response.status == 200) {
          this.purchases = response.data
          console.log(this.purchases)
        }
      })
    }
  },
  mounted() {
    this.findUserPurchases()
  }
};
</script>
  
<style scoped>
.form-data {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 104px;
}

.nothing {
  text-align: -webkit-center;
  font-weight: bold;
  font-size: 22pt;
  margin: 232px 0px;
}

.purchase {
  margin: 7px 170px;
}

.purchase-container{
  margin-bottom: 163px;
}


</style>
  