<template>
  <div class="md:flex-1 px-4">
    <div class="h-[460px] mb-4">
      <NuxtImg class="w-full h-full object-contain" :src="product.thumbnail" alt="Product Image" />
    </div>
    <div class="flex -mx-2 mb-4">
      <div class="w-1/2 px-2">
        <nuxt-link to="/login" class="block text-center w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
          Add to Cart
        </nuxt-link>
      </div>
      <div class="w-1/2 px-2">
        <nuxt-link to="/login" class="block text-center w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300">
          Add to Wishlist
        </nuxt-link>
      </div>
    </div>
  </div>
  <div class="md:flex-1 px-4">
    <h2 class="text-2xl font-bold text-gray-800 mb-2">
      {{ product.title }}
    </h2>
    <p class="text-gray-600 text-sm mb-4">
      {{ product.brand }}
    </p>
    <div class="flex mb-4">
      <div class="mr-4">
        <span class="font-bold text-gray-700">Price:</span>
        <span class="text-gray-600">
          ${{ product.price }}
        </span>
      </div>
      <div>
        <span class="font-bold text-gray-700">Availability: </span>
        <span class="text-gray-600">
          {{ product.stock }}
        </span>
      </div>
    </div>
    <div class="mb-4">
      <span class="font-bold text-gray-700">
        Category:
      </span>
      <span class="text-gray-600">
        {{ product.category }}
      </span>
    </div>
    <div>
      <span class="font-bold text-gray-700">
        Product Description:
      </span>
      <p class="text-gray-600 text-sm mt-2">
        {{ product.description }}
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
