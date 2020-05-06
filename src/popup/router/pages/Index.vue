<template>
  <div v-if="warning" id="warn-cover">
    <p>{{ warning }}</p>
  </div>
</template>

<script>
import { detect } from 'detect-browser';

export default {
  data() {
    return {
      warning: null,
    };
  },
  mounted: function() {
    const detectResult = detect();
    if (detectResult.name !== 'chrome') {
      this.warning = detectResult.name;
      return;
    }

    const bg = chrome.extension.getBackgroundPage();
    if (bg.notepadState !== 'connected') {
      this.warning = 'Not connected';
    }
  },
};
</script>

<style lang="scss" scoped>
#warn-cover {
  width: 100%;
  height: 100%;
  background: var(--Theme_color);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
