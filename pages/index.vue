<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 px-4 py-12">
    <h1 class="text-4xl font-bold text-gray-800 mb-4">
      Hello World!
    </h1>
    <p class="text-gray-600 text-lg mb-8">
      This is a simple application built on Vue.js + Nuxt 3 using the dummyjson.com API.
    </p>
    <div class="flex space-x-4">
      <nuxt-link to="/products" class="bg-blue-700 hover:bg-blue-600 text-white py-2 px-4 rounded shadow-lg transition duration-300">
        Products
      </nuxt-link>
      <nuxt-link to="/login" class="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded shadow-lg transition duration-300">
        Login
      </nuxt-link>
    </div>
    <div class="flex py-8 text-gray-600 text-xs">
      The main technology stack: Vue.js, Nuxt 3, Tailwind, Vee-Validate
    </div>
  </div>
</template>
