<template>
    <div>Button 示例</div>
    <Demo :component="Button1"></Demo>
    <Demo :component="Button2"></Demo>
    <Demo :component="Button3"></Demo>
    <Demo :component="Button4"></Demo>
    <Demo :component="Button5"></Demo>
</template>

<script lang="ts">
    import Button from '../libs/Button.vue';
    import Demo from './Demo.vue';
    import Button1 from './Button1.vue';
    import Button2 from './Button2.vue';
    import Button3 from './Button3.vue';
    import Button4 from './Button4.vue';
    import Button5 from './Button5.vue';

    export default {
        name: 'ButtonDemo',
        components: {
            Button,Demo
        },
        setup(){
            return {Button1,Button2,Button3,Button4,Button5}
        }
    };
</script>

<style scoped>

</style>