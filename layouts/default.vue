<template>
  <div class="flex flex-col h-screen justify-between">
    <AppHeader />
    <BreadCrumb />
    <div class="mb-auto mainContent">
      <!-- max-w-7xl px-2 sm:px-6 lg:px-8 -->
      <slot />
    </div>
    <AppFooter />
  </div>
</template>
