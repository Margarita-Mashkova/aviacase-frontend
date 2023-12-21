<template>
    <form @submit.prevent>
        <h4>Отчет о покупках</h4>

        <div class="period-date">
            <div class="date-input">
                <label>Начало периода</label>
                <input v-model="dateStart" class="input-simple" type="date">
            </div>
            <div class="date-input">
                <label>Конец периода</label>
                <input v-model="dateEnd" class="input-simple" type="date">
            </div>
        </div>

        <div class="btn-report">
            <button class="btn-simple" @click="showReport($event)">Сформировать</button>
            <button class="btn-simple" @click="saveReport($event)">Сохранить</button>
        </div>

        <table v-if="this.reportData.length != 0">
            <thead>
                <tr>
                    <td>Наименование тура</td>
                    <td>Кол-во продаж</td>
                    <td>Выручка</td>
                </tr>
            </thead>
            <tbody v-for="line in reportData" :key="line">
                <tr>
                    <td>{{ line.tourName }}</td>
                    <td>{{ line.amountPurchases }}</td>
                    <td>{{ line.sum }}</td>
                </tr>
            </tbody>
        </table>
    </form>
</template>

<script>
import ReportService from '@/services/ReportService';

export default {
    components:{
    },
    data() {
        return {
            dateStart: '',
            dateEnd: '',
            reportData: []
        }
    },
    methods: {
        showReport(e) {
            ReportService.makeReport(this.dateStart, this.dateEnd).then(response => {
                if (response.status == 200) {
                    this.reportData = response.data
                }
            })
            e.preventDefault()
        },
        saveReport(e){
            ReportService.saveReport(this.dateStart, this.dateEnd).then(response => {
                if (response.status == 200) {
                    alert("Отчет сохранен в папку загрузок на Вашем компьютере!")
                }
            })
            e.preventDefault()
        }
    }

}
</script>

<style scoped>
label {
    font-size: 11pt;
    margin-bottom: 5px;
    margin-right: 10px;
}

.date-input {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-right: 15px;
}

.period-date {
    display: flex;
    justify-content: space-between;
}

.btn-report {
    width: 100%;
    margin-bottom: 20px;
}

.btn-simple {
    margin-bottom: 10px;
}

thead {
    font-weight: bold;
    text-align: center;
}

#app>div.form-data>form>table>thead>tr>td {
    background-color: #128cad;
    color: white;
}
</style>