<template>
    <div class="feedback-card">
        <div class="user">
            <div class="user-profile">
                <img class="user-photo" src="../assets/profile.png" width="50" height="50">
                <div class="user-info">
                    <label>{{ feedback.user.login }}</label>
                    <label>{{ feedback.date }}</label>
                </div>
            </div>
            <div>
                <div class="btns-bar" v-if="feedback.user.login == this.user.login">
                    <img class="icon" src="../assets/edit.png" width="25" height="25" @click="onEditFeedback($event)">
                    <img class="icon" src="../assets/delete.png" width="25" height="25" @click="onDeleteFeedback($event)">
                </div>
            </div>
        </div>
        <div>
            <div class="feedback-text">
                <label>{{ feedback.text }}</label>
            </div>
        </div>
        <div class="rate">
            <div v-for="star in feedback.rate" v-bind:key="star">
                <img class="star-point" src="../assets/star.png" height="23" width="25">
            </div>
        </div>
        <div v-if="editMode">
            <div class="feedback-create-form">
                <textarea type="text" v-model="text"></textarea>
                <div class="radios">
                    <label>Оценка:</label>
                    <input type="radio" id="one" value="1" v-model="rate">
                    <label for="one">1</label>
                    <input type="radio" id="two" value="2" v-model="rate">
                    <label for="two">2</label>
                    <input type="radio" id="three" value="3" v-model="rate">
                    <label for="three">3</label>
                    <input type="radio" id="four" value="4" v-model="rate">
                    <label for="four">4</label>
                    <input type="radio" id="five" value="5" v-model="rate">
                    <label for="five">5</label>
                </div>
                <div class="btn">
                    <button class="btn-simple" @click="onEditFeedback($event)">Отмена</button>
                    <button class="btn-simple" @click="editFeedback($event)">Изменить</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UserService from '@/services/UserService';
import FeedbackService from '@/services/FeedbackService';

export default {
    data() {
        return {
            rate: '',
            user: {},
            editMode: false,
            text: '',
            editedFeedback: {}
        }
    },
    props: ["feedback"],
    methods: {
        me() {
            UserService.me().then((response) => {
                if (response.status == 200) {
                    this.user = response.data
                }
            })
        },
        onEditFeedback(e) {
            if (this.editMode) this.editMode = false
            else {
                this.text = this.feedback.text
                this.rate = this.feedback.rate
                this.editMode = true
            }
            e.preventDefault()
        },
        editFeedback(e) {
            this.editFeedback = { text: this.text, rate: this.rate }
            
            FeedbackService.editFeedback(this.feedback.id, this.editFeedback).then(response =>{
                if(response.status == 200){
                    this.$emit("updateFeedbacksList")
                }
            })
            e.preventDefault()
        },
        onDeleteFeedback(e) {
            FeedbackService.deleteFeedback(this.feedback.id).then(response => {
                if (response.status == 200) {
                    this.$emit("updateFeedbacksList")
                }
            })
            e.preventDefault()
        }
    },
    mounted() {
        this.me()
    }
}
</script>

<style scoped>
.feedback-card {
    display: flex;
    flex-direction: column;
    background-color: #fcfcfc;
    font-family: "Century Gothic";
    font-size: 12pt;
    padding: 15px 30px;
    border: 1px solid;
    border-color: #128CAD;
    border-radius: 25px;
    color: black;
}

.user {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.user-profile {
    display: flex;
    flex-direction: row;
}

.user-info {
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: flex-start;
    margin-left: 15px;
}

.user-photo {
    border: 1px solid;
    border-color: #128CAD;
    border-radius: 50%;
}

.btns-bar {
    display: flex;
    align-self: self-start;
}

.feedback-text {
    margin: 30px 0px;
    text-align: left;
    text-align: justify;
}

.icon {
    margin-right: 10px;
    cursor: pointer;
}

.rate {
    display: flex;
    flex-direction: row;
}

.feedback-create-form {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
}

textarea {
    outline: none;
    padding: 20px;
    min-height: 100px;
    background-color: #fcfcfc;
    border: 1px solid;
    border-radius: 25px;
    border-color: #128cad;
    font-family: "Century Gothic";
    resize: none;
    font-size: 11pt;
}

.radios {
    margin: 15px 5px 0px 5px;
}

.btn {
    display: flex;
    align-self: flex-end;
}

.btn-simple {
    margin-left: 5px;
    min-width: 150px;
}

label {
    margin-right: 10px;
}
</style>