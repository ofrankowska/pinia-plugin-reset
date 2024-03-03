# Pinia Plugin Reset

## Description

Vue plugin for resetting Pinia setup store.

## Installation

```bash
npm install pinia-plugin-reset
```

```js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginReset from 'pinia-plugin-reset'
import App from './App.vue'

const pinia = createPinia()
pinia.use(piniaPluginReset)

const app = createApp(App)
app.use(pinia)
app.mount('#app')
```

## Usage

```js
const store = useMyPiniaStore()

store.$reset()
```
