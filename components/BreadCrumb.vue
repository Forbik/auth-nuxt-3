<template>
  <div class="bg-gray-100 shadow mb-0.5">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">
        <ul class="flex items-center space-x-2">
          <li v-for="(crumb, index) in breadcrumbs" :key="index">
            <span v-if="index !== 0"> / </span>
            <nuxt-link :to="crumb.to" :title="crumb.text" :aria-current="index === breadcrumbs.length - 1 ? 'page' : null">
              {{ crumb.text }}
            </nuxt-link>
          </li>
        </ul>
      </h1>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from 'vue'

const router = useRouter()

const generateBreadcrumbs = () => {
  const fullPath = router.currentRoute.value.fullPath
  const paths = fullPath.split('/').filter(Boolean)
  let to = '/'
  const breadcrumbs = paths.map((path) => {
    const breadcrumb = {
      text: !path || path === '' ? 'Home' : path.charAt(0).toUpperCase() + path.slice(1),
      to: to + path
    }
    to += path + '/'
    return breadcrumb
  })
  if (breadcrumbs.length === 0) {
    breadcrumbs.push({ text: 'Home', to: '/' })
  }
  return breadcrumbs
}
const breadcrumbs = ref(generateBreadcrumbs())

watchEffect(() => {
  breadcrumbs.value = generateBreadcrumbs()
})
</script>
