import {createApp} from 'vue';
import App from './App.vue';
import HelloWorld from './components/HelloWorld.vue';
import Button from './components/Button.vue';
import './index.css';
import {createWebHashHistory, createRouter} from 'vue-router';

const history = createWebHashHistory();
const router = createRouter({
    history: history,
    routes: [
        {
            path: '/', component: HelloWorld
        },
        {
            path: '/button', component: Button
        }
    ]
});

const app =createApp(App)
app.use(router)
app.mount('#app');

