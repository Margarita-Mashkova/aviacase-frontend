import axios from 'axios'

const FEEDBACK_API_BASE_URL = 'http://localhost:9000/feedback/'

class FeedbackService {

    //GET
    findAllFeedbacks() {
        let URL = FEEDBACK_API_BASE_URL + 'feedbacks'
        return axios.get(URL)
    }

    //PUT
    editFeedback(id, feedback) {
        let URL = FEEDBACK_API_BASE_URL + id
        return axios.putForm(URL, feedback)
    }

    //POST
    createFeedback(feedback) {
        let URL = FEEDBACK_API_BASE_URL
        return axios.post(URL, feedback)
    }

    //DELETE
    deleteFeedback(id) {
        let URL = FEEDBACK_API_BASE_URL + id
        return axios.delete(URL)
    }
}
export default new FeedbackService()