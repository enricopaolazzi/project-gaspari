import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/app.css';

const app = createApp(App);
app.use(router);

// Global variables (need "VUE_APP" prefix)
const baseDomain = process.env.VUE_APP_BASE_DOMAIN;
const apiVersion = process.env.VUE_APP_API_VERSION;

app.provide('$baseDomain', baseDomain);
app.provide('$apiVersion', apiVersion);
app.provide('$baseApiPath', baseDomain + apiVersion);

app.mount('#app');