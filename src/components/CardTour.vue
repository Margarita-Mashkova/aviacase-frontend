<template>
    <div class="card">
        <div class="image-area">
            <img src="../assets/login_background1.png" height="250" width="400">
        </div>
        
        <div class="info">
            <label class="title">Тур в дубай</label>
            
            <div class="properties">
                <div class="property">
                    <label class="property-name">Страна:</label>
                    <label class="property-value">Россия</label>
                </div>

                <div class="property">
                    <label class="property-name">Дата начала:</label>
                    <label class="property-value">26.12.2023</label>
                </div>
            </div>
            <label class="title">от 5000 руб.</label>

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