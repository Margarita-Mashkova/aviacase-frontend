<template>
    <form @submit.prevent>
        <h4>Отель</h4>

        <!-- Изменение отеля -->
        <div class="form-edit" v-if="this.editedHotel != null">
            <label>Наименование отеля</label>
            <input v-model="editedHotel.name" class="input-simple" type="text" placeholder="Наименование">

            <label>Местоположение</label>
            <input v-model="country" class="input-simple" type="text" placeholder="Страна">
            <input v-model="city" class="input-simple" type="text" placeholder="Город">

            <label>Цена за ночь за 1 человека</label>
            <input v-model="editedHotel.price" class="input-simple" type="number" placeholder="Цена" step="100">

            <div class="radios">
                <label>Количество звёзд:</label>
                <input type="radio" id="one" value="1" v-model="editedHotel.star">
                <label for="one">1</label>
                <input type="radio" id="two" value="2" v-model="editedHotel.star">
                <label for="two">2</label>
                <input type="radio" id="three" value="3" v-model="editedHotel.star">
                <label for="three">3</label>
                <input type="radio" id="four" value="4" v-model="editedHotel.star">
                <label for="four">4</label>
                <input type="radio" id="five" value="5" v-model="editedHotel.star">
                <label for="five">5</label>
            </div>

            <div class="radios">
                <label>Включено ли питание:</label>
                <input type="radio" id="yes" value="true" v-model="editedHotel.feed">
                <label for="yes">Да</label>
                <input type="radio" id="no" value="false" v-model="editedHotel.feed">
                <label for="no">Нет</label>
            </div>

            <label>Фото</label>
            <div class="image-form">

                <div class="image-area" v-if="editedHotel.photo != null">
                    <img class="img-photo" v-bind:src="'/photos/' + editedHotel.photo" width="90" height="90">
                </div>
                <div class="image-area" v-else>
                    <img class="img-photo" src="../assets/add_photo.png" width="90" height="90">
                </div>

                <input class="hidden-input" @change="onFileChange" id="file" type="file" accept="image/*">
                <label for="file">
                    <span class="input-file-btn">Выберите файл</span>
                </label>
            </div>

            <div class="btn-bar">
                <button class="btn-form" @click="editHotel($event)">Сохранить</button>
            </div>
        </div>

        <!-- Создание отеля -->
        <div class="form-edit" v-else>
            <label>Наименование отеля</label>
            <input v-model="name" class="input-simple" type="text" placeholder="Наименование">

            <label>Местоположение</label>
            <input v-model="country" class="input-simple" type="text" placeholder="Страна">
            <input v-model="city" class="input-simple" type="text" placeholder="Город">

            <label>Цена за ночь за 1 человека</label>
            <input v-model="price" class="input-simple" type="number" placeholder="Цена" step="100">

            <div class="radios">
                <label>Количество звёзд:</label>
                <input type="radio" id="one" value="1" v-model="star">
                <label for="one">1</label>
                <input type="radio" id="two" value="2" v-model="star">
                <label for="two">2</label>
                <input type="radio" id="three" value="3" v-model="star">
                <label for="three">3</label>
                <input type="radio" id="four" value="4" v-model="star">
                <label for="four">4</label>
                <input type="radio" id="five" value="5" v-model="star">
                <label for="five">5</label>
            </div>

            <div class="radios">
                <label>Включено ли питание:</label>
                <input type="radio" id="yes" value="true" v-model="feed">
                <label for="yes">Да</label>
                <input type="radio" id="no" value="false" v-model="feed">
                <label for="no">Нет</label>
            </div>

            <label>Фото</label>
            <div class="image-form">
                <div class="image-area">
                    <img class="img-photo" src="../assets/add_photo.png" width="90" height="90">
                </div>
                <input class="hidden-input" @change="onFileChange" id="file" type="file" accept="image/*">
                <label for="file">
                    <span class="input-file-btn">Выберите файл</span>
                </label>
            </div>

            <div class="btn-bar">
                <button class="btn-form" @click="addHotel($event)">Сохранить</button>
            </div>
        </div>

    </form>
</template>

<script>
import HotelService from '@/services/HotelService';

export default {
    data() {
        return {
            name: '',
            country: '',
            city: '',
            star: '',
            feed: [],
            price: '',
            photo: null,
            editedHotel: null
        }
    },
    methods: {
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
        },
        createImage(file) {

            var reader = new FileReader();
            var vm = this;

            reader.onload = (e) => {
                var preview = document.querySelector("#app > div.form-data > form > div > div.image-form > div > img")
                vm.image = e.target.result;
                preview.src = e.target.result;
            };
            reader.readAsDataURL(file);
            this.photo = file
        },
        findHotel() {
            HotelService.findHotel(this.$route.params.id).then(response => {
                if (response.status == 200) {
                    this.editedHotel = response.data
                    let location = response.data.location.split(', ')
                    this.country = location[0]
                    this.city = location[1]
                }
            })
        },
        editHotel(e) {
            let location = this.country + ", " + this.city
            this.editedHotel.location = location
            console.log(this.editedHotel)
            HotelService.editHotel(this.editedHotel.id, this.editedHotel).then(response => {
                if (response.status == 200) {
                    if (this.photo != null) {
                        HotelService.uploadHotelPhoto(response.data.id, { photo: this.photo }).then(response1 => {
                            if (response1.status == 200) {
                                this.$router.push("/admin/hotels")
                            }
                        })
                    } else {
                        this.$router.push("/admin/hotels")
                    }
                }
            })
            e.preventDefault()
        },
        addHotel(e) {
            let location = this.country + ', ' + this.city
            let newHotel = { name: this.name, location: location, star: this.star, feed: this.feed, price: this.price }
            console.log(newHotel)
            HotelService.createHotel(newHotel).then(response => {
                if (response.status == 200) {
                    if (this.photo != null) {
                        HotelService.uploadHotelPhoto(response.data.id, { photo: this.photo }).then(response1 => {
                            if (response1.status == 200) {
                                this.$router.push("/admin/hotels")
                            }
                        })
                    } else {
                        this.$router.push("/admin/hotels")
                    }
                }
            })
            e.preventDefault()
        }
    },
    created() {
        if (this.$route.params.id != null) {
            this.findHotel()
        }
    }
}
</script>

<style scoped>
.form-edit {
    display: flex;
    flex-direction: column;
}

label {
    font-size: 11pt;
    margin-bottom: 5px;
    margin-right: 10px;
}

.hidden-input {
    display: none;
}

.image-form {
    align-items: center;
    display: flex;
}

img {
    width: 100%;
    height: 100%;
}

.image-area {
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

.input-file-btn:hover {
    background-color: rgb(13, 131, 163);
}

.radios {
    margin-bottom: 20px;
}

form {
    padding: 40px 110px;
}

h4 {
    margin-bottom: 15px;
}

.btn-form {
    margin-bottom: 0px;
}

.input-simple {
    margin-bottom: 15px;
    font-size: 11pt;
}
</style>