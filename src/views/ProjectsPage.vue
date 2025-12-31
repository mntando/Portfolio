<template>
  <NavBar class="bg-gray-900 text-gray-200"/>
  <div class="p-6 max-w-7xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">Projects</h1>
    <p class="text-lg leading-relaxed text-gray-700 mb-10">
      Here are some of the projects I've built across embedded systems and web development:
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
      <!-- Project 1 -->
      <div class="bg-gray-100 rounded-xl overflow-hidden border border-gray-300">
        <img src="../assets/imgs/mesh.jpg" alt="Traffic Light Dashboard" class="w-full h-40 object-cover">
        <div class="p-5">
          <div class="flex items-center gap-3 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
            </svg>
            <h3 class="font-semibold text-lg">ESP32-NOW Mesh Library</h3>
          </div>
          <p class="text-gray-700 mb-4">
            A lightweight mesh network library using ESP-NOW protocol. Enables multi-hop communication for IoT and distributed systems without WiFi infrastructure.
          </p>
          <div class="flex flex-wrap gap-2 mb-4 justify-center">
            <span class="px-3 py-1 text-xs font-medium rounded-full text-gray-900 border border-gray-500">
              C++
            </span>
            <span class="px-3 py-1 text-xs font-medium rounded-full text-green-800 border border-green-400">
              ESP32
            </span>
            <span class="px-3 py-1 text-xs font-medium rounded-full text-blue-800 border border-blue-400">
              ESP-NOW
            </span>
            <span class="px-3 py-1 text-xs font-medium rounded-full text-orange-800 border border-orange-400">
              IoT
            </span>
          </div>
          <a href="https://github.com/mntando/ENowMesh" target="_blank" class="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-black decoration-gray-600 hover:decoration-gray-700 underline underline-offset-4 transition">
            View on GitHub
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>  
      
      <!-- Project 2 -->
      <div class="bg-gray-100 rounded-xl overflow-hidden  border border-gray-300">
        <img src="../assets/imgs/weather.png" alt="Smart Home App" class="w-full h-40 object-cover">
        <div class="p-5">
          <div class="flex items-center gap-3 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="size-5" viewBox="0 0 16 16">
              <path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .624.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .51-.375A3.5 3.5 0 0 1 7 8m4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5z"/>
              <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708zm1.734 3.374a2 2 0 1 1 3.296 2.198q.3.423.516.898a3 3 0 1 0-4.84-3.225q.529.017 1.028.129m4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377M14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/>
            </svg>
            <h3 class="font-semibold text-lg">Weather App</h3>
          </div>
          <p class="text-gray-700 mb-4">
            Flask web app that displays real-time weather data from OpenWeatherMap. Features city search, responsive UI, and simple REST API integration.
          </p>
          <div class="flex flex-wrap gap-2 mb-4 justify-center">
            <span class="px-3 py-1 text-xs font-medium rounded-full  text-green-800 border border-green-400">
              Flask
            </span>
            <span class="px-3 py-1 text-xs font-medium rounded-full text-gray-900 border border-gray-500">
              Python
            </span>
            <span class="px-3 py-1 text-xs font-medium rounded-full  text-orange-800 border border-orange-400">
              REST API
            </span>
            <span class="px-3 py-1 text-xs font-medium rounded-full  text-blue-800 border border-blue-400">
              SQLite3
            </span>
          </div>
          <a href="https://weather50.vercel.app" target="_blank" class="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-black decoration-gray-600 hover:decoration-gray-700 underline underline-offset-4 transition">
            Live demo
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <!-- Project 3 -->
      <div class="bg-gray-100 rounded-xl overflow-hidden border border-gray-300">
        <img src="../assets/imgs/dashboard.png" alt="Traffic Light Dashboard" class="w-full h-40 object-cover">
        <div class="p-5">
          <div class="flex items-center gap-3 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
            </svg>
            <h3 class="font-semibold text-lg">Traffic Light Dashboard</h3>
          </div>  
          <p class="text-gray-700 mb-4">
            Electron-Vue desktop app showing real-time traffic light states on a Leaflet map, enables remote control of traffic lights. Data pulled from a local Sqlite3 DB.
          </p>
          <div class="flex flex-wrap gap-2 mb-4 justify-center">
            <span class="px-3 py-1 text-xs font-medium rounded-full text-gray-900 border border-gray-500">
              Electron
            </span>
            <span class="px-3 py-1 text-xs font-medium rounded-full text-green-800 border border-green-400">
              Vue.js
            </span>
            <span class="px-3 py-1 text-xs font-medium rounded-full text-blue-800 border border-blue-400">
              Leaflet
            </span>
            <span class="px-3 py-1 text-xs font-medium rounded-full text-orange-800 border border-orange-400">
              SQLite3
            </span>
          </div>
          <a href="https://github.com/mntando/Traffic-lights-management-system" target="_blank" class="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-black decoration-gray-600 hover:decoration-gray-700 underline underline-offset-4 transition">
            View on GitHub
            <span aria-hidden="true">↗</span>
          </a>
        </div>  
      </div>
    </div>

    <!-- More Projects Toggle -->
    <div class="mt-12">
      <button @click="showMore = !showMore" class="w-full p-4 flex items-center justify-between gap-3 rounded-xl border border-dashed border-gray-300 bg-gray-50 text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition">
        <span class="text-sm font-medium">
          Other Projects
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 transition-transform" :class="showMore ? 'rotate-180' : ''" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
    </div>

    <transition enter-active-class="transition-all duration-300 ease-out" leave-active-class="transition-all duration-300 ease-in" enter-from-class="opacity-0 max-h-0" enter-to-class="opacity-100 max-h-[2000px]" leave-from-class="opacity-100 max-h-[2000px]" leave-to-class="opacity-0 max-h-0">
      <div v-if="showMore" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-12 gap-12">
        <!-- Project 4 -->
        <div class="bg-gray-100 rounded-xl overflow-hidden border border-gray-300">
          <img src="../assets/imgs/pwm.jpeg" alt="Smart Water Monitor" class="w-full h-40 object-cover">
          <div class="p-5">
            <div class="flex items-center gap-3 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 12h5v8h4v-16h4v8h5" />
              </svg>  

              <h3 class="font-semibold text-lg">Pulse With Modulator</h3>
            </div>
            <p class="text-gray-700 mb-4">
              Arduino sketch for generating PWM signals. Features adjustable frequency and duty cycle, with code optimized for low power consumption and precise timing.
            </p> 
            <div class="flex flex-wrap gap-2 mb-4 justify-center">
              <span class="px-3 py-1 text-xs font-medium rounded-full text-orange-800 border border-orange-400">
                Arduino
              </span>
              <span class="px-3 py-1 text-xs font-medium rounded-full text-gray-900 border border-gray-500">
                C++
              </span>
              <span class="px-3 py-1 text-xs font-medium rounded-full text-green-800 border border-green-400">
                PWM
              </span>
            </div>
            <a href="https://github.com/mntando/Pwm" target="_blank" class="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-black decoration-gray-600 hover:decoration-gray-700 underline underline-offset-4 transition">
              View on GitHub
              <span aria-hidden="true">↗</span>
            </a>
          </div>  
        </div>  

        <!-- Project 5 -->
        <div class="bg-gray-100 rounded-xl overflow-hidden border border-gray-300">
          <img src="../assets/imgs/portfolio.png" alt="Portfolio Website" class="w-full h-40 object-cover">
          <div class="p-5">
            <div class="flex items-center gap-3 mb-2">
              <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <h3 class="font-semibold text-lg">Portfolio Website</h3>
            </div>
            <p class="text-gray-700 mb-4">
              A fully responsive site built with Vue.js and Tailwind CSS, live on Vercel, presenting my projects, personal work, and ongoing development experiments.
            </p>
            <div class="flex flex-wrap gap-2 mb-4 justify-center">
              <span class="px-3 py-1 text-xs font-medium rounded-full text-green-800 border border-green-400">
                Vue.js
              </span>
              <span class="px-3 py-1 text-xs font-medium rounded-full text-blue-800 border border-blue-400">
                Tailwind CSS
              </span>
              <span class="px-3 py-1 text-xs font-medium rounded-full text-orange-800 border border-orange-400">
                Portfolio
              </span>
            </div>
            <a href="https://github.com/mntando/Portfolio" target="_blank" class="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-black decoration-gray-600 hover:decoration-gray-700 underline underline-offset-4 transition">
              View on GitHub
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NavBar from '../components/NavBar.vue';

const showMore = ref(false);
</script>
