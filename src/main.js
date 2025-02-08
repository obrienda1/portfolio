import './style.css'

import { createApp } from 'vue'
import MyApp from './App.vue'
import { createStore } from './store'
import MyClock from './components/Clock.vue'
import router from './router'

//separating the clock from the app
const clock = createApp(MyClock);
clock.mount('#clock');

const store = createStore();

const app = createApp(MyApp);
app.use(store);
app.use(router);
app.mount('#app');