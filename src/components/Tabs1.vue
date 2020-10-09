<demo>
    常规使用
</demo>
<template>
    <Tabs v-model:selected="selected">
        <Tab title="导航1">内容一</Tab>
        <Tab title="导航2">内容二</Tab>
    </Tabs>
</template>

<script lang="ts">
    import Tabs from "../libs/Tabs.vue";
    import Tab from "../libs/Tab.vue";
    import {ref} from 'vue'
    export default {
        name: "Tabs1",
        components:{
            Tabs,Tab
        },
        setup() {
            const selected = ref('导航1')
            return {selected}
        }
    }
</script>

<style scoped>

</style>