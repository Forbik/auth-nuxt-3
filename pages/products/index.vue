<template>
  <div class="products bg-white">
    <div class="mx-auto max-w-2xl px-2 py-8 sm:px-2 sm:py-10 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">
        Trending products
      </h2>
      <template v-if="isLoading">
        <div class="products-grid mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-200">
          <LoadersProductGrid
            :number-of-elements="limit"
          />
        </div>
      </template>
      <template v-else>
        <div class="products-grid mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-200">
          <ProductsProductGrid
            :products="products"
          />
        </div>
        <ButtonsLoadMore v-show="isShownButtonLoadMore" :is-loading="isLoadingLoadMore" @load-more="loadMore" />
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useProductStore } from '~/store/products'

const isLoading = ref(false)
const isLoadingLoadMore = ref(false)
const productStore = useProductStore()

const limit = computed(() => {
  return productStore.limit ?? 12
})

const products = computed(() => {
  return productStore.products ?? []
})
const isShownButtonLoadMore = computed(() => {
  return productStore.products.length < productStore.total
})
onMounted(async () => {
  if (productStore.products.length === 0) {
    isLoading.value = true
    await productStore.fetchProducts().then(() => {
      isLoading.value = false
    })
  }
})

const loadMore = async () => {
  isLoadingLoadMore.value = true
  await productStore.fetchProducts(undefined, true).then(() => {
    isLoadingLoadMore.value = false
  })
}
</script>
