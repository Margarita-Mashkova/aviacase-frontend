<template>
    <form @submit.prevent>
        <h4>Вход</h4>
        <div class="error" v-if="this.wrongData">
          <label>Неверный логин и/или пароль</label>
        </div>
        <InputIcon
        v-model="user.login"
        :type="'text'" 
        :placeholder="'Логин'" 
        :src="'email.png'" 
        :width="'18'" 
        :height="'14'" />
        <InputIcon
        v-model="user.password"
        :type="'password'" 
        :placeholder="'Пароль'" 
        :src="'password.png'" 
        :width="'18'" 
        :height="'19'" />        
        <div class="btn-bar">
            <button class="btn-form" @click="login($event)">Войти</button>
            <button class="btn-form" v-if="this.$route.name != 'login-admin'" @click="goToRegistration($event)">Регистрация</button>
        </div>
    </form>
</template>

<script>
import InputIcon from './InputIcon.vue';
import UserService from "@/services/UserService";

export default {
    data() {
        return {
            user: {},
            wrongData: false
        }
    },
    components: {
        InputIcon
    },
    methods: {
        goToRegistration(e) {
            this.$router.push('/registration')
            e.preventDefault()
        },
        login(e) {
            UserService.login(this.user).then(response => {
                if (response.status == 200) {
                    if(this.user.login == "admin"){
                        window.location.href = '/admin/home'
                    }
                    else{
                        window.location.href = '/home'
                    }
                    
                }                
            }
            ).catch(() => {
                this.wrongData = true
            })
            e.preventDefault()
        },        
    },
    mounted() {
        console.log()
    },
    watch:{
        'wrongData'(){}
    }
}

</script>

<style scoped>
label {
    font-size: 11.5pt;
    color: #b10000;
}
</style>