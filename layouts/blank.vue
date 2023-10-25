<template>
  <div>
    <div class="blankLayout">
      <slot />
    </div>
    <AppNotification v-if="notification.type" />
  </div>
</template>
<script lang='ts' setup>
import { useNotificationStore } from '~/store/notification'

const notification = useNotificationStore()
</script>
