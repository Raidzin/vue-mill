<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>
        <div v-if="tokenStore.token">
          <div class="row">
            <q-tabs align="left">
              <q-route-tab to="/" label="Главная" />
              <q-route-tab to="/login" label="Войти" />
            </q-tabs>
            <q-avatar><img :src="userData.avatar_url" /></q-avatar>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useTokenStore } from './stores/auth'
import { axiosClient } from './mill-client'

const tokenStore = useTokenStore()

const userData = ref({})

onMounted(async () => {
  try {
    userData.value = (await axiosClient.getUserData(tokenStore.token)).data
  } catch (err) {
    console.error(err)
  }
})
</script>
