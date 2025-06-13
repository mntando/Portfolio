<template>
  <NavBar class="bg-gray-900 text-gray-200"/>
  <div class="p-6 max-w-7xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">About Me</h1>
    <p class="text-lg leading-relaxed text-gray-700">
      I'm a final-year Electronics Engineering student with a deep interest in embedded systems, digital design, and programming. I love bridging the gap between physical hardware and software logic to build robust, scalable systems.
      My journey has taken me through various projects, from designing microcontroller-based devices to developing full-stack applications. I thrive on challenges and enjoy learning new technologies to enhance my skill set.
    </p>
    
    <h2 class="text-2xl font-semibold mt-10">What I can do</h2>
    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
      <li class="bg-gray-100 rounded-lg p-6 hover:shadow-sm transition">
        <div class="flex items-center gap-3 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="size-5" viewBox="0 0 16 16">
            <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0m-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/>
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
          <h3 class="font-semibold text-lg">Web Development</h3>
        </div>
        <p class="text-left">Creating interactive web apps with Vue, Node.js, and Flask, including full-stack RESTful services.</p>
      </li>
      <li class="bg-gray-100 rounded-lg p-6 hover:shadow-sm transition">
        <div class="flex items-center gap-3 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
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
