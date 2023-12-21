<template>
    <HeaderAdmin />
    <div class="heading">
        <label>Список отелей</label>
    </div>
    <div class="btn">
        <button class="btn-simple" @click="openCreateHotelFrom($event)">Создать отель</button>
    </div>
    <div class="form-data" v-if="this.hotels.length != 0">
        <div v-for="hotel in hotels" v-bind:key="hotel">
            <CardHotel :hotel="hotel" @updateHotelsList="onUpdateHotelsList"/>
        </div>
    </div>
    <div class="nothing" v-else>
        <label>Список отелей пуст</label>
    </div>
</template>
  
<script>
import CardHotel from "@/components/CardHotel.vue";
import HeaderAdmin from "@/components/HeaderAdmin.vue";
import HotelService from "@/services/HotelService";

export default {
    name: "PageHotelsAdmin",
    components: {
        HeaderAdmin,
        CardHotel
    },
    data(){
        return{
            hotels:[]
        }
    },
    methods:{
        findAllHotels(){
            HotelService.findAllHotels().then(response =>{
                if(response.status == 200){
                    this.hotels = response.data.reverse()
                }
            })
        },
        onUpdateHotelsList(){
            this.findAllHotels()
        },
        openCreateHotelFrom(e){
            this.$router.push("/admin/hotel")
            e.preventDefault()
        }
    },
    mounted(){
        this.findAllHotels()
    }
};
</script>
  
<style scoped>
.form-data {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-bottom: 20px;
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
  