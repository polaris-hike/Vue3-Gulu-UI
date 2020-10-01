<template>
    <div>Dialog 示例</div>
    <h1>示例1</h1>
    <Button @click="visible = true">toggle</Button>
    <Dialog v-model:visible="visible" title="验证码" :close-on-out-side="false">
        <p>第一行</p>
        <p>第二行</p>
    </Dialog>
    <h1>示例二</h1>
    <Button @click="showDialog">toggle</Button>
</template>

<script lang="ts">
    import Dialog from "../libs/Dialog.vue";
    import Button from '../libs/Button.vue';
    import openDialog from '../libs/openDialog';
    import  {ref} from 'vue';
    export default {
        name: "DialogDemo",
        components:{
            Dialog,Button
        },
        setup(){
            const visible = ref(false);
            const showDialog = ()=>{
                openDialog({
                    title:'test',
                    content:"xxxxx",
                    ok(){
                        console.log('ok');
                    },
                    cancel(){
                        console.log('cancel');
                    }
                })
            }
            return {visible,showDialog}
        }
    }
</script>

<style scoped>

</style>