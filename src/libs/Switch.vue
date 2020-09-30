<template>
    <button :class="{checked:isChecked}" @click="isChecked = !isChecked"><span></span></button>
</template>

<script lang="ts">
    import {ref} from 'vue';

    export default {
        setup() {
            const isChecked = ref(false);
            return {isChecked};
        }
    };
</script>

<style lang="scss" scoped>
    $h: 22px;
    $h2: $h - 4px;
    button {
        height: $h;
        width: $h*2;
        border: none;
        background: gray;
        border-radius: $h/2;
        position: relative;
        cursor: pointer;
        outline: none;

        > span {
            position: absolute;
            top: 2px;
            left: 2px;
            height: $h2;
            width: $h2;
            background: white;
            border-radius: $h2 / 2;
            transition: all .3s;

        }

        &.checked {
            background: blue;
            > span {
                left: calc(100% - #{$h2} - 2px);

            }
        }

    }


</style>