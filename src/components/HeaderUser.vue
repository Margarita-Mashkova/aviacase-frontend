<template>
    <div class="navbar">        
        <ul class="navbar-list">
            <li>
                <router-link :to="'/home'">
                    <img src="../assets/aviacase_logo.png" width="73" height="50" >
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
                <li>
                    <router-link :to="'/auth'">Вход</router-link>
                </li>
                <li>
                    <router-link :to="'/registration'">Регистрация</router-link>
                </li>
                <!-- Через v-if проверять на авторизацию-->
                <li>
                    <router-link :to="'/edit-profile'">Профиль</router-link>
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
    background-color: #161616;
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
    margin-right: 50px;
    align-self: center;
}
.navbar-item-last{
    display: flex;
    align-self: center;
    position: absolute;
    right: 20px;
}
</style>