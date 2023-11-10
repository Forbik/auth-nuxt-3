<template>
  <div
    v-for="idx of numberOfElements"
    :key="idx + `-product-loader`"
    role="status"
    class="max-w-xs animate-pulse p-4 border-r border-b border-gray-200"
  >
    <LoadersProductItem />
  </div>
</template>
<script lang="ts" setup>
defineProps({
  numberOfElements: {
    type: Number,
    default: 12
  }
})
</script>
