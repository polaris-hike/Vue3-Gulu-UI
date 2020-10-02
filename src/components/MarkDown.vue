<template>
    <article class="markdown-body" v-html="content">
    </article>
</template>


<script lang="ts">
    import {ref} from 'vue';

    export default {
        name: 'MarkDown',
        props: {
            path: {
                type: String,
                required: true
            }
        },
        setup(props) {
            const content = ref(null);
            import(props.path).then(res => {
                console.log(res);
                content.value = res.default;
            });
            return {content};
        }
    };
</script>

<style scoped>

</style>