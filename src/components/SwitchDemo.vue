<template>
  <Switch v-model:value="isChecked" ></Switch>
</template>

<script lang="ts">
    import Switch from '../libs/Switch.vue';
    import {ref} from 'vue'

    export default {
        name: 'SwitchDemo',
        components: {
            Switch
        },
      setup(){
          const isChecked = ref(false);
          return {isChecked}
      }
    };
</script>

<style scoped>

</style>