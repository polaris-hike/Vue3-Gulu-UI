<template>
    <div>Tabs 示例</div>
    <h1>示例1</h1>
    <Tabs>
        <Tab title="导航1">内容一</Tab>
        <Tab title="导航2">内容二</Tab>
    </Tabs>
</template>

<script>
    import Tabs from "../libs/Tabs.vue";
    import Tab from "../libs/Tab.vue";
    export default {
        name: "TabsDemo",
        components:{
            Tabs,Tab
        }
    }
</script>

<style scoped>

</style>