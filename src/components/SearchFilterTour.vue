<template>    
    <div class="navbar-filter">        
        <div class="filter">
            <div class="property">
                <label>Куда</label>
                <input v-model="country" class="input-simple" type="text" placeholder="Страна">
            </div>
            <div class="property">
                <label>Дата начала</label>
                <input v-model="dateStart" class="input-simple" type="date">
            </div>
            <div class="property">
                <button class="btn-simple" @click="searchTours($event)">Поиск</button>
            </div>          
        </div>
    </div>
</template>

<script>
import TourService from '@/services/TourService'

export default {
    data(){
        return{
            country:'',
            dateStart:''
        }
    },
    methods:{
        searchTours(e){
            TourService.findToursByFilter(this.country, this.dateStart).then(response =>{
                if(response.status == 200){
                    this.$emit('updateToursList', {
                        tours: response.data
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