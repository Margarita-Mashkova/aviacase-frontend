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

            <div class="btn-bar">
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
    display: flex;
    width: 400px;
    height: 250px;
}

img {
    border-radius: 25px;
}

.btn-bar {
    display: flex;
    flex-direction: row;
}

.title {
    font-size: 20pt;
    font-weight: bold;
    align-self: center;
}

.card {
    flex-direction: column;
    padding: 20px;
    max-width: 400px;
}

.image-area {
    width: 100%;
    margin-bottom: 10px;
}

.info {
    width: 100%;
}

img {
    width: 400px;
    height: 250px;
}

.btn-simple {
    margin: 0px;
}
</style>