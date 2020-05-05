<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
:root {
  --Theme_color: #0e74bb;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
