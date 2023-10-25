<template>
  <div class="flex flex-col h-screen justify-between">
    <AppHeader />
    <BreadCrumb />
    <div class="mb-auto mainContent">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>

<style lang="scss">
</style>
