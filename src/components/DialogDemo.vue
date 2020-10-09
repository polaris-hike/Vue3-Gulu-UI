<template>
    <div>Dialog 示例</div>
    <Demo :component="Dialog1"></Demo>
    <Demo :component="Dialog2"></Demo>
</template>

<script lang="ts">
    import Dialog1 from './Dialog1.vue';
    import Dialog2 from './Dialog2.vue';
    import Demo from './Demo.vue';
    import Dialog from '../libs/Dialog.vue';
    import Button from '../libs/Button.vue';
    import openDialog from '../libs/openDialog';
    import {ref} from 'vue';

    export default {
        name: 'DialogDemo',
        components: {
            Dialog, Button,Demo
        },
        setup() {
            const visible = ref(false);
            const showDialog = () => {
                openDialog({
                    title: 'test',
                    content: 'xxxxx',
                    ok() {
                        console.log('ok');
                    },
                    cancel() {
                        console.log('cancel');
                    }
                });
            };
            return {visible, showDialog,Dialog1,Dialog2};
        }
    };
</script>

<style scoped>

</style>