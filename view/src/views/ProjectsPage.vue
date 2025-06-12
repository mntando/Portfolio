<template>
  <NavBar class="bg-gray-900 text-gray-200"/>
  <div class="p-6 max-w-7xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">Projects</h1>
    <p class="text-lg leading-relaxed text-gray-700 mb-10">
      Here are some of the projects I've built across embedded systems, mobile, and web development. More to come.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      <!-- Project 1 -->
      <div class="bg-gray-100 rounded-xl overflow-hidden hover:shadow-sm transition">

        <img src="https://picsum.photos/200/300?random=1" alt="Smart Water Monitor" class="w-full h-40 object-cover">

        <div class="p-5">
          <div class="flex items-center gap-3 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
            </svg>

            <h3 class="font-semibold text-lg">Smart Water Monitor</h3>
          </div>
          <p class="text-gray-700 mb-4">
            Monitors tank levels using ultrasonic sensors and ESP32. Sends real-time data to a mobile app via Wi-Fi.
          </p>

          <a href="https://github.com/yourusername/smart-water-monitor" target="_blank"
            class="inline-block text-sm text-blue-600 hover:underline font-medium">
            View on GitHub →
          </a>
        </div>
      </div>

      <!-- Project 2 -->
      <div class="bg-gray-100 rounded-xl overflow-hidden hover:shadow-sm transition">
        <img src="https://picsum.photos/200/300?random=2" alt="Smart Home App" class="w-full h-40 object-cover">
        <div class="p-5">
          <div class="flex items-center gap-3 mb-2">
            <svg class="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h3v-6h4v6h3a2 2 0 002-2V5a2 2 0 00-2-2H5z"/>
            </svg>
            <h3 class="font-semibold text-lg">Smart Home App</h3>
          </div>
          <p class="text-gray-700 mb-4">
            Android app in Kotlin for controlling home devices. Supports MQTT and REST APIs for hardware integration.
          </p>
          <a href="https://github.com/yourusername/smart-home-app" target="_blank"
            class="inline-block text-sm text-blue-600 hover:underline font-medium">
            View on GitHub →
          </a>
        </div>
      </div>

      <!-- Project 3 -->
      <div class="bg-gray-100 rounded-xl overflow-hidden hover:shadow-sm transition">
        <img src="https://picsum.photos/200/300?random=3" alt="Traffic Light Dashboard" class="w-full h-40 object-cover">
        <div class="p-5">
          <div class="flex items-center gap-3 mb-2">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h6"/>
            </svg>
            <h3 class="font-semibold text-lg">Traffic Light Dashboard</h3>
          </div>
          <p class="text-gray-700 mb-4">
            Electron-Vue app showing real-time traffic light states on a Leaflet map. Data pulled from a PostgreSQL DB.
          </p>
          <a href="https://github.com/yourusername/traffic-light-dashboard" target="_blank"
            class="inline-block text-sm text-blue-600 hover:underline font-medium">
            View on GitHub →
          </a>
        </div>
      </div>

      <!-- Project 4 -->
      <div class="bg-gray-100 rounded-xl overflow-hidden hover:shadow-sm transition">
        <img src="https://picsum.photos/200/300?random=4" alt="Portfolio Website" class="w-full h-40 object-cover">
        <div class="p-5">
          <div class="flex items-center gap-3 mb-2">
            <svg class="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 4h16v16H4z"/>
            </svg>
            <h3 class="font-semibold text-lg">Portfolio Website</h3>
          </div>
          <p class="text-gray-700 mb-4">
            Responsive personal site built with Vue.js and Tailwind CSS. Fully deployed on GitHub Pages.
          </p>
          <a href="https://github.com/yourusername/portfolio-website" target="_blank"
            class="inline-block text-sm text-blue-600 hover:underline font-medium">
            View on GitHub →
          </a>
        </div>
      </div>

      <!-- Project 5 -->
      <div class="bg-gray-100 rounded-xl overflow-hidden hover:shadow-sm transition">
        <img src="https://picsum.photos/200/300?random=5" alt="Battery Management Tool" class="w-full h-40 object-cover">
        <div class="p-5">
          <div class="flex items-center gap-3 mb-2">
            <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
            </svg>
            <h3 class="font-semibold text-lg">Battery Management Tool</h3>
          </div>
          <p class="text-gray-700 mb-4">
            CLI tool in Python for logging and analyzing solar battery performance logs from field engineers.
          </p>
          <a href="https://github.com/yourusername/battery-management-tool" target="_blank"
            class="inline-block text-sm text-blue-600 hover:underline font-medium">
            View on GitHub →
          </a>
        </div>
      </div>

      <!-- Project 6 -->
      <div class="bg-gray-100 rounded-xl overflow-hidden hover:shadow-sm transition">
        <img src="https://picsum.photos/200/300?random=6" alt="Aviator Multiplier Scraper" class="w-full h-40 object-cover">
        <div class="p-5">
          <div class="flex items-center gap-3 mb-2">
            <svg class="w-6 h-6 text-indigo-700" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
            <h3 class="font-semibold text-lg">Aviator Multiplier Scraper</h3>
          </div>
          <p class="text-gray-700 mb-4">
            Chrome extension that scrapes multiplier values from Aviator game on betting.co.zw and logs them locally.
          </p>
          <a href="https://github.com/yourusername/aviator-multiplier-scraper" target="_blank"
            class="inline-block text-sm text-blue-600 hover:underline font-medium">
            View on GitHub →
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
</script>
