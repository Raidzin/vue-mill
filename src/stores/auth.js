import { ref } from 'vue'
import { defineStore } from 'pinia'
import { LocalStorage } from 'quasar'

const TOKEN_NAME = 'mill_token'

export const useTokenStore = defineStore(TOKEN_NAME, () => {
  const token = ref(LocalStorage.getItem(TOKEN_NAME))

  function setToken(new_token) {
    token.value = new_token
    LocalStorage.setItem(TOKEN_NAME, new_token)
  }

  return { token, setToken }
})
