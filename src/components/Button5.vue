<demo>
    支持 loading
</demo>
<template>
    <div>
        <Button loading>加载中</Button>
        <Button>加载完毕</Button>
    </div>
</template>
<script language="ts">
    import Button from '../libs/Button.vue';
    export default {
        name: 'Button5',
        components: {
            Button
        }
    };
</script>

<style scoped>

</style>