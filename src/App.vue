<template>
  <!-- <router-view/> -->
  <Comp />
</template>

<script>
import Comp from "./pages/PageBindHostels.vue";

export default {
  name: "App",
  components: {
    Comp,
  },
};
</script>

<style>
#app {
  font-family: "Century Gothic";
  color: whitesmoke;
}

html,
body {
  background-color: #202020;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

h4 {
  font-size: 24pt;
  align-self: center;
  margin-bottom: 40px;
  margin-top: 0px;
  font-weight: normal;
}

button:hover {
  background-color: rgb(15, 132, 165);
}

.btn-form {
  font-family: "Century Gothic";
  padding: 15px;
  color: white;
  border-radius: 30px;
  background-color: #128cad;
  border: 1px solid;
  border-color: #128cad;
  text-align: center;
  cursor: pointer;
  font-size: 13pt;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  background-color: #181616e1;
  border-radius: 30px;
  border: 1px solid;
  border-color: #128cad;
  justify-content: center;
  padding: 60px 90px;
}

.form-position {
  left: 45%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}

.btn-bar {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.input-simple {
  padding: 10px;
  outline: none;
  font-size: 12pt;
  font-family: "Century Gothic";
  background-color: #ffffff;
  border: 1px solid;
  border-radius: 10px;
  border-color: #128cad;
  margin-bottom: 20px;
}

.error {
  padding: 2px;
  background-color: #ffb6b6;
  margin: 0px 50px;
  border-radius: 2px;
  border-color: #ed5656;
  display: flex;
}

.btn-simple {
  font-family: "Century Gothic";
  padding: 10px 20px;
  color: white;
  border-radius: 10px;
  background-color: #128cad;
  border: 1px solid;
  border-color: #128cad;
  text-align: center;
  cursor: pointer;
  font-size: 11pt;
  width: 100%;
  margin-right: 25px;
}

.property {
  margin: 5px 0px;
  display: flex;
}

.property-name {
  font-weight: bold;
  width: 30%;
}

.card {
  background-color: #fcfcfc;
  border: 1px solid;
  border-color: #128cad;
  border-radius: 25px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
}

.info {
  display: flex;
  flex-direction: column;
  width: 60%;
}

.properties {
  margin: 24px 0px;
}

.stars-rate {
  align-self: center;
}

.star-point {
  margin-right: 3px;
}

.heading {
  text-align: -webkit-center;
  font-weight: bold;
  font-size: 18pt;
  margin: 20px 0px;
}

table,
td {
  /*text-align: center;*/
  border-bottom: 1px solid #128cad;
  background-color: #ffffff;
  color: black;
}

td {
  padding: 10px 0px;
}

table {
  border: 3px solid #128cad;
}
</style>
