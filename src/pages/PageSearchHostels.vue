<template>
    <HeaderUser />
    <SearchFilterHostel/>
    <div class="heading">
      <label>Результаты поиска</label>
    </div>
    <div class="form-data">
      <CardHostel/>
      <CardHostel/>
      <CardHostel/>
    </div>
    <FooterComponent/>
  </template>
  
  <script>
  import CardHostel from "@/components/CardHostel.vue";
  import HeaderUser from "@/components/HeaderUser.vue";
  import FooterComponent from "@/components/FooterComponent.vue";
  import SearchFilterHostel from "@/components/SearchFilterHostel.vue"
  
  export default {
    name: "PageSearchHostels",
    components: {
      HeaderUser,
      FooterComponent,
      CardHostel,
      SearchFilterHostel
    },
  };
  </script>
  
  <style>
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
  