<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
<script lang="ts" setup>
const route = useRoute()
useHead({
  title: `Forb App - ${route.meta.title}`,
  meta: [{ property: 'og:title', content: `App Name - ${route.meta.title}` }],
  bodyAttrs: {
    class: 'forb'
  },
  script: [{ innerHTML: 'console.log(\'Hello world\')' }]
})
</script>
