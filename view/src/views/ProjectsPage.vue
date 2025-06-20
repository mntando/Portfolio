<template>
  <NavBar class="bg-gray-900 text-gray-200"/>
  <div class="p-6 max-w-7xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">Projects</h1>
    <p class="text-lg leading-relaxed text-gray-700 mb-10">
      Here are some of the projects I've built across embedded systems and web development. More are to come.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      <!-- Project 3 -->
      <div class="bg-gray-100 rounded-xl overflow-hidden hover:shadow-sm transition border border-gray-200">
        <img src="../assets/imgs/dashboard.png" alt="Traffic Light Dashboard" class="w-full h-40 object-cover">
        <div class="p-5">
          <div class="flex items-center gap-3 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="size-5" viewBox="0 0 16 16">
              <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4q0 1 .25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75Q6 13 6 12H2s-2 0-2-2zm1.398-.855a.76.76 0 0 0-.254.302A1.5 1.5 0 0 0 1 4.01V10c0 .325.078.502.145.602q.105.156.302.254a1.5 1.5 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.76.76 0 0 0 .254-.302 1.5 1.5 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.76.76 0 0 0-.302-.254A1.5 1.5 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145"/>
            </svg>
            <h3 class="font-semibold text-lg">Traffic Light Dashboard</h3>
          </div>
          <p class="text-gray-700 mb-4">
            Electron-Vue app showing real-time traffic light states on a Leaflet map, enables remote control of traffic lights. Data pulled from a local Sqlite3 DB.
          </p>
          <a href="https://github.com/mntando/Traffic-lights-management-system" target="_blank"
            class="inline-block text-sm text-blue-600 hover:underline font-medium">
            View on GitHub →
          </a>
        </div>
      </div>

      <!-- Project 1 -->
      <div class="bg-gray-100 rounded-xl overflow-hidden hover:shadow-sm transition border border-gray-200">
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
          <a href="https://github.com/mntando/Pwm" target="_blank"
            class="inline-block text-sm text-blue-600 hover:underline font-medium">
            View on GitHub →
          </a>
        </div>
      </div>

      <!-- Project 2 -->
      <div class="bg-gray-100 rounded-xl overflow-hidden hover:shadow-sm transition border border-gray-200">
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
          <a href="https://weather50.onrender.com" target="_blank"
            class="inline-block text-sm text-blue-600 hover:underline font-medium">
            Visit site here →
          </a>
        </div>
      </div>

      <!-- Project 6 -->
      <div class="bg-gray-100 rounded-xl overflow-hidden hover:shadow-sm transition border border-gray-200">
        <img src="../assets/imgs/aviator.png" alt="Aviator Multiplier Scraper" class="w-full h-40 object-cover">
        <div class="p-5">
          <div class="flex items-center gap-3 mb-2">
            <svg viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" class="size-6">
              <path d="m624 448h-608c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm-579.19-242.34 88.74 80a62.607 62.607 0 0 0 25.47 13.93l287.6 78.35c26.48 7.21 54.56 8.72 81 1.36 29.67-8.27 43.44-21.21 47.25-35.71 3.83-14.5-1.73-32.71-23.37-54.96-19.28-19.82-44.35-32.79-70.83-40l-97.51-26.56-100.36-191.85c-1.51-5.81-5.95-10.35-11.66-11.91l-65.09-17.73c-10.56-2.88-20.9 5.32-20.71 16.44l47.92 164.21-102.2-27.84-27.59-67.88c-1.93-4.89-6.01-8.57-11.02-9.93l-39.73-10.83c-10.34-2.82-20.53 5-20.72 15.88l.23 101.78c.19 8.91 6.03 17.34 12.58 23.25z"/>
            </svg>
            <h3 class="font-semibold text-lg">Aviator Multiplier Scraper</h3>
          </div>
          <p class="text-gray-700 mb-4">
            Node.js app that scrapes multiplier values from Aviator game on spincity.co.zw and logs them locally.
          </p>
          <a href="https://github.com/mntando/Aviator-Multiplier-Scraper" target="_blank"
            class="inline-block text-sm text-blue-600 hover:underline font-medium">
            View on GitHub →
          </a>
        </div>
      </div>

      <!-- Project 4 -->
      <div class="bg-gray-100 rounded-xl overflow-hidden hover:shadow-sm transition border border-gray-200">
        <img src="../assets/imgs/portfolio.png" alt="Portfolio Website" class="w-full h-40 object-cover">
        <div class="p-5">
          <div class="flex items-center gap-3 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
            <h3 class="font-semibold text-lg">Portfolio Website</h3>
          </div>
          <p class="text-gray-700 mb-4">
            Responsive personal site built with Vue.js and Tailwind CSS. Fully deployed and live on render.
            <a href="https://render.com./mvportfolio" target="_blank" class="inline-block text-sm text-blue-600 hover:underline font-medium">View</a>
          </p>
          <a href="https://github.com/mntando/Portfolio" target="_blank"
            class="inline-block text-sm text-blue-600 hover:underline font-medium">
            View on GitHub →
          </a>
        </div>
      </div>

      <!-- Project 5 -->
      <div class="bg-gray-100 rounded-xl overflow-hidden hover:shadow-sm transition border border-gray-200">
        <img src="../assets/imgs/webpage.jpg" alt="Battery Management Tool" class="w-full h-40 object-cover">
        <div class="p-5">
          <div class="flex items-center gap-3 mb-2">
            <svg fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="size-6">
              <g fill="#212121">
                <path d="m6 2h8c1.1046 0 2 .89543 2 2v12c0 1.1046-.8954 2-2 2h-8c-1.10457 0-2-.8954-2-2v-12c0-1.10457.89543-2 2-2zm0 1c-.55228 0-1 .44772-1 1v12c0 .5523.44772 1 1 1h8c.5523 0 1-.4477 1-1v-12c0-.55229-.4477-1-1-1z"/>
                <path d="m13 6.5c0 .24546-.1769.44961-.4101.49194l-.0899.00806h-5c-.27614 0-.5-.22386-.5-.5 0-.24546.17688-.44961.41012-.49194l.08988-.00806h5c.2761 0 .5.22386.5.5zm0 3.5c0 .2455-.1769.4496-.4101.4919l-.0899.0081h-5c-.27614 0-.5-.2239-.5-.5 0-.24546.17688-.44961.41012-.49194l.08988-.00806h5c.2761 0 .5.22386.5.5zm0 3.5c0 .2455-.1769.4496-.4101.4919l-.0899.0081h-5c-.27614 0-.5-.2239-.5-.5 0-.2455.17688-.4496.41012-.4919l.08988-.0081h5c.2761 0 .5.2239.5.5z"/>
              </g>
            </svg>
            <h3 class="font-semibold text-lg">Responsive Webpage</h3>
          </div>
          <p class="text-gray-700 mb-4">
            Fully responsive webpage for monitoring and managing battery systems, featuring real-time data visualization and user-friendly controls.
          </p>
          <a href="https://github.com/mntando/Responsive-webpage" target="_blank"
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
