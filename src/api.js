import axios from 'axios'

export default {
  listGroups () {
    return axios.get('https://dev.foodsaving.world/api/groups/')
      .then(({ data }) => data)
  }
}
