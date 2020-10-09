<template>
    <div>Tabs 示例</div>
    <h1>示例1</h1>

    <Demo :component="Tabs1"></Demo>
</template>

<script>
    import Demo from "./Demo.vue";
    import Tabs1 from "./Tabs1.vue";
    import {ref} from 'vue'

    export default {
        name: "TabsDemo",
        components: {
            Demo, Tabs1
        },
        setup() {
            const selected = ref('导航1')
            return {selected, Tabs1}
        }
    }
</script>

<style scoped>

</style>