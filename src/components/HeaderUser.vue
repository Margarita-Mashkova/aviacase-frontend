<template>
    <div class="navbar">
        <ul class="navbar-list">
            <li>
                <router-link :to="'/home'">
                    <img src="../assets/aviacase_logo.png" width="73" height="50">
                </router-link>
            </li>
            <li>
                <router-link :to="'/home'">Главная</router-link>
            </li>
            <li>
                <router-link :to="'/tours'">Туры</router-link>
            </li>
            <li>
                <router-link :to="'/hotels'">Отели</router-link>
            </li>
            <div class="navbar-item-last">
                <li v-if="this.user == ''">
                    <router-link :to="'/auth'">Вход</router-link>
                </li>
                <li v-if="this.user == ''">
                    <router-link :to="'/registration'">Регистрация</router-link>
                </li>
                <li v-if="this.user != ''">
                    <router-link :to="'/purchases'">Мои покупки</router-link>
                </li>
                <li v-if="this.user != ''">
                    <router-link :to="'/edit-profile'">Профиль</router-link>
                </li>
                <li v-if="this.user != ''">
                    <router-link :to="'/home'" @click="logout($event)">Выход</router-link>
                </li>
            </div>
        </ul>
    </div>
</template>

<script>
import UserService from "@/services/UserService";

export default {
    data() {
        return {
            user: {}
        }
    },
    methods: {
        me() {
            UserService.me().then((response) => {
                if (response.status == 200) {
                    this.user = response.data
                }
            })
        },
        logout(e) {
            var sure = confirm("Вы уверены, что хотите выйти из профиля?")
            if (sure) {
                UserService.exit().then((response) => {
                    if (response.status == 200) {
                        this.user = ''
                    }
                })
            }
            e.preventDefault()
        }
    },
    mounted() {
        this.me()
    }
}
</script>

<style scoped>
.navbar {
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: #161616;
    font-size: 11pt;
    font-weight: bold;
}

.navbar-list {
    display: flex;
    margin: 7px;
}

li {
    display: flex;
    list-style-type: none;
    margin-right: 50px;
    align-self: center;
}

.navbar-item-last {
    display: flex;
    align-self: center;
    position: absolute;
    right: 20px;
}
</style>