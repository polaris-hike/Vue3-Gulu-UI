import Dialog from './Dialog.vue';
import {createApp, h} from 'vue';

const openDialog = (options) => {
    const {title, content,ok,cancel} = options;
    const div = document.createElement('div');
    document.body.appendChild(div);
    const close = ()=>{
        app.unmount(div);
        div.remove();
    }
    const app = createApp({
        render() {
            return h(Dialog, {
                visible: true, title,ok,cancel, 'onUpdate:visible': (newVisible) => {
                    if (!newVisible) {
                        close()
                    }
                }
            });
        }
    });
    app.mount(div);
};

export default openDialog;