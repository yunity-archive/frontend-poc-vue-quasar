import api from '../../api'
import * as types from '../types'

const state = {
  groups: [],
  isFetching: false,
  isLoaded: false
}

const getters = {
  allGroups: state => state.groups
}

const actions = {
  async loadAllGroups ({ commit }) {
    commit(types.REQUEST_GROUPS)
    commit(types.RECEIVE_GROUPS, await api.listGroups())
  }
}

const mutations = {
  [types.REQUEST_GROUPS] (state) {
    state.isFetching = true
    state.isLoaded = false
    state.groups = []
  },
  [types.RECEIVE_GROUPS] (state, groups) {
    state.isFetching = false
    state.isLoaded = true
    state.groups = groups
  }
}

export default {
  state, getters, actions, mutations
}
