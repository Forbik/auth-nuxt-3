<template>
  <button
    class="flex w-full justify-center items-center mt-10 px-4 py-2 font-semibold leading-6 text-sm rounded-md text-white transition ease-in-out duration-150"
    :class="isLoading ? `bg-blue-500 hover:bg-blue-400 cursor-not-allowed` : `bg-blue-700 hover:bg-blue-600`"
    :disabled="isLoading"
    @click="updateLoadMoreData"
  >
    <template v-if="isLoading">
      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
      Loading...
    </template>
    <template v-else>
      Load more
    </template>
  </button>
</template>
<script lang="ts" setup>
defineProps({
  isLoading: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['loadMore'])
const updateLoadMoreData = () => {
  emits('loadMore')
}
</script>
