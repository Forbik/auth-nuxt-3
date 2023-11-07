<template>
  <div class="products bg-white">
    <div class="mx-auto max-w-2xl px-2 py-8 sm:px-2 sm:py-10 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Trending products</h2>
      <div
        class="products-grid mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-200">
        <template v-if="isLoading">
          <div
            v-for="idx of 12"
            :key="idx + `-product-loader`"
            role="status"
            class="max-w-xs animate-pulse p-4 border-r border-b border-gray-200"
          >
            <div class="flex items-center justify-center lg:h-80 mb-4 bg-gray-300 dark:bg-gray-700">
                <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                </svg>
            </div>
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <span class="sr-only">Loading...</span>
          </div>
        </template>
        <template v-else>
          <div
            v-for="product of products"
            :key="product.id"
            class="
              products-grid__cell
              group
              relative
              p-4
              border-r
              border-b
              border-gray-200
            "
          >
            <div class="goods-tile">
              <div class="flex justify-center items-center w-full overflow-hidden h-80">
                <img :src='product.thumbnail' :alt="product.description" class="max-h-full max-w-full">
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      {{ product.title }}
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">{{ product.brand }}</p>
                </div>
                <p class="text-sm font-medium text-gray-900">${{ product.price }}</p>
              </div>
            </div>
          </div>
        </template>
        

        <!-- More products... -->
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useProductStore } from '~/store/products'
// import type { ProductPayloadInterface } from '~/store/products'

const isLoading = ref(false)
const productStore = useProductStore()
// const dataProducts = reactive<ProductPayloadInterface[]>([])

const products = computed(() => {
  return productStore.products ?? []
})

onMounted(async () => {
  if (productStore.products.length === 0) {
    isLoading.value = true
    await productStore.fetchProducts().then(() => {
      isLoading.value = false
    })
  }
})
</script>
<style lang="scss">
.products {
  &-grid {
    &__cell {
      position: relative;
      &:hover {
        z-index: 3;
        &:before, &:after {
          opacity: 1;
        }
      }
      &:before, &:after {
        content: "";
        position: absolute;
        box-shadow: 0 12px 17px #9a9a9a3d;
        left: -8px;
        top: -4px;
        right: -8px;
        bottom: -4px;
        opacity: 0;
        z-index: 1;
      }
      &:after {
        background-color: #fff;
      }
    }
  }
}
.goods-tile {
  position: relative;
  z-index: 2;
}
</style>