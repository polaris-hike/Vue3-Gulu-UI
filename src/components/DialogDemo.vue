<template>
    <div>Dialog 示例</div>
    <h1>示例1</h1>
    <Button @click="visible = true">toggle</Button>
    <Dialog v-model:visible="visible" :close-on-out-side="false">
        <template v-slot:title>
            <strong>标题</strong>
        </template>
        <template v-slot:content>
            <strong>第一行</strong>
            <strong>第二行</strong>
        </template>
    </Dialog>
</template>

<script lang="ts">
    import Dialog from "../libs/Dialog.vue";
    import Button from '../libs/Button.vue';
    import  {ref} from 'vue';
    export default {
        name: "DialogDemo",
        components:{
            Dialog,Button
        },
        setup(){
            const visible = ref(false);
            return {visible}
        }
    }
</script>

<style scoped>

</style>