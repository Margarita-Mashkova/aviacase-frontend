import axios from 'axios'

const REPORT_API_BASE_URL = 'http://localhost:9000/report'

class ReportService {

    //GET
    makeReport(dateStart, dateEnd) {
        let URL = REPORT_API_BASE_URL + '?dateStart=' + dateStart + '&dateEnd=' + dateEnd
        return axios.get(URL)
    }

    saveReport(dateStart, dateEnd) {
        let URL = REPORT_API_BASE_URL + '/save?dateStart=' + dateStart + '&dateEnd=' + dateEnd
        return axios.get(URL)
    }

}
export default new ReportService()