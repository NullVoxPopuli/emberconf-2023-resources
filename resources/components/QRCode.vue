<template>
  <a v-bind:href="value" target="_blank" v-bind:aria-label="label" class="qr-link">
    <QR v-bind="$attrs" v-bind:value="value"></QR>
    <slot></slot>
  </a>
</template>

<style scoped>
.qr-link {
  text-decoration: none; 
  border: none;
}
.qr-link:hover {
  border: none;
  opacity: .8;
  text-decoration: none;
  transform: translateY(-5px) skewX(1deg);
  transition: all 0.1s;
}
.qr-link :deep(p) { margin: 0; padding: 0; }
</style>

<script>
import QrCodeVue from 'qrcode.vue';

export default {
  components: {
    QR: QrCodeVue
  },
  props: {
    value: String,
    label: String,
  }
}
</script>

