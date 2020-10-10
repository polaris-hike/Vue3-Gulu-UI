import {createRouter, createWebHashHistory} from 'vue-router';
import {h} from 'vue';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import MarkDown from './components/MarkDown.vue';
import intro from './markdown/intro.md'
import getStarted from './markdown/get-started.md'
import install from './markdown/install.md'

const getMd = (string,key) => h(MarkDown, {content: string, key});

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
                {path: '', redirect:'/doc/intro'},
                {path: 'intro', component: getMd(intro,'intro')},
                {path: 'get-started', component: getMd(getStarted,'get-started')},
                {path: 'install', component: getMd(install,'install')},
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