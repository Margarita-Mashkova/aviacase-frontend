import axios from 'axios'

const USER_API_BASE_URL = 'http://localhost:9000/'

class UserService {
    //GET
    me() {
        let URL = USER_API_BASE_URL + 'me'
        return axios.get(URL)
    }

    findAllUsers() {
        let URL = USER_API_BASE_URL + 'users'
        return axios.get(URL)
    }

    findUserByLogin(login){
        let URL = USER_API_BASE_URL + "find-by-login?login=" + login
        return axios.get(URL)
    }

    getUserPurchases() {
        let URL = USER_API_BASE_URL + 'user-purchases'
        return axios.get(URL)
    }

    exit(){
        let URL = USER_API_BASE_URL + 'exit'
        return axios.get(URL)
    }

    //PUT
    editProfile(user) {
        let URL = USER_API_BASE_URL + 'edit-profile'
        return axios.putForm(URL, user)
    }

    //POST
    login(user) {
        let URL = USER_API_BASE_URL + 'auth'
        return axios.post(URL, user)
    }

    register(user) {
        let URL = USER_API_BASE_URL + 'register'
        return axios.postForm(URL, user)
    }
}
export default new UserService()