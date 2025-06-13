<template>
  <header class="text-gray-100">
    <div class="flex justify-between items-center py-4 px-6 sm:pl-18">

      <router-link to="/" class="flex items-center space-x-2 text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 120 120">
          <path fill="currentColor" stroke="currentColor" stroke-width="3" d="M88.2,108.4h-16.6c-1.4,0-2.6-1.2-2.6-2.6v-29.2h-17.9v29.2c0,1.4-1.2,2.6-2.6,2.6h-16.6 c-6.6,0-11.9-5.9-11.9-13.2v-31.8h-6.6c-2.6,0-5-1.7-5.9-4.4-1-2.9-.2-6.1,2.1-8L56.2,13c2.3-1.8,5.4-1.8,7.7,0l46.7,38.1 h0c2.3,1.9,3.1,5.1,2.1,8-.9,2.7-3.3,4.4-5.9,4.4h-6.6v31.8c0,7.3-5.3,13.2-11.9,13.2ZM74.2,103.2h14c3.7,0,6.7-3.6,6.7-8 v-34.4c0-1.4,1.2-2.6,2.6-2.6h9.2c.6,0,.9-.6,1-.9.2-.7.2-1.6-.5-2.1L60.5,17c-.3-.3-.7-.3-1,0L12.7,55.2c-.7.5-.7,1.5-.5,2.1 .1.3.4.9,1,.9h9.2c1.4,0,2.6,1.2,2.6,2.6v34.4c0,4.4,3,8,6.7,8h14v-29.2c0-1.4,1.2-2.6,2.6-2.6h23.1c1.4,0,2.6,1.2,2.6,2.6v29.2Z" />
        </svg>
      </router-link>

      <!-- Hamburger Icon for Mobile -->
      <button @click="menuOpen = !menuOpen" class="sm:hidden focus:outline-none">
        <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Navigation links (hidden on mobile) -->
      <nav class="hidden sm:flex items-center space-x-12">
        <router-link to="/about" class="hover:text-gray-300">About</router-link>
        <router-link to="/skills" class="hover:text-gray-300">Skills</router-link>
        <router-link to="/projects" class="hover:text-gray-300">Projects</router-link>
        <router-link to="/contact">
          <button class="rounded-full bg-gray-100 text-black px-4 py-1 hover:bg-gray-300 transition">Contact</button>
        </router-link>
      </nav>
    </div>

    <!-- Mobile dropdown menu -->
    <div v-if="menuOpen" class="sm:hidden flex flex-col items-start px-6 pb-4 space-y-6">
      <router-link to="/about" class="hover:text-gray-300">About</router-link>
      <router-link to="/skills" class="hover:text-gray-300">Skills</router-link>
      <router-link to="/projects" class="hover:text-gray-300">Projects</router-link>
      <router-link to="/contact">
        <button class="rounded-full bg-gray-100 text-black px-4 py-1 hover:bg-gray-300 transition">Contact</button>
      </router-link>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
</script>
