import axios from 'axios'

const FEEDBACK_API_BASE_URL = 'http://localhost:9000/feedback'

class FeedbackService {

    //GET
    findAllFeedbacks() {
        let URL = FEEDBACK_API_BASE_URL + '/feedbacks'
        return axios.get(URL)
    }

    checkUserFeedback(userId, tourId){
        let URL = FEEDBACK_API_BASE_URL + '/allow-creating?userId=' + userId + '&tourId=' +tourId
        return axios.get(URL)
    }

    //PUT
    editFeedback(id, feed) {
        let URL = FEEDBACK_API_BASE_URL + "/" + id
        return axios.put(URL, feed)
    }

    //POST
    createFeedback(feedback) {
        let URL = FEEDBACK_API_BASE_URL
        return axios.post(URL, feedback)
    }

    //DELETE
    deleteFeedback(id) {
        let URL = FEEDBACK_API_BASE_URL + "/" + id
        return axios.delete(URL)
    }
}
export default new FeedbackService()