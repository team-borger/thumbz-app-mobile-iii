import { axiosgetApi, axiospostApi, axiosdeleteApi } from '../../axioshttp'

import {getString, setString} from "@nativescript/core/application-settings"
const custom = getString('store')

const initialState = () => {
  return {
    user: {},
  }
}

const state = initialState()

const mutations = {
  SET_USER(state, payload) {
    state.user = payload
    setString("user", JSON.stringify(payload))
  }
}

const getters = {
  user: state => state.user,
}

const actions = {
  async REGISTER_USER ({commit}, payload) {
    return await axiospostApi('create-user/', payload)
  },
  async LOGIN_USER ({commit}, payload) {
    return await axiospostApi('login/', payload)
  },
  async LOAD_CONTACTS ({commit}) {
    return await axiosgetApi('messages/conversations/')
  },
  async SEARCH_USER ({commit}) {
    return await axiosgetApi('users/search/')
  },
  async LOAD_THREAD ({commit}, sender_id) {
    return await axiosgetApi(`messages/threads/${sender_id}/`)
  },
}

export default {
  namespaced: true,
  actions,
  state,
  getters,
  mutations,
  strict: true
}
