import axios from 'axios'

const PURCHASE_API_BASE_URL = 'http://localhost:9000/purchase/'

class PurchaseService {

    //GET
    findAllPurchases() {
        let URL = PURCHASE_API_BASE_URL
        return axios.get(URL)
    }

    buyTour(purchase){
        let URL = PURCHASE_API_BASE_URL
        return axios.post(URL, purchase)
    }

}
export default new PurchaseService()