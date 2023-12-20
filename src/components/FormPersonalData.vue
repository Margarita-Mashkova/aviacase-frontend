<template>
  <form novalidate="true" @submit.prevent>
    <h4>Личные данные</h4>
    <InputIcon v-model="user.name" :type="'text'" :placeholder="'Имя'" :src="'name.png'" :width="'18'" :height="'18'" />
    <InputIcon v-model="user.surname" :type="'text'" :placeholder="'Фамилия'" :src="'name.png'" :width="'18'"
      :height="'18'" />
    <InputIcon v-model="user.login" :type="'text'" :placeholder="'Логин'" :src="'email.png'" :width="'18'"
      :height="'14'" />
    <InputIcon v-model="password" :type="'password'" :placeholder="'Пароль'" :src="'password.png'" :width="'18'" :height="'19'" />
    <div class="btn-bar">
      <button class="btn-form" @click="editProfile($event)">Изменить</button>
    </div>
  </form>
</template>

<script>
import InputIcon from "./InputIcon.vue";
import UserService from "@/services/UserService";

export default {
  data() {
    return {
      user: {},
      wrongData: false,
      password: ''
    }
  },
  components: {
    InputIcon,
  },
  methods: {
    me() {
      UserService.me().then((response) => {
        if (response.status == 200) {
          this.user = response.data
        }
      })
    },
    editProfile(e) {
      this.user.password = this.password
      UserService.editProfile(this.user).then(response => {
        if(response.status == 200){
          this.user = response.data
          alert("Данные успешно изменены!")
        }
      }).catch(() => {
        this.wrongData = true
      })
      e.preventDefault()
    }
  },
  mounted() {
    this.me()
  }

};
</script>

<style scoped>
form {
  background-color: #fffefeec;
  color: black;
}

label {
  font-size: 11.5pt;
  color: #b10000;
}
</style>
