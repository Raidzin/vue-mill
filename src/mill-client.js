import axios from 'axios'

const API_URL = 'https://raidzin.ddns.net:30000/api/dev/mill'
const USERS_URL = API_URL + '/users'
const MY_DATA_URL = USERS_URL + '/me'
const AUTH_TOKEN_URL = API_URL + '/oauth/github'

class AxiosClient {
  async getUserData(token) {
    return await axios.get(MY_DATA_URL, { headers: { authorization: 'Bearer ' + token } })
  }
  async getAuthToken(code, state) {
    return await axios.get(AUTH_TOKEN_URL, {
      params: { code: code, state: state }
    })
  }
}

export const axiosClient = new AxiosClient()
