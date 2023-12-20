<template>
    <div class="navbar">        
        <ul class="navbar-list">
            <li>
                <router-link :to="'/admin/home'">
                    <img src="../assets/aviacase_logo.png" width="73" height="50" >
                </router-link>
            </li>
            <li>
                <router-link :to="'/admin/tours'">Туры</router-link>
            </li>
            <li>
                <router-link :to="'/admin/hotels'">Отели</router-link>
            </li>
            <li>
                <router-link :to="'/admin/report'">Отчет о покупках</router-link>
            </li>
            <li>
                <router-link :to="'/admin/bind-hotels'">Привязать отели к туру</router-link>
            </li>
            <li>
                <router-link :to="''">Пользователи</router-link>
            </li>
            <div class="navbar-item-last">
                <li>
                    <router-link :to="'/admin/change-password'">Сменить пароль</router-link>
                </li>
                <li>
                    <router-link :to="'/admin/auth'">Выйти</router-link>
                </li>
            </div>
        </ul>
    </div>
</template>

<script>

export default {
  
}
</script>

<style scoped>

.navbar{
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: #282727;
    font-size: 11pt;
    font-weight: bold;
}
.navbar-list{
    display: flex;
    margin: 7px;
}
li{
    display: flex;
    list-style-type: none;
    margin-right: 40px;
    align-self: center;
}
.navbar-item-last{
    display: flex;
    align-self: center;
    position: absolute;
    right: 20px;
}
</style>