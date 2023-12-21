<template>
    <form @submit.prevent>
        <h4>Тур</h4>
        <!-- Изменение тура -->
        <div class="form-edit" v-if="this.editedTour != null">
            <label>Наименование тура</label>
            <input v-model="editedTour.name" class="input-simple" type="text" placeholder="Наименование">
            <label>Страна назначения</label>
            <input v-model="editedTour.country" class="input-simple" type="text" placeholder="Страна">
            <label>Дата начала</label>
            <input v-model="editedTour.startDate" class="input-simple" type="date">
            <label>Цена за ночь за 1 человека</label>
            <input v-model="editedTour.price" class="input-simple" type="number" placeholder="Цена" step="100">
            <label>Фото</label>

            <div class="image-form">

                <div class="image-area" v-if="editedTour.photo != null">
                    <img class="img-photo" v-bind:src="'/photos/' + editedTour.photo" width="90" height="90">
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
                <button class="btn-form" @click="editTour($event)">Сохранить</button>
            </div>
        </div>
        <!-- Создание тура -->
        <div class="form-edit" v-else>
            <label>Наименование тура</label>
            <input v-model="name" class="input-simple" type="text" placeholder="Наименование">
            <label>Страна назначения</label>
            <input v-model="country" class="input-simple" type="text" placeholder="Страна">
            <label>Дата начала</label>
            <input v-model="startDate" class="input-simple" type="date">
            <label>Цена за ночь за 1 человека</label>
            <input v-model="price" class="input-simple" type="number" placeholder="Цена" step="100">
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
                <button class="btn-form" @click="addTour($event)">Сохранить</button>
            </div>
        </div>
    </form>
</template>

<script>
import TourService from '@/services/TourService';

export default {
    data() {
        return {
            name: '',
            country: '',
            startDate: '',
            price: '',
            photo: null,
            editedTour: null
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
                var preview = document.querySelector("#app > div.form-data > form > div.form-edit > div > div > img")
                vm.image = e.target.result;
                preview.src = e.target.result;
            };
            reader.readAsDataURL(file);
            this.photo = file
        },
        findTour() {
            TourService.findTour(this.$route.params.id).then(response => {
                if (response.status == 200) {
                    this.editedTour = response.data
                }
            })
        },
        editTour(e) {
            TourService.editTour(this.editedTour.id, this.editedTour).then(response => {
                if (response.status == 200) {
                    if (this.photo != null) {
                        TourService.uploadTourPhoto(response.data.id, { photo: this.photo }).then(response1 => {
                            if (response1.status == 200) {
                                this.$router.push("/admin/tours")
                            }
                        })
                    } else {
                        this.$router.push("/admin/tours")
                    }
                }
            })
            e.preventDefault()
        },
        addTour(e) {
            let newTour = { name: this.name, country: this.country, startDate: this.startDate, price: this.price }
            TourService.createTour(newTour).then(response => {
                if (response.status == 200) {
                    if (this.photo != null) {
                        TourService.uploadTourPhoto(response.data.id, { photo: this.photo }).then(response1 => {
                            if (response1.status == 200) {
                                this.$router.push("/admin/tours")
                            }
                        })
                    } else {
                        this.$router.push("/admin/tours")
                    }
                }
            })
            e.preventDefault()
        }
    },
    created() {
        if (this.$route.params.id != null) {
            this.findTour()
        }
    }
}
</script>

<style scoped>
label {
    font-size: 11pt;
    margin-bottom: 2px;
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

.form-edit {
    display: flex;
    flex-direction: column;
}
</style>