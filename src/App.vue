<template>
  <!-- <router-view/> -->
  <Comp/>
</template>

<script>
import Comp from './components/FeedbackView.vue'

export default {
  name: 'App',
  components: {
    Comp
  }
}
</script>

<style>
#app {
  font-family: 'Century Gothic';
  color: whitesmoke;
}

body{
  background-color: #202020;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

h4{
  font-size: 28pt;
  align-self: center;
  margin-bottom: 40px;
  margin-top: 0px;
  font-weight: normal;
}

button:hover{
  background-color: rgb(15, 132, 165);
}

.btn-form{
  font-family: 'Century Gothic';
  padding: 15px;
  color: white;
  border-radius: 30px;
  background-color: #128CAD;
  border: 1px solid;
  border-color: #128CAD;    
  text-align: center;
  cursor: pointer;
  font-size: 13.5pt;
  margin-bottom: 20px;
}

form{

  margin: 12% 25%;

  display: flex;
  flex-direction: column;
  background-color: #181616d5;
  border-radius: 30px; 
  border: 1px solid;
  border-color: #128CAD;
  justify-content: center;
  padding: 60px 90px;
}

.btn-bar{
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.input-simple{
  padding: 10px;
  outline: none;
  font-size: 12pt;  
  font-family: 'Century Gothic';
  background-color: #ffffff;
  border: 1px solid;
  border-radius: 10px;
  border-color: #128CAD;
  margin-bottom: 20px;   
}

.error{
  padding: 2px;
  background-color: #ffb6b6;
  margin: 0px 50px;
  border-radius: 2px;
  border-color: #ed5656;
  display: flex;
}


.btn-simple{
  font-family: 'Century Gothic';
  padding: 10px 20px;
  color: white;
  border-radius: 10px;
  background-color: #128CAD;
  border: 1px solid;
  border-color: #128CAD;    
  text-align: center;
  cursor: pointer;
  font-size: 11pt;
  width: 100%;
  margin-right: 25px;
}

.property{
  margin: 5px 0px;
  display: flex;
}

.property-name{
  font-weight: bold;
  width: 30%;
}

.card{
  background-color: #FCFCFC;
  border: 1px solid;
  border-color: #128CAD;
  border-radius: 25px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
}

.info{
  display: flex;
  flex-direction: column;
  width: 60%;
}

.properties{
  margin: 24px 0px;
}

.stars-rate{
  align-self: center;
}

.star-point{
    margin-right: 3px;
}
</style>
