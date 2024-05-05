<template>
  <q-card class="q-ma-md q-pa-md">
    <div class="column">
      <span>Code: {{ codeParam }}</span>
      <span>State: {{ stateParam }}</span>
    </div>
  </q-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTokenStore } from '@/stores/auth'
import { axiosClient } from '@/mill-client'

const router = useRouter()
const route = useRoute()
const token = useTokenStore()

const codeParam = ref(route.query.code)
const stateParam = ref(route.query.state)

onMounted(async () => {
  if (token.value) {
    router.push('/')
    return
  }
  try {
    const response = await axiosClient.getAuthToken(codeParam.value, stateParam.value)
    token.setToken(response.data.token)
  } catch (err) {
    console.log(err)
  }
})
</script>
