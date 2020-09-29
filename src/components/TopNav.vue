<template>
    <header>
        <div class="logo" @click="toggleAside">LOGO</div>
        <ul class="menu">
            <li>
                <router-link to="/">首页</router-link>
            </li>
            <li>
                <router-link to="/doc">文档</router-link>
            </li>
        </ul>
    </header>
</template>

<script lang="ts">
    import {inject,Ref} from 'vue';

    export default {
        name: "TopNav",
        setup(){
            const asideVisible = inject<Ref<boolean>>('asideVisible'); //get 拿到数据
            const toggleAside = ()=>{
                asideVisible.value  =!asideVisible.value
            }
            return {toggleAside}
        }
    }
</script>

<style lang="scss" scoped>
    header {
        background: pink;
        display: flex;
        padding: 16px;
        position: relative;
        z-index: 10;
        > .logo {
            max-width: 6em;
            margin-right: auto;
        }

        > .menu {
            display: flex;
            white-space: nowrap;
            flex-wrap: nowrap;

            > li {
                margin: 0 1em;
            }
        }
    }
</style>