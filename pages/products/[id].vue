<template>
  <div class="bg-white py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div v-if="isLoading">
        loading
      </div>
      <div v-else class="flex flex-col md:flex-row -mx-4">
        <div class="md:flex-1 px-4">
          <div class="h-[460px] mb-4">
            <NuxtImg class="w-full h-full object-contain" :src="currentProduct.thumbnail" alt="Product Image" />
          </div>
          <div class="flex -mx-2 mb-4">
            <div class="w-1/2 px-2">
              <button class="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                Add to Cart
              </button>
            </div>
            <div class="w-1/2 px-2">
              <button class="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
        <div class="md:flex-1 px-4">
          <h2 class="text-2xl font-bold text-gray-800 mb-2">
            {{ currentProduct.title }}
          </h2>
          <p class="text-gray-600 text-sm mb-4">
            {{ currentProduct.brand }}
          </p>
          <div class="flex mb-4">
            <div class="mr-4">
              <span class="font-bold text-gray-700">Price:</span>
              <span class="text-gray-600">
                ${{ currentProduct.price }}
              </span>
            </div>
            <div>
              <span class="font-bold text-gray-7">Availability: </span>
              <span class="text-gray-600">
                {{ currentProduct.stock }}
              </span>
            </div>
          </div>
          <div class="mb-4">
            <span class="font-bold text-gray-700">
              Category:
            </span>
            <span class="text-gray-600">
              {{ currentProduct.category }}
            </span>
          </div>
          <div>
            <span class="font-bold text-gray-700">
              Product Description:
            </span>
            <p class="text-gray-600 text-sm mt-2">
              {{ currentProduct.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useProductStore } from '~/store/products'
import type { ProductPayloadInterface } from '~/store/products'

const router = useRouter()
const productStore = useProductStore()
const isLoading = ref(true)

const currentProduct = computed(() => {
  return productStore.currentProduct as ProductPayloadInterface
})
const routerParamsId = parseInt(router.currentRoute.value.params?.id as string, 10)
onBeforeMount(async () => {
  if (currentProduct.value && currentProduct.value.id === routerParamsId) {
    isLoading.value = false
    return
  }
  await productStore.fetchProductById(routerParamsId).then(() => {
    isLoading.value = false
  })
})
</script>
<style lang="scss">
</style>
