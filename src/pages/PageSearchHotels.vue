<template>
    <HeaderUser />
    <SearchFilterHotel/>
    <div class="heading">
      <label>Результаты поиска</label>
    </div>
    <div class="form-data">
      <CardHotel/>
      <CardHotel/>
      <CardHotel/>
    </div>
    <FooterComponent/>
  </template>
  
  <script>
  import CardHotel from "@/components/CardHotel.vue";
  import HeaderUser from "@/components/HeaderUser.vue";
  import FooterComponent from "@/components/FooterComponent.vue";
  import SearchFilterHotel from "@/components/SearchFilterHotel.vue"
  
  export default {
    name: "PageSearchHotels",
    components: {
      HeaderUser,
      FooterComponent,
      CardHotel,
      SearchFilterHotel
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
  
  .heading {
    text-align: -webkit-center;
    font-weight: bold;
    font-size: 22pt;
    margin: 20px 0px;
  }
  
  .card{
    margin: 7px 170px;
  }
  </style>
  