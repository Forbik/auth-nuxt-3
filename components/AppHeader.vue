<template>
  <Disclosure as="nav" class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <svg
              class="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg
              class="hidden h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <nuxt-link to="/">
              <svg
                fill="#63b81e"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="35px"
                height="35px"
                viewBox="0 0 512 512"
                enable-background="new 0 0 512 512"
                xml:space="preserve"
                stroke="#63b81e"
              ><g id="SVGRepo_bgCarrier" stroke-width="0" /><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" /><g id="SVGRepo_iconCarrier"> <g id="2069a460dcf28295e231f3111e042b0b"> <path display="inline" fill-rule="evenodd" clip-rule="evenodd" d="M256,0.5C114.894,0.5,0.502,114.887,0.502,256.002 C0.502,397.107,114.894,511.5,256,511.5s255.498-114.393,255.498-255.498C511.498,114.887,397.106,0.5,256,0.5z M271.399,468.875 c-8.014-4.741-17.695-6.841-25.82-11.478c-3.73-2.129-6.454-6.903-10.521-8.604c-4.67-1.963-10.654-1.123-15.295-2.874 c-10.845-4.088-22.057-13.802-30.606-21.038c-2.158-1.829-7.078-4.166-5.734-7.647c17.462,13.989,42.329,15.715,60.244,27.729 c18.085,12.13,34.624,23.637,50.68,36.341C286.178,480.265,279.641,473.749,271.399,468.875z M357.459,424.882 c-10.563-6.204-25.45-10.782-34.424-16.255c-8.7-5.298-18.123-19.092-27.733-21.999c-5.626-1.696-15.532,0.387-21.994-0.952 c-7.572-1.563-17.586-9.489-25.815-14.343c-24.145-14.238-53.57-29.986-77.457-41.119c5.248,13.532,15.308,27.953,25.816,39.206 c5.572,5.968,12.567,13.153,19.125,19.125c19.433,17.694,44.18,29.064,65.982,45.901c-20.289-9.743-52.155-23.291-73.63-37.293 c-12.039-7.852-22.614-11.402-32.516-20.081c-6.383-5.602-12.438-16.044-19.125-22.947c-6.633-6.865-16.218-14.476-23.902-22.002 c-5.964-5.83-18.988-17.736-27.733-17.212c-18.269,1.098-16.991,36.932-10.517,51.636c8.001,18.206,26.922,29.725,43.027,44.949 c16.514,15.615,31.601,30.407,43.989,41.119c-25.134-10.566-40.351-31.052-67.896-39.206c1.979,9.244,14.197,16.351,21.042,23.907 c-6.936-2.887-14.022-7.557-21.042-12.435c-14.105-9.806-28.681-14.001-41.119-26.772c-13.049-13.411-21.924-33.063-30.598-53.553 c-6.092-14.389-20.46-45.798-16.26-66.939c1.231-6.167,8.525-14.047,13.39-21.99c9.498-15.52,17.058-28.847,22.947-47.814 c2.877-9.257,2.699-21.383,6.695-27.732c4.258-6.766,14.813-9.544,21.038-14.343c21.652,14.492,18.451,43.049,30.602,62.153 c4.217,6.632,11.27,8.898,16.256,13.39c9.244,8.33,16.921,20.743,26.776,30.599c9.307,9.307,18.904,19.939,28.686,27.732 c8.338,6.646,19.004,12.588,28.693,21.038c17.94,15.657,34.429,31.509,59.288,40.167c15.49,5.394,38.645,5.768,41.119,22.946 c29.509,15.116,48.359,40.887,87.017,46.858C394.985,454.462,375.183,435.287,357.459,424.882z M439.701,314.911 c-2.836-6.325-6.77-12.542-10.524-19.121c-7.282-12.792-11.146-28.07-21.99-37.302c-18.281,15.819-29.271,37.248-45.901,54.514 c-8.321,8.638-17.412,15.361-26.772,22.951c-9.078,7.348-16.842,17.391-28.689,21.037c13.444-25.454,38.915-40.1,57.374-61.2 c18.88-21.587,26.07-50.525,42.076-76.5c0.503-0.773,1.002-1.555,0.956-2.869c3.677,3.335,8.126,5.896,12.435,8.604 c6.237,14.879,7.572,28.307,14.342,43.988c3.123,7.231,9.86,14.326,14.343,21.994c4.778,8.167,7.036,16.971,10.518,24.859 c6.645,15.054,22.489,27.958,5.738,43.988C448.035,351.884,447.395,332.11,439.701,314.911z" /> </g> </g></svg>
            </nuxt-link>
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <nuxt-link v-for="item in navigation" :key="item.name" :to="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">
                {{ item.name }}
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <template v-if="authenticated">
            <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span class="absolute -inset-1.5" />
              <span class="sr-only">View notifications</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </button>
            <!-- Profile dropdown -->
            <Menu as="div" class="relative ml-3">
              <div>
                <MenuButton class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span class="absolute -inset-1.5" />
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']" @click="logout">Sign out</a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </template>
          <template v-else>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <nuxt-link to="/login" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  Login
                </nuxt-link>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']"
          :aria-current="item.current ? 'page' : undefined"
        >
          {{ item.name }}
        </DisclosureButton>
        <nuxt-link to="/login" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
          Login
        </nuxt-link>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/store/auth'

const route = useRoute()
const navigation = ref([
  { name: 'Home', href: '/', current: route.path === '/' },
  { name: 'Products', href: '/products', current: route.path === '/products' },
  { name: 'About Us', href: '/about', current: route.path === '/about' },
  { name: 'Contacts', href: '/contacts', current: route.path === '/contacts' }
])
watch(() => route.path,
  (newPath) => {
    navigation.value.forEach((item) => {
      item.current = item.href === newPath
    })
  }
)
const router = useRouter()
const { logUserOut } = useAuthStore()
const { authenticated } = storeToRefs(useAuthStore()) // make authenticated state reactive
const logout = () => {
  logUserOut()
  router.push('/login')
}
</script>
