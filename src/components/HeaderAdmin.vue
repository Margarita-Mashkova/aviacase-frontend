<template>
    <div id="navbar">        
        <ul class="navbar-list">
            <li>
                <router-link :to="'/home'">
                    <img src="../assets/aviacase_logo.png" width="73" height="50" >
                </router-link>
            </li>
            <li>
                <router-link :to="'/tours'">Туры</router-link>
            </li>
            <li>
                <router-link :to="'/hostels'">Отели</router-link>
            </li>
            <li>
                <router-link :to="'/report'">Отчет о покупках</router-link>
            </li>
            <li>
                <router-link :to="'/bind-hostels'">Привязать отели к туру</router-link>
            </li>
            <li>
                <router-link :to="'/edit-profile'">Пользователи</router-link>
            </li>
            <div class="navbar-item-last">
                <li>
                    <router-link :to="'/auth'">Сменить пароль</router-link>
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

#navbar{
    position: fixed;
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: #282727;
    font-size: 10pt;
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
/*li a:hover {
  color: #D276FD;
}*/
</style>