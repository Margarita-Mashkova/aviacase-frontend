<template>
    <form @submit.prevent>
        <h4>Привязка отелей к туру</h4>

        <label>Наименование тура</label>
        <select class="input-simple" v-model="choosenTour">
            <option v-for="tour in tours" v-bind:value="tour.id" v-bind:key="tour">
                {{ tour.name }} ({{ tour.country }})</option>
        </select>

        <label>Отели</label>
        <select class="input-simple" v-model="choosenHotels" multiple>
            <option v-for="hotel in hotels" v-bind:value="hotel" v-bind:key="hotel.id">
                "{{ hotel.name }}" - {{ hotel.location }}</option>
        </select>

        <div class="btn-bar">
            <button class="btn-form" @click="bindHotels($event)">Сохранить</button>
        </div>
    </form>
</template>

<script>
import HotelService from '@/services/HotelService';
import TourService from '@/services/TourService';

export default {
    data() {
        return {
            tours: [],
            hotels: [],
            choosenHotels: [],
            choosenTour: {}
        }
    },
    methods: {
        findAllTours(){
            TourService.findAllTours().then(response =>{
                if(response.status == 200){
                    this.tours = response.data
                }
            })
        },
        findAllHotels(){
            HotelService.findAllHotels().then(response =>{
                if(response.status == 200){
                    this.hotels = response.data
                }
            })
        },
        bindHotels(e){
            console.log(this.choosenTour)
            console.log(this.choosenHotels)
            TourService.bindHotelsToTour(this.choosenTour, {hotels: this.choosenHotels}).then(response =>{
                if(response.status == 200){
                    alert("Отели привязаны!")
                }
            })
            e.preventDefault()
        }
    },
    mounted(){
        this.findAllTours()
        this.findAllHotels()
    }

}
</script>

<style scoped>
label {
    font-size: 11pt;
    margin-bottom: 5px;
    margin-right: 10px;
}

#app>div.form-data>form>select:nth-child(5) {
    min-height: 150px;
}
</style>