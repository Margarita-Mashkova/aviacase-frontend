<template>
    <form @submit.prevent>
        <h4>Привязка отелей к туру</h4>
        
        <label>Наименование тура</label>
        <select class="input-simple" v-model="tour">
            <option value="tour.name">Имя тура</option>
            <option value="tour.name">Имя тура2</option>
            <option value="tour.name">Имя тура3</option>
        </select>
        
        <label>Отели</label>
        <select class="input-simple" v-model="hotels" multiple>
            <option>А</option>
            <option>Б</option>
            <option>В</option>
        </select>

        <div class="btn-bar">
            <button class="btn-form">Сохранить</button>
        </div>
    </form>
</template>

<script>

export default {

}
</script>

<style scoped>

label{
  font-size: 11pt;
  margin-bottom: 5px;
  margin-right: 10px;
}

</style>