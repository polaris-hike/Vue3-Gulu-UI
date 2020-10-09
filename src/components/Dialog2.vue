<demo>
    一键打开 Dialog
</demo>
<template>
    <div>
        <Button @click="showDialog">打开对话框</Button>
    </div>
</template>

<script lang="ts">
    import Button from '../libs/Button.vue';
    import {
        ref,
        h
    } from 'vue';
    import
        openDialog
        from '../libs/openDialog';

    export default {
        name: 'Dialog2',
        components: {
            Button
        },
        setup() {
            const showDialog = () => {
                openDialog({
                    title: 'test',
                    content: '你好',
                    ok() {
                        console.log('ok');
                    },
                    cancel() {
                        console.log('cancel');
                    }
                });
            };
            return {
                showDialog
            };
        }
    };
</script>