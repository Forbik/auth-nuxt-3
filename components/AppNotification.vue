<template>
  <div
    class="
      absolute
      top-8
      right-8
      bg-white
      border
      max-w-sm
      border-slate-300
      h-20
      shadow-lg
      rounded-md
      gap-4
      p-4
      flex flex-row
      items-center
      justify-center
    "
  >
    <section class="w-6 h-full flex flex-col items-center justify-start">
      <template v-if="notification.type === `success`">
        <svg class="fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
        </svg>
      </template>
      <template v-else>
        <svg class="fill-current text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.54a5 5 0 0 1 7.08 0 1 1 0 0 1-1.42 1.42 3 3 0 0 0-4.24 0 1 1 0 0 1-1.42-1.42zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
        </svg>
      </template>
    </section>
    <section class="h-full flex flex-col items-start justify-end gap-1">
      <h1 class="text-base font-semibold text-zinc-800 antialiased">
        {{ notification.title }}
      </h1>
      <p class="text-sm font-medium text-zinc-400 antialiased">
        {{ notification.message }}
      </p>
    </section>
    <section class="w-5 h-full flex flex-col items-center justify-start" @click="clearNotification">
      <svg
        width="100%"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="cursor-pointer"
      >
        <path
          d="M4.06585 3.00507C3.77296 2.71218 3.29809 2.71218 3.00519 3.00507C2.7123 3.29796 2.7123 3.77284 3.00519 4.06573L4.06585 3.00507ZM10.0763 11.1368C10.3692 11.4297 10.844 11.4297 11.1369 11.1368C11.4298 10.8439 11.4298 10.369 11.1369 10.0761L10.0763 11.1368ZM3.00519 4.06573L10.0763 11.1368L11.1369 10.0761L4.06585 3.00507L3.00519 4.06573Z"
          fill="#989fac"
        />
        <path
          d="M11.1369 4.06573C11.4298 3.77284 11.4298 3.29796 11.1369 3.00507C10.844 2.71218 10.3691 2.71218 10.0762 3.00507L11.1369 4.06573ZM3.00517 10.0761C2.71228 10.369 2.71228 10.8439 3.00517 11.1368C3.29806 11.4297 3.77294 11.4297 4.06583 11.1368L3.00517 10.0761ZM10.0762 3.00507L3.00517 10.0761L4.06583 11.1368L11.1369 4.06573L10.0762 3.00507Z"
          fill="#989fac"
        />
      </svg>
    </section>
  </div>
</template>
<script lang="ts" setup>
import { useNotificationStore } from '~/store/notification'
const notification = useNotificationStore()
const clearNotification = () => {
  notification.clearNotification()
}
</script>
