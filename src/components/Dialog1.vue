<demo>
    常规使用
</demo>
<template>
    <div>
        <Button @click="toggle">打开对话框</Button>
        <Dialog v-model:visible="visible" title="验证码"  :ok="f1" :cancel="f2" :close-on-out-side="false">
            <p>第一行</p>
            <p>第二行</p>
        </Dialog>
    </div>
</template>

<script lang="ts">
    import Dialog from '../libs/Dialog.vue';
    import Button from '../libs/Button.vue';
    import {
        ref
    } from 'vue';

    export default {
        name:"Dialog1",
        components: {
            Dialog,
            Button
        },
        setup() {
            const visible = ref(false);
            const toggle = () => {
                visible.value = !visible.value;
            };
            const f1 = () => {
                return false;
            };
            const f2 = () => {
                console.log('cancel');
            };
            return {
                visible,
                toggle,
                f1,
                f2
            };
        }
    };
</script>