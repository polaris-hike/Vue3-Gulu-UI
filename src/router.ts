import {createRouter, createWebHashHistory} from 'vue-router';
import {h} from 'vue';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import DocDemo from './components/DocDemo.vue';
import MarkDown from './components/MarkDown.vue';

const getMd = filename => h(MarkDown, {path: `../markdown/${filename}.md`, key: filename});

const history = createWebHashHistory();
const router = createRouter({
    history,
    routes: [
        {
            path: '/', component: Home
        },
        {
            path: '/doc', component: Doc,
            children: [
                {path: '', component: DocDemo},
                {path: 'intro', component: getMd('intro')},
                {path: 'get-started', component: getMd('get-started')},
                {path: 'install', component: getMd('install')},
                {
                    path: 'switch', component: SwitchDemo
                },
                {
                    path: 'button', component: ButtonDemo
                },
                {
                    path: 'dialog', component: DialogDemo
                },
                {
                    path: 'tabs', component: TabsDemo
                },
            ]
        }
    ]
});

export default router;