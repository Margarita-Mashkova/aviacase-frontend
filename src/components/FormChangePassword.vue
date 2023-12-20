<template>
    <form @submit.prevent>
        <h4>Изменение пароля</h4>
        <!--
        <div class="error" v-if="this.wrongData">
          <label>Неверный логин и/или пароль</label>
        </div>    
        v-model="user.login"-->
        <div class="inputs">
            <InputIcon
            :type = "'password'"
            :placeholder = "'Текущий пароль'"
            :src = "'password.png'"
            :width = "'18'"
            :height = "'19'"
            />
            <InputIcon
            :type = "'password'"
            :placeholder = "'Новый пароль'"
            :src = "'password.png'"
            :width = "'18'"
            :height = "'19'"
            />
        </div>
        <div class="btn-bar">
            <button class="btn-form">Изменить</button>
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

<style>

.error{
    padding: 10px;
    background-color: #ffb6b6;
    margin: 10px 50px;
    border: 1px solid;
    border-radius: 10px;
    border-color: #ed5656;
    display: flex;
}

.label-error{
  font-size: 11.5pt;
  color: #b10000;
}
</style>