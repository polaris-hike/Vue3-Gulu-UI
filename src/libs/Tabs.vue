<template>
    <div class="gulu-tabs">
        <div class="gulu-tabs-nav" ref="container">
            <div class="gulu-tabs-nav-item"
                 @click="select(t)"
                 :ref="el => {if(selected === t) selectedItem = el}"
                 :class="{selected:t === selected}"
                 v-for="(t,index) in titles"
                 :key="index">{{t}}
            </div>
            <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
        </div>
        <div class="gulu-tabs-content">
            <component :class="{selected:c.props.title === selected}" class="gulu-tabs-content-item"
                       v-for="(c,index) in defaults" :key="index" :is="c"/>
        </div>
    </div>
</template>

<script lang="ts">
    import Tab from './Tab.vue';
    import {ref, watchEffect, onMounted, computed} from 'vue';

    export default {
        name: 'Tabs',
        props: {
            selected: {
                type: String
            }
        },
        setup(props, context) {
            const selectedItem = ref<HTMLDivElement>(null);
            const indicator = ref<HTMLDivElement>(null);
            const container = ref<HTMLDivElement>(null);
            onMounted(() => {
                watchEffect(
                    () => {
                        const {width, left: left1} = selectedItem.value.getBoundingClientRect();
                        const {left: left2} = container.value.getBoundingClientRect();
                        const left = left1 - left2;
                        indicator.value.style.width = width + 'px';
                        indicator.value.style.left = left + 'px';
                    }
                );
            });

            const defaults = context.slots.default();
            defaults.forEach((tag) => {
                if (tag.type !== Tab) {
                    throw new Error('Tabs 子标签必须是 Tab');
                }
            });
            const titles = defaults.map((tag) => {
                return tag.props.title;
            });
            const select = (t) => {
                context.emit('update:selected', t);
            };
            return {defaults, selectedItem, container, indicator, titles, select};
        }
    };
</script>

<style lang="scss">
    $blue: #40a9ff;
    $color: #333;
    $border-color: #d9d9d9;
    .gulu-tabs {
        &-nav {
            display: flex;
            color: $color;
            border-bottom: 1px solid $border-color;
            position: relative;

            &-item {
                padding: 8px 0;
                margin: 0 16px;
                cursor: pointer;

                &:first-child {
                    margin-left: 0;
                }

                &.selected {
                    color: $blue;
                }
            }

            &-indicator {
                position: absolute;
                height: 3px;
                background: $blue;
                left: 0;
                bottom: -1px;
                transition: all .3s;
            }
        }

        &-content {
            padding: 8px 0;

            &-item {
                display: none;

                &.selected {
                    display: block;
                }
            }
        }
    }
</style>