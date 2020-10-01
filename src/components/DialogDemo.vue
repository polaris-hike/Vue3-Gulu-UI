<template>
    <div>Dialog 示例</div>
    <h1>示例1</h1>
    <Button @click="visible = true">toggle</Button>
    <Dialog :visible="visible"></Dialog>
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