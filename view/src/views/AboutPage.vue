<template>
  <NavBar class="bg-gray-900 text-gray-200"/>
  <div class="p-6 max-w-7xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">About Me</h1>
    <p class="text-lg leading-relaxed text-gray-700">
      Brief intro Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    
    <h2 class="text-2xl font-semibold mt-10">My Services</h2>
    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
      <li class="bg-gray-100 rounded-lg p-6 hover:shadow-sm transition">
        <div class="flex items-center gap-3 mb-2">
          <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m-7.5-7.5v15"/>
          </svg>
          <h3 class="font-semibold text-lg">Embedded Systems Development</h3>
        </div>
        <p class="text-left">Designing and programming microcontroller-based hardware projects using C, Arduino, and embedded Linux tools.</p>
      </li>
      <li class="bg-gray-100 rounded-lg p-6 hover:shadow-sm transition">
        <div class="flex items-center gap-3 mb-2">
          <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 2v6h6V2h5a2 2 0 012 2v5h-6v6h6v5a2 2 0 01-2 2h-5v-6H9v6H4a2 2 0 01-2-2v-5h6V9H2V4a2 2 0 012-2h5z"/>
          </svg>
          <h3 class="font-semibold text-lg">Mobile App Development</h3>
        </div>
        <p class="text-left">Building Android apps in Kotlin with clean UI and efficient architecture, often integrating hardware features.</p>
      </li>
      <li class="bg-gray-100 rounded-lg p-6 hover:shadow-sm transition">
        <div class="flex items-center gap-3 mb-2">
          <svg class="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 3h14v14H3V3z"/>
          </svg>
          <h3 class="font-semibold text-lg">Web Development</h3>
        </div>
        <p class="text-left">Creating interactive web apps with Vue, Node.js, and Flask, including full-stack RESTful services.</p>
      </li>
      <li class="bg-gray-100 rounded-lg p-6 hover:shadow-sm transition">
        <div class="flex items-center gap-3 mb-2">
          <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 14h.01M16 10h.01M9 16h6"/>
          </svg>
          <h3 class="font-semibold text-lg">Technical Writing / Documentation</h3>
        </div>
        <p class="text-left">Clear and concise documentation for engineering projects, APIs, and tutorials.</p>
      </li>
    </ul>

    <!-- Download Button -->
    <div class="text-center mt-12">
      <a href="/resume.pdf" download target="_blank" class="inline-block bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
        Download Resume
      </a>
    </div>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
</script>
