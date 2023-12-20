<template>
    <form @submit.prevent>
        <h4>Вход</h4>
        <!--
        <div class="error" v-if="this.wrongData">
          <label>Неверный логин и/или пароль</label>
        </div>    
        v-model="user.login"-->
        <InputIcon
        :type = "'text'"
        :placeholder = "'Логин'"
        :src = "'email.png'"
        :width = "'18'"
        :height = "'14'"
        />
        <InputIcon
        :type = "'password'"
        :placeholder = "'Пароль'"
        :src = "'password.png'"
        :width = "'18'"
        :height = "'19'"
        />
        <div class="btn-bar">
            <button class="btn-form">Войти</button>
            <!-- убрать для админа через v-if user.login == admin-->
            <button class="btn-form">Регистрация</button>
        </div>     
    </form>
</template>

<script>
import InputIcon from './InputIcon.vue';

export default {
    components:{
        InputIcon
    }
}
</script>

<style scoped>
label{
  font-size: 11.5pt;
  color: #b10000;
}
</style>