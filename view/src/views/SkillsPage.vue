<template>
  <NavBar class="bg-gray-900 text-gray-200"/>
  <div class="p-6 max-w-7xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">Skills</h1>
    <p class="text-lg leading-relaxed text-gray-700 mb-10">
      Here are some of the key technical and soft skills I've developed through hands-on projects, formal education, and self-driven learning.
    </p>

    <!-- Skills Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      <div class="bg-gray-100 rounded-lg p-5 hover:shadow transition">
        <div class="flex items-center gap-3 mb-2">
          <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m-7.5-7.5v15"/>
          </svg>
          <h3 class="font-semibold text-lg">Embedded C / C++</h3>
        </div>
        <p>Writing low-level firmware for microcontrollers, optimizing performance, and interfacing with sensors and peripherals.</p>
      </div>

      <div class="bg-gray-100 rounded-lg p-5 hover:shadow transition">
        <div class="flex items-center gap-3 mb-2">
          <svg class="w-6 h-6 text-green-700" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11h2v5h-2V7zm0 6h2v2h-2v-2z"/>
          </svg>
          <h3 class="font-semibold text-lg">Arduino & Raspberry Pi</h3>
        </div>
        <p>Prototyping and deploying electronics projects using various I/O devices, communication protocols, and libraries.</p>
      </div>

      <div class="bg-gray-100 rounded-lg p-5 hover:shadow transition">
        <div class="flex items-center gap-3 mb-2">
          <svg class="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 3h14v14H3V3z"/>
          </svg>
          <h3 class="font-semibold text-lg">Vue.js</h3>
        </div>
        <p>Developing responsive, component-driven web UIs with Vue Options API, Vue Router, and Tailwind CSS.</p>
      </div>

      <div class="bg-gray-100 rounded-lg p-5 hover:shadow transition">
        <div class="flex items-center gap-3 mb-2">
          <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 2v6h6V2h5a2 2 0 012 2v5h-6v6h6v5a2 2 0 01-2 2h-5v-6H9v6H4a2 2 0 01-2-2v-5h6V9H2V4a2 2 0 012-2h5z"/>
          </svg>
          <h3 class="font-semibold text-lg">Kotlin (Android)</h3>
        </div>
        <p>Creating native Android apps with modern architecture components, including MVVM and Jetpack libraries.</p>
      </div>

      <div class="bg-gray-100 rounded-lg p-5 hover:shadow transition">
        <div class="flex items-center gap-3 mb-2">
          <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
          </svg>
          <h3 class="font-semibold text-lg">Python & Flask</h3>
        </div>
        <p>Building lightweight backends, APIs, and scripting tools for automation and data handling.</p>
      </div>

      <div class="bg-gray-100 rounded-lg p-5 hover:shadow transition">
        <div class="flex items-center gap-3 mb-2">
          <svg class="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0l-8 4v8c0 5.25 3.438 10.313 8 12 4.563-1.688 8-6.75 8-12V4l-8-4z"/>
          </svg>
          <h3 class="font-semibold text-lg">Git & GitHub</h3>
        </div>
        <p>Version control for solo and team projects, including branch workflows, pull requests, and CI/CD basics.</p>
      </div>

      <div class="bg-gray-100 rounded-lg p-5 hover:shadow transition">
        <div class="flex items-center gap-3 mb-2">
          <svg class="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 4h16v16H4z"/>
          </svg>
          <h3 class="font-semibold text-lg">Linux Tools</h3>
        </div>
        <p>Comfortable with the terminal, shell scripting, and embedded Linux environments for debugging and system control.</p>
      </div>

      <div class="bg-gray-100 rounded-lg p-5 hover:shadow transition">
        <div class="flex items-center gap-3 mb-2">
          <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h6"/>
          </svg>
          <h3 class="font-semibold text-lg">Problem Solving</h3>
        </div>
        <p>Strong analytical thinking and debugging ability, especially in system integration and cross-platform projects.</p>
      </div>

      <div class="bg-gray-100 rounded-lg p-5 hover:shadow transition">
        <div class="flex items-center gap-3 mb-2">
          <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 14h.01M16 10h.01M9 16h6"/>
          </svg>
          <h3 class="font-semibold text-lg">Communication</h3>
        </div>
        <p>Clear technical writing and team collaboration through documentation, reports, and knowledge sharing.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
</script>
