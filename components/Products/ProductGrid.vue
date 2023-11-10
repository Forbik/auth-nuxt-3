<template>
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
    <ProductsProductItem
      :product="product"
    />
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
import type { ProductPayloadInterface } from '~/store/products'

defineProps({
  products: {
    type: Array as () => ProductPayloadInterface[],
    default: () => [] as ProductPayloadInterface[]
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
</style>
