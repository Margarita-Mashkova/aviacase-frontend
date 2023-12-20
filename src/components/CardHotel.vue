<template>
    <div class="card">
        <div class="image-area" v-if="hotel.photo != null">
            <img v-bind:src= "'/photos/'+ hotel.photo" height="250" width="400">
        </div>
        <div class="image-area" v-else>
            <img src="../assets/no_photo.png" height="250" width="400">
        </div>
        
        <div class="info">
            <label class="title">{{ hotel.name }}</label>
            
            <div class="properties">
                <div class="property">
                    <label class="property-name">Местоположение:</label>
                    <label class="property-value">{{ hotel.location }}</label>
                </div>

                <div class="property">
                    <label class="property-name">Питание:</label>
                    <label v-if="hotel.feed == true" class="property-value">Включено</label>
                    <label v-else class="property-value">Не включено</label>
                </div>

                <div class="property">
                    <label class="property-name">Цена за ночь:</label>
                    <label class="property-value">{{ hotel.price }} руб. за человека</label>
                </div>

                <div class="property">
                    <label class="property-name">Количество звёзд:</label>
                    <div v-for="star in hotel.star" v-bind:key="star">
                        <img class="star-point" src="../assets/star.png" height="23" width="25">
                    </div>                    
                </div>
            </div>

            <div class="btn-bar" v-if="this.$route.name == 'hotels-admin'">
                <button class="btn-simple">Изменить</button>
                <button class="btn-simple">Удалить</button>
            </div>
            <div class="btn-bar" v-if="this.$route.name == 'choose-hotel'">
                <button class="btn-simple" @click="chooseToTour($event)">Выбрать</button>
            </div>
        </div>      
    </div>
</template>

<script>

export default {
    data(){
        return {
            stars: [],
            rate: 3
        }
    },
    props:{
        hotel: null
    },
    methods:{
        loadStars(){
            for (let i = 0; i < this.rate; i++){
                this.stars.push(i)
            }
        },
        chooseToTour(e){
            localStorage.setItem('purchase-hotelId', this.hotel.id)
            localStorage.setItem('purchase-hotelName', this.hotel.name)
            this.$router.push("/make-purchase")
            e.preventDefault()
        }
    },
    mounted(){
        this.loadStars()
    }

}
</script>

<style scoped>

label{
  font-size: 11pt;
  margin-bottom: 5px;
  margin-right: 10px;
  color: #000;
}

.image-area{
    width: 40%;
    display: flex;
}

img{
    border-radius: 25px;
}

.btn-bar {
    display: flex;
    flex-direction: row;
}

.title{
    font-size: 21pt;
    font-weight: bold;
    align-self: center;
}
</style>