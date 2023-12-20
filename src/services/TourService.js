import axios from 'axios'

const TOUR_API_BASE_URL = 'http://localhost:9000/tour/'

class TourService {

    //GET
    findAllTours() {
        let URL = TOUR_API_BASE_URL + 'tours'
        return axios.get(URL)
    }

    findTour(id) {
        let URL = TOUR_API_BASE_URL + id
        return axios.get(URL)
    }

    findToursByFilter(country, dateStart) {
        let URL = TOUR_API_BASE_URL + 'tours/filter?country=' + country + '&dateStart=' + dateStart
        return axios.get(URL)
    }

    //PUT
    editTour(id, tour) {
        let URL = TOUR_API_BASE_URL + id
        return axios.putForm(URL, tour)
    }

    uploadTourPhoto(id, file) {
        let URL = TOUR_API_BASE_URL + id + '/upload'
        return axios.putForm(URL, file)
    }

    bindHotelsToTour(id, hotels) {
        let URL = TOUR_API_BASE_URL + 'bind-hotels/' + id
        return axios.putForm(URL, hotels)
    }

    //POST
    createTour(tour) {
        let URL = TOUR_API_BASE_URL
        return axios.post(URL, tour)
    }


    //DELETE
    deleteTour(id) {
        let URL = TOUR_API_BASE_URL + id
        return axios.delete(URL)
    }
}
export default new TourService()