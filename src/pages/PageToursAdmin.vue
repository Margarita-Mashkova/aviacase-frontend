<template>
    <HeaderAdmin />
    <div class="heading">
        <label>Список туров</label>
    </div>
    <div class="btn">
        <button class="btn-simple" @click="openFormCreateTour($event)">Создать тур</button>
    </div>
    <div class="form-data" v-if="this.tours.length != 0">
        <div v-for="tour in tours" v-bind:key="tour">
            <CardTour :tour="tour" @updateToursList="onUpdateToursList"/>
        </div>
    </div>
    <div class="nothing" v-else>
        <label>Список туров пуст</label>
    </div>

</template>
  
<script>
import CardTour from "@/components/CardTour.vue";
import HeaderAdmin from "@/components/HeaderAdmin.vue";
import TourService from "@/services/TourService";

export default {
    name: "PageToursAdmin",
    data(){
        return{
            tours: []
        }
    },
    components: {
        HeaderAdmin,
        CardTour
    },
    methods:{
        findAllTours(){
            TourService.findAllTours().then(response =>{
                if(response.status == 200){
                    this.tours = response.data.reverse()
                }
            })
        },
        openFormCreateTour(e){
            this.$router.push("/admin/tour")
            e.preventDefault()
        },
        onUpdateToursList(){
            this.findAllTours()
        }
    },
    mounted(){
        this.findAllTours()
    }
};
</script>
  
<style scoped>
.form-data {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.card {
    margin: 7px 170px;
}

.btn{
    display: flex;
    justify-content: center;
}

.btn-simple{
    width: auto;
    margin: 0px 0px 20px 0px;
    padding: 15px 100px;
}

.nothing {
  text-align: -webkit-center;
  font-weight: bold;
  font-size: 22pt;
  margin: 50px 0px;
}
</style>
  