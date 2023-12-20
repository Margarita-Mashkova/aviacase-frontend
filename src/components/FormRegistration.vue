<template>
    <form novalidate="true" @submit.prevent>
        <h4>Регистрация</h4>
        <InputIcon v-if="wrongData.includes('name')" class="error-field" v-model="name" :type="'text'" :placeholder="'Имя'"
            :src="'name.png'" :width="'18'" :height="'18'" />
        <InputIcon v-else v-model="name" :type="'text'" :placeholder="'Имя'" :src="'name.png'" :width="'18'"
            :height="'18'" />

        <InputIcon v-if="wrongData.includes('surname')" class="error-field" v-model="surname" :type="'text'"
            :placeholder="'Фамилия'" :src="'name.png'" :width="'18'" :height="'18'" />
        <InputIcon v-else v-model="surname" :type="'text'" :placeholder="'Фамилия'" :src="'name.png'" :width="'18'"
            :height="'18'" />

        <InputIcon v-if="wrongData.includes('login')" class="error-field" v-model="login" :type="'text'"
            :placeholder="'Логин'" :src="'email.png'" :width="'18'" :height="'14'" />
        <InputIcon v-else v-model="login" :type="'text'" :placeholder="'Логин'" :src="'email.png'" :width="'18'"
            :height="'14'" />
        <div class="error" v-if="!userNotExist & userFind != null">
            <label>Логин "{{ login }}" уже занят</label>
        </div>

        <InputIcon v-if="wrongData.includes('password')" class="error-field" v-model="password" :type="'password'"
            :placeholder="'Пароль'" :src="'password.png'" :width="'18'" :height="'19'" />
        <InputIcon v-else v-model="password" :type="'password'" :placeholder="'Пароль'" :src="'password.png'" :width="'18'"
            :height="'19'" />

        <InputIcon v-model="passwordR" :type="'password'" :placeholder="'Повторите пароль'" :src="'password.png'"
            :width="'18'" :height="'19'" />
        <div class="error" v-if="password != passwordR">
            <label>Пароли не совпадают</label>
        </div>
        <div class="btn-bar">
            <button class="btn-form" @click="register($event)">Зарегистрироваться</button>
        </div>
    </form>
</template>

<script>
import InputIcon from './InputIcon.vue';
import UserService from "@/services/UserService";

export default {
    components: {
        InputIcon
    },
    data() {
        return {
            errors: [],
            name: '',
            surname: '',
            login: '',
            password: '',
            passwordR: '',
            wrongData: [],
            userNotExist: false,
            userFind: null,
            user: {}
        }
    },
    methods: {
        register(e) {
            //Имя
            if (this.name == '' || this.name.length < 2 || this.name.length > 30) {
                this.wrongData.push('name')
            } else {
                if (this.wrongData.includes('name')) this.wrongData.splice(this.getIndex(this.wrongData, 'name'), 1)
            }
            //Фамилия
            if (this.surname == '' || this.surname.length < 2 || this.surname.length > 30) {
                this.wrongData.push('surname')
            } else {
                if (this.wrongData.includes('surname')) this.wrongData.splice(this.getIndex(this.wrongData, 'surname'), 1)
            }
            //Логин
            if (this.login == '' || this.login.length < 3 || this.login.length > 30) {
                this.wrongData.push('login')
            } else {
                if (this.wrongData.includes('login')) this.wrongData.splice(this.getIndex(this.wrongData, 'login'), 1)
            }
            //Пароль
            if (this.password == '' || this.password.length < 3 || this.password.length > 30) {
                this.wrongData.push('password')
            } else {
                if (this.wrongData.includes('password')) this.wrongData.splice(this.getIndex(this.wrongData, 'password'), 1)
            }

            if (this.wrongData.length == 0 && this.userNotExist) {
                this.user.name = this.name;
                this.user.surname = this.surname;
                this.user.login = this.login;
                this.user.password = this.password;
                UserService.register(this.user).then(response => {
                    if (response.status == 200) {
                        this.$router.push("/auth")
                    }
                })

            }
            e.preventDefault()
        },
        checkExistLogin() {
            UserService.findUserByLogin(this.login).then(response => {
                if (response.status == 200 && response.data != '') {
                    this.userNotExist = false
                    this.userFind = response.data
                }
                else {
                    this.userNotExist = true
                    this.userFind = null
                }
            })
        },
    },
    watch: {
        'login'() {
            this.checkExistLogin()
        }
    }
}
</script>

<style scoped>
label {
    font-size: 11.5pt;
    color: #b10000;
}

.error-field {
    border: 2px solid red;
}

.error{
    margin-bottom: 20px;
    padding: 5px;
}

.inp-icon{
    margin-bottom: 20px;
}
</style>