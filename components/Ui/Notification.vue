<template>
  <div v-if="visible" class="notification">
    {{ message }}
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  props: {
    message: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      default: 3000
    },
    show: {
      type: Boolean,
      required: true
    }
  },
  setup(props) {
    const visible = ref(props.show);

    watch(() => props.show, (newVal) => {
      if (newVal) {
        visible.value = true;
        setTimeout(() => {
          visible.value = false;
        }, props.duration);
      }
    });

    return {
      visible
    };
  }
};
</script>

<style>
.notification {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #4caf50;
  color: white;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 100000;
}
</style>
