import { axiosgetApi, axiospostApi, axiosdeleteApi } from '../../axioshttp'

import {getString, setString} from "@nativescript/core/application-settings"
const custom = getString('store')

const initialState = () => {
  return {
    user: {},
    active_chat: {},
  }
}

const state = initialState()

const mutations = {
  SET_USER(state, payload) {
    state.user = payload
    setString("user", JSON.stringify(payload))
  },
  SET_ACTIVE_CHAT(state, payload) {
    state.active_chat = payload
  },
  RESET_LOGIN_STATE (state) {
    Object.assign(state, initialState())
  }
}

const getters = {
  user: state => state.user,
  active_chat: state => state.active_chat,
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
  async CREATE_MESSAGE ({commit}, payload) {
    return await axiospostApi(`messages/create-message/`, payload)
  },
  async UPDATE_VIEWED ({commit}, payload) {
    return await axiospostApi(`messages/update-viewed/${payload.id}`, payload.id)
  }
}

export default {
  namespaced: true,
  actions,
  state,
  getters,
  mutations,
  strict: true
}
