<template>
    <div class="purchase">
        <div class="card">
            <div class="image-area">
                <img src="../assets/login_background1.png" height="250" width="400" />
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

                <div class="btn-bar">
                    <button class="btn-simple" @click="onCreateFeedbackMode($event)">
                        Написать отзыв
                    </button>
                </div>
            </div>
        </div>
        <div v-if="createFeedbackMode">
            <div class="feedback-create-form">
                <textarea type="text"></textarea>
                <div class="radios">
                    <label>Оценка:</label>
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
                <div class="btn">
                    <button class="btn-simple" @click="onCancelFeedbackMode($event)">Отмена</button>
                    <button class="btn-simple">Отправить</button>
                </div>
            </div>            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            createFeedbackMode: false,
            stars:[]
        };
    },
    methods: {
        onCreateFeedbackMode(e) {
            this.createFeedbackMode = true;
            e.preventDefault();
        },
        onCancelFeedbackMode(e) {
            this.createFeedbackMode = false;
            e.preventDefault();
        }
    },
};
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
    margin: 20px 150px 0px 150px;
}

.title {
    font-size: 21pt;
    font-weight: bold;
    align-self: center;
}

.purchase {
    display: flex;
    flex-direction: column;
    background-color: #fcfcfc;
    border: 1px solid;
    border-radius: 25px;
    border-color: #128cad;
    padding: 30px;
}

.feedback-create-form{
    display: flex;
    flex-direction: column;
    
}

textarea{
    outline: none;
    padding: 20px;
    min-height: 100px;
    background-color: #fcfcfc;
    border: 1px solid;
    border-radius: 25px;
    border-color: #128cad;
    font-family: "Century Gothic";
    resize: none;
}

.btn{
    display: flex;
    align-self: flex-end;
}

.btn-simple{
    margin-left: 5px;
    min-width: 150px;
}

.card{
    border: none;
    padding: 20px 0px;
}

.radios{
    margin: 15px 5px 0px 5px;
}

</style>
