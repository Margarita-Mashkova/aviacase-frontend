<template>    
    <div class="navbar-filter">        
        <div class="filter">
            <div class="property">
                <label>Местоположение</label>
                <input v-model="location" class="input-simple" type="text" placeholder="Страна или город">
            </div>
            <div class="property">
                <label>Название</label>
                <input v-model="name" class="input-simple" type="text" placeholder="Название отеля">
            </div>
            <div class="property">
                <button class="btn-simple" @click="searchHotels($event)">Поиск</button>
            </div>          
        </div>
    </div>
</template>

<script>
import HotelService from '@/services/HotelService';

export default {
    data(){
        return{
            location: '',
            name: ''
        }
    },
    methods:{
        searchHotels(e){
            HotelService.findHotelsByFilter(this.location, this.name).then(response =>{
                if(response.status == 200){
                    this.$emit('updateHotelsList', {
                        hotels: response.data
                    })
                }
            })
            e.preventDefault()
        },
    }
  
}
</script>

<style scoped>
label{
    margin-bottom: 5px;
    font-size: 11pt;
    color: whitesmoke;
}

.navbar-filter{
    background-color: #128CAD;
    font-weight: bold;
}

.filter{
    display: flex;
    padding: 5px 0px;
    justify-content: center;
}

.property{
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-right: 80px;
}

.btn-simple{
    background-color: white;
    color: #128CAD;
    font-size: 11pt;
    font-weight: bold;
}

input{
    font-size: 11pt;
    width: 250px;
}

.btn-simple:hover{
    background-color: #06647e;
    color: whitesmoke;
}
</style>