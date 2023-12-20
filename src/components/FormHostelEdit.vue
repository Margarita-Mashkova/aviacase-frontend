<template>
    <form @submit.prevent>
        <h4>Отель</h4>
        
        <label>Наименование отеля</label>
        <input class="input-simple" type="text" placeholder="Наименование">
        
        <label>Местоположение</label>
        <input class="input-simple" type="text" placeholder="Страна">
        <input class="input-simple" type="text" placeholder="Город">
        
        <label>Цена за ночь за 1 человека</label>
        <input class="input-simple" type="number" placeholder="Цена">
        
        <div class="radios">
            <label>Количество звёзд:</label>        
            <input type="radio" id="one" value="1" v-model="stars">
            <label for="one">1</label>
            <input type="radio" id="two" value="2" v-model="stars">
            <label for="two">2</label>
            <input type="radio" id="three" value="3" v-model="stars">
            <label for="three">3</label>
            <input type="radio" id="four" value="4" v-model="stars">
            <label for="four">4</label>
            <input type="radio" id="five" value="5" v-model="stars">
            <label for="five">5</label>
        </div>

        <div class="radios">
            <label>Включено ли питание:</label>
            <input type="radio" id="yes" value="1" v-model="feed">
            <label for="yes">Да</label>
            <input type="radio" id="no" value="0" v-model="feed">
            <label for="no">Нет</label>
        </div>

        <label>Фото</label>
        <div class="image-form">
            <div class="image-area">
                <img class="img-photo" src= "../assets/add_photo.png" width="90" height="90">
            </div>
            <input class="hidden-input" @change="onFileChange" id="file" type="file" accept="image/*">
            <label for="file">
                <span class="input-file-btn">Выберите файл</span>
            </label>
        </div>
        
        <div class="btn-bar">
            <button class="btn-form">Сохранить</button>
        </div>
    </form>
</template>

<script>

export default {
    data(){
        return {
            feed: [],
            stars: []
        }
    },
    methods:{
        onFileChange(e) {
            console.log(e)
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
        },
        createImage(file) {
            
            var reader = new FileReader();
            var vm = this;
            
            reader.onload = (e) => {
                var preview = document.querySelector("#app > form > div.image-form > div > img")
                vm.image = e.target.result;
                preview.src = e.target.result;
            };
            reader.readAsDataURL(file);
            /*this.user.photo = file*/
        }
    },
}
</script>

<style scoped>

label{
  font-size: 11pt;
  margin-bottom: 5px;
  margin-right: 10px;
}

.hidden-input{
    display: none;
}

.image-form{
    align-items: center;
    display: flex;
}

img{
    width: 100%;
    height: 100%;
}

.image-area{    
    border: 1px solid;
    border-color: #128CAD;
    margin-bottom: 20px;
    overflow: hidden;
    width: 100px;
    height: 100px;
}

.input-file-btn {	
	display: inline-block;
	cursor: pointer;
	outline: none;
	text-decoration: none;
	font-size: 10pt;
	vertical-align: middle;
	color: rgb(255 255 255);
	text-align: center;
	background-color: #128CAD;
	line-height: 22px;
	height: 40px;
	padding: 10px 20px;
	box-sizing: border-box;
	border: none;
	margin: 0;
    border-radius: 10px;
    margin-left: 20px;
}

.input-file-btn:hover{
    background-color: rgb(13, 131, 163);
}

.radios{
    margin-bottom: 20px;
}

form{
    padding: 40px 110px;
}

h4{
    margin-bottom: 15px;
}

.btn-form{
    margin-bottom: 0px;
}

.input-simple{
    margin-bottom: 15px;
    font-size: 11pt;
}
</style>