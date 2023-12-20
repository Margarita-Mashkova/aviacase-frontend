<template>
  <HeaderUser />
  <div class="form-data">
    <h4>Покупка тура</h4>
    <div class="table-info">
      <table>
        <tbody>
          <tr>
            <td><b>Наименование тура</b></td>
            <td>Тур в дубай</td>
          </tr>
          <tr>
            <td><b>Наименование отеля</b></td>
            <td>Волга</td>
          </tr>
          <tr>
            <td><b>Количество туристов</b></td>
            <td>5</td>
          </tr>
          <tr>
            <td><b>Количество ночей</b></td>
            <td>5</td>
          </tr>
          <tr>
            <td><b>Итого</b></td>
            <td><b>50000</b></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="btn-bar">
      <button class="btn-simple">Купить</button>
    </div>
  </div>
  <FooterComponent />
</template>

<script>
import HeaderUser from "@/components/HeaderUser.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "PageBuyTour",
  components: {
    HeaderUser,
    FooterComponent,
  },
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
