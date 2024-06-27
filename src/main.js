// import { createApp } from 'vue'
import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')
import { createApp } from 'vue'
import MyApp from './App.vue'
import { createStore } from './store'
import MyClock from './components/Clock.vue'

//separating the clock from the app
const clock = createApp(MyClock);
clock.mount('#clock');

const store = createStore();

const app = createApp(MyApp);
app.use(store);
app.mount('#app');