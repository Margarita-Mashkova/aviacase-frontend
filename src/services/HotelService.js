import axios from 'axios'

const HOTEL_API_BASE_URL = 'http://localhost:9000/hotel'

class HotelService {

    //GET
    findAllHotels() {
        let URL = HOTEL_API_BASE_URL + '/hotels'
        return axios.get(URL)
    }

    findHotel(id) {
        let URL = HOTEL_API_BASE_URL + "/" + id
        return axios.get(URL)
    }

    findHotelsByFilter(location, name) {
        let URL = HOTEL_API_BASE_URL + '/hotels/filter?location=' + location + '&name=' + name
        return axios.get(URL)
    }

    //PUT
    editHotel(id, hotel) {
        let URL = HOTEL_API_BASE_URL + "/" + id
        return axios.put(URL, hotel)
    }

    uploadHotelPhoto(id, photo) {
        let URL = HOTEL_API_BASE_URL + "/" + id + '/upload'
        return axios.putForm(URL, photo)
    }

    //POST
    createHotel(hotel) {
        let URL = HOTEL_API_BASE_URL
        return axios.post(URL, hotel)
    }

    //DELETE
    deleteHotel(id) {
        let URL = HOTEL_API_BASE_URL + "/" + id
        return axios.delete(URL)
    }
}
export default new HotelService()