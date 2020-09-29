<template>
  <div>
    <router-link to="/">首页</router-link>
    <router-link to="/button">button</router-link>
  </div>
  <router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
