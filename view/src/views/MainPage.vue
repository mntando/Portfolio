<template>
  <NavBar class="z-20 sm:fixed top-0 left-0 w-full sm:text-gray-100 bg-gray-900 sm:bg-transparent " />
  <main class="relative min-h-screen w-full">
    <div class="absolute inset-0 flex flex-col sm:flex-row">
      <div class="flex flex-col w-full sm:w-1/2 space-y-4 p-6 sm:p-18 text-left my-auto">
        <h3 class="text-xl font-bold text-gray-900">Hello, I am</h3>
        <h1 class="text-6xl font-bold mt-4 text-gray-900">Mvuselelo N</h1>
        <p class="text-xl font-bold text-gray-500">A passionate electronics engineer / software developer.</p>
        <div class="flex space-x-5 mt-4">
          <a href="https://github.com/mntando" target="_blank" class="flex items-center justify-center rounded-full bg-white shadow p-3 hover:bg-gray-200 transition-colors duration-200" aria-label="GitHub">
            <svg class="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/mvuselelo-ntando-ndhlovu-707202294/" target="_blank" class="flex items-center justify-center rounded-full bg-white text-blue-700 shadow p-3 hover:bg-gray-200 transition-colors duration-200" aria-label="LinkedIn">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5v-14a5 5 0 00-5-5zm-11 19h-3v-9h3v9zm-1.5-10.3a1.8 1.8 0 01-1.8-1.8 1.8 1.8 0 013.6 0c0 1-.8 1.8-1.8 1.8zm13.5 10.3h-3v-4.8c0-1.2-.4-2-1.4-2s-1.6.9-1.6 2.1v4.7h-3v-9h2.9v1.2c.4-.8 1.3-1.4 2.4-1.4 1.8 0 3.1 1.2 3.1 3.7v5.5z"/>
            </svg>
          </a>
          <a href="https://x.com/MvuseleloNtando" target="_blank" class="flex items-center justify-center rounded-full bg-white shadow p-3 hover:bg-gray-200 transition-colors duration-200" aria-label="Twitter">
            <svg class="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.56c-.88.39-1.82.65-2.81.77a4.92 4.92 0 0 0 2.16-2.71c-.95.56-2 .97-3.13 1.19a4.92 4.92 0 0 0-8.39 4.48c-4.09-.2-7.72-2.17-10.15-5.15a4.93 4.93 0 0 0-.66 2.48c0 1.71.87 3.22 2.19 4.1-.81-.03-1.57-.25-2.24-.62v.06c0 2.39 1.7 4.39 3.95 4.84-.41.11-.84.17-1.29.17-.31 0-.61-.03-.9-.08.61 1.91 2.39 3.3 4.5 3.34a9.87 9.87 0 0 1-6.1 2.1c-.4 0-.79-.02-1.18-.07a13.94 13.94 0 0 0 7.56 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63a10.06 10.06 0 0 0 2.46-2.57z"/>
            </svg>
          </a>
        </div>
      </div>

      <div class="w-full sm:w-1/2 flex items-center justify-center text-gray-100 bg-gray-900 clip-right">
        <div class="text-center p-8 max-w-xl">
          <h1 class="text-2xl font-bold pt-8">Welcome to My Portfolio</h1>
          <p class="text-lg mt-18 px-4">
            I'm an Electronics Engineering student passionate about building intelligent systems that blend hardware and software.
            From circuit design to full-stack applications, I craft solutions that solve real-world problems.
          </p>
          <p class="text-lg mt-18 px-4">
            Explore my work and skills in electronics systems development.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
</script>

<style scoped>
body, html {
  margin: 0;
  padding: 0;
}

@media (min-width: 640px) {
  .clip-right {
    clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
  }
}
</style>
