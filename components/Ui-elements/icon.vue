<script setup lang="ts">
import { Icon } from "@iconify/vue";
defineProps({
  iconName: {
    type: String,
    default: "carbon:play-filled",
  },
  value: {
    type: String,
    default: "",
  },
  colorIcon: {
    type: String,
    default: "black",
  },
  sizeWidth: {
    type: String,
    default: "32px",
  },
  sizeHeigth: {
    type: String,
    default: "32px",
  },
  turnX: {
    type: Boolean,
    default: false,
  },
  turnY: {
    type: Boolean,
    default: false,
  },
  classIcon: String,
  radiusIcon: {
    type: String,
    default: "100%",
  },
  rotate: {
    type: String,
    default: "90deg",
  }
});
</script>
<template>
  <Icon
      :title="iconName"
      :icon="iconName"
      :color="colorIcon"
      :width="sizeWidth"
      :height="sizeHeigth"
      :horizontal-flip="turnX"
      :vertical-flip="turnY"
      :rotate="rotate"
      :class="classIcon"/>
</template>
<style lang="scss" scoped>
</style>
