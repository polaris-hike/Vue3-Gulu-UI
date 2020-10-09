<demo>
    支持 disable
</demo>
<template>
    <div>
        <Button disabled>禁用按钮</Button>
        <Button theme="link" disabled>禁用链接按钮</Button>
        <Button theme="text" disabled>禁用按钮</Button>
    </div>
</template>

<script language="ts">
    import Button from "../libs/Button.vue";
    export default {
        name: "Button4",
        components: {
            Button
        }
    }
</script>

<style scoped>

</style>