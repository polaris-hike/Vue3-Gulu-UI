<demo>
    常规使用
</demo>
<template>
    <div>
        <Button>你好</Button>
        <Button theme="link">你好</Button>
        <Button theme="text">你好</Button>
    </div>
</template>

<script lang="ts">
    import Button from '../libs/Button.vue';
    export default {
        name: "Button1",
        components: {
            Button
        }
    }
</script>

<style scoped>

</style>