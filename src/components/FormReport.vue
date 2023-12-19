<template>
    <form @submit.prevent>
        <h4>Отчет о покупках</h4>

        <div class="period-date">
            <div class="date-input">
                <label>Начало периода</label>
                <input class="input-simple" type="date">
            </div>
            <div class="date-input">
                <label>Конец периода</label>
                <input class="input-simple" type="date">
            </div>            
        </div>

        <div class="btn-report">
            <button class="btn-simple">Сформировать</button>
            <button class="btn-simple">Сохранить</button>
        </div>
        
        <table>
        <tbody>
            <tr>
            <td>Наименование тура</td>
            <td>Кол-во продаж</td>
            <td>Выручка</td>
            </tr>
            <tr>
            <td>Тур в дубай</td>
            <td>5</td>
            <td>48800</td>
            </tr>
            <tr>
            <td>Итого</td>
            <td>5</td>
            <td>48800</td>
            </tr>
        </tbody>
        </table>
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

.date-input{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-right: 15px;
}

.period-date{
    display: flex;
    justify-content: space-between;
}


table, td {
    text-align: center;
    border-bottom: 1px solid #128CAD;
    background-color: #FFFFFF;
    color: black;
}

td{
    padding: 10px 0px;
}

table{
    border: 3px solid #128CAD;
}

.btn-report{
    width: 100%;
    margin-bottom: 20px;
}

.btn-simple{
    margin-bottom: 10px;
}

</style>