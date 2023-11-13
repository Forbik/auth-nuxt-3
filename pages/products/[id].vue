<template>
  <div class="bg-white py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div v-if="isLoading">
        loading
      </div>
      <div v-else class="flex flex-col md:flex-row -mx-4">
        <ProductsProductItemShort :product="currentProduct" />
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
