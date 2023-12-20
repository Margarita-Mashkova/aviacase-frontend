<template>
    <div class="card">
        <div class="image-area" v-if="tour.photo != null">
            <img v-bind:src="'/photos/' + tour.photo" height="250" width="400">
        </div>
        <div class="image-area" v-else>
            <img src="../assets/no_photo.png" height="250" width="400">
        </div>

        <div class="info">
            <label class="title">{{ tour.name }}</label>

            <div class="properties">
                <div class="property">
                    <label class="property-name">Страна:</label>
                    <label class="property-value">{{ tour.country }}</label>
                </div>

                <div class="property">
                    <label class="property-name">Дата начала:</label>
                    <label class="property-value">{{ tour.startDate }}</label>
                </div>
            </div>
            <label class="title">от {{ tour.price }} руб.</label>


            <div class="btn-bar" v-if="this.$route.name == 'tours-admin'">
                <button class="btn-simple" @click="openFormEditTour($event)">Изменить</button>
                <button class="btn-simple">Удалить</button>
            </div>
            <div class="btn-bar" v-if="this.$route.name == 'view-tour'">
                <button class="btn-simple" @click="chooseHotel($event)">Выбрать</button>
            </div>
            <div class="btn-bar" v-if="this.$route.name == 'tours' || this.$route.name == 'home'">
                <button class="btn-simple" @click="viewTour($event)">Выбрать</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        tour: null
    },
    methods: {
        viewTour(e) {
            this.$router.push({ path: "/tour/" + this.tour.id });
            e.preventDefault()
        },
        chooseHotel(e) {
            localStorage.setItem('purchase-tourId', this.tour.id)
            localStorage.setItem('purchase-tourName', this.tour.name)
            this.$router.push({ path: "/choose-hotel" })
            e.preventDefault()
        },
        openFormEditTour(e){
            this.$router.push("/admin/tour/" + this.tour.id)
            e.preventDefault()
        }

    }

}
</script>

<style scoped>
label {
    font-size: 11pt;
    margin-bottom: 5px;
    margin-right: 10px;
    color: #000;
}

.image-area {
    width: 40%;
    display: flex;
}

img {
    border-radius: 25px;
}

.btn-bar {
    display: flex;
    flex-direction: row;
}

.title {
    font-size: 21pt;
    font-weight: bold;
    align-self: center;
}
</style>