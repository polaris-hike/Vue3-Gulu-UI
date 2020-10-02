
import "./libs/gulu.scss";
import "./libs/svg.js";
import "./index.scss";
import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import 'github-markdown-css'
import MarkDown from '../src/components/MarkDown.vue'



const app = createApp(App);
app.use(router);
app.mount('#app');
app.component("MarkDown",MarkDown);

