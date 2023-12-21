<template>
    <form @submit.prevent>
        <h4>Изменение пароля</h4>
        <div class="inputs">
            <InputIcon v-model="password" :type="'password'" :placeholder="'Новый пароль'" :src="'password.png'"
                :width="'18'" :height="'19'" />
            <InputIcon v-model="passwordR" :type="'password'" :placeholder="'Повторите пароль'" :src="'password.png'"
                :width="'18'" :height="'19'" />
        </div>
        <div class="error" v-if="password != passwordR">
            <label>Пароли не совпадают</label>
        </div>
        <div class="btn-bar">
            <button class="btn-form" @click="changePassword($event)">Изменить</button>
        </div>
    </form>
</template>

<script>
import InputIcon from './InputIcon.vue';
import UserService from '@/services/UserService';

export default {
    components: {
        InputIcon
    },
    data() {
        return {
            user: {},
            password: '',
            passwordR: '',
        }
    },
    methods: {
        changePassword(e) {
            if (this.password == this.passwordR) {
                this.user.password = this.password
                UserService.editProfile(this.user).then(response => {
                    if (response.status == 200) {
                        this.user = response.data
                        this.password = ''
                        this.passwordR = ''
                        alert("Пароль успешно изменен")
                    }
                })
            }
            e.preventDefault()
        },
        me() {
            UserService.me().then(response => {
                if (response.status == 200) {
                    this.user = response.data
                }
            })
        }
    },
    mounted() {
        this.me()
    }
}
</script>

<style scoped>
label {
    font-size: 11.5pt;
    color: #b10000;
}

.error {
    margin-bottom: 20px;
    padding: 5px;
}
</style>