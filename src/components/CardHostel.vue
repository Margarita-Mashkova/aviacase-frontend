<template>
    <div class="card">
        <div class="image-area">
            <img src="../assets/radisson_sochi.jpeg" height="250" width="400">
        </div>
        
        <div class="info">
            <label class="title">Райский остров</label>
            
            <div class="properties">
                <div class="property">
                    <label class="property-name">Местоположение:</label>
                    <label class="property-value">Россия, Сочи</label>
                </div>

                <div class="property">
                    <label class="property-name">Питание:</label>
                    <label class="property-value">Включено</label>
                </div>

                <div class="property">
                    <label class="property-name">Цена за ночь:</label>
                    <label class="property-value">1600 руб. за человека</label>
                </div>

                <div class="property">
                    <label class="property-name">Количество звёзд:</label>
                    <div v-for="star in stars" v-bind:key="star">
                        <img class="star-point" src="../assets/star.png" height="23" width="25">
                    </div>                    
                </div>
            </div>

            <!-- v-if user.login == admin -->
            <div class="btn-bar">
                <button class="btn-simple">Изменить</button>
                <button class="btn-simple">Удалить</button>
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
    methods:{
        loadStars(){
            for (let i = 0; i < this.rate; i++){
                this.stars.push(i)
            }
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