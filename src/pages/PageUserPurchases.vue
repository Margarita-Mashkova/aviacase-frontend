<template>
    <HeaderUser />
    <div class="heading">
      <label>Купленные туры</label>
    </div>
    <div class="form-data">
      <CardTour />
      <CardTour />
      <CardTour />
    </div>
    <FooterComponent />
  </template>
  
  <script>
  import CardTour from "@/components/CardUserPurchase.vue";
  import HeaderUser from "@/components/HeaderUser.vue";
  import FooterComponent from "@/components/FooterComponent.vue";
  
  export default {
    name: "PageUserPurchases",
    components: {
      HeaderUser,
      FooterComponent,
      CardTour
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
  
  .purchase {
    margin: 7px 170px;
  }
  </style>
  