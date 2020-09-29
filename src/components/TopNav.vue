<template>
    <header>
        <div class="logo"><router-link to="/">LOGO</router-link> </div>
        <ul class="menu">
            <li>
                <router-link to="/">首页</router-link>
            </li>
            <li>
                <router-link to="/doc">文档</router-link>
            </li>
        </ul>
        <span class="toggleAside" @click="toggleAside"></span>
    </header>
</template>

<script lang="ts">
    import {inject, Ref} from 'vue';

    export default {
        name: 'TopNav',
        setup() {
            const asideVisible = inject<Ref<boolean>>('asideVisible'); //get 拿到数据
            const toggleAside = () => {
                asideVisible.value = !asideVisible.value;
            };
            return {toggleAside};
        }
    };
</script>

<style lang="scss" scoped>
    header {
        background: pink;
        display: flex;
        padding: 16px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 10;
        justify-content: center;
        align-items: center;

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

        > .toggleAside {
            display: none;
            width: 24px;
            height: 24px;
            background-color: red;
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
        }

        @media (max-width: 500px) {
            > .menu {
                display: none;
            }
            > .logo {
                margin: 0 auto;
            }
            > .toggleAside {
                display: inline-block;
            }
        }
    }
</style>