<template>
  <div class="goods-tile">
    <div class="flex justify-center items-center w-full overflow-hidden h-80">
      <NuxtImg
        :src="product.thumbnail"
        loading="lazy"
        :alt="product.description"
        class="max-h-full max-w-full"
      />
    </div>
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-sm text-gray-700">
          <NuxtLink :to="`/products/${product.id}`">
            <span aria-hidden="true" class="absolute inset-0" />
            {{ product.title }}
          </NuxtLink>
        </h3>
        <p class="mt-1 text-sm text-gray-500">
          {{ product.brand }}
        </p>
      </div>
      <p class="text-sm font-medium text-gray-900">
        ${{ product.price }}
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { ProductPayloadInterface } from '~/store/products'
defineProps({
  product: {
    type: Object as () => ProductPayloadInterface,
    default: () => ({} as ProductPayloadInterface)
  }
})
</script>
<style lang="scss">
.goods-tile {
  position: relative;
  z-index: 2;
}
</style>
