<template>
  <NavBar class="bg-gray-900 text-gray-200"/>
  <div class="p-6 max-w-7xl mx-auto">
    <h1 class="text-xl font-bold">About Me</h1>

    <p class="leading-relaxed text-gray-700 mt-4">
      I'm a final-year Electronics Engineering student with interest in embedded systems, digital design, and programming.
      My journey has taken me through various projects, from designing microcontroller-based devices to developing full-stack applications.
    </p>

    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-8">

      <li class="bg-gray-100 rounded-lg p-6 space-y-6 divide-y divide-gray-300/95">
        <div class="flex items-center gap-3 pb-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="size-5" viewBox="0 0 16 16">
            <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
            <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z"/>
          </svg>
          <h2 class="font-medium text-lg text-gray-900">Experience</h2>
        </div>

        <div class="mt-6 text-left pb-4">
          <p class="text-base font-medium text-gray-900">
            Regal Digital Solutions
            <span class="font-normal text-gray-500"></span>
          </p>

          <p class="mt-1 text-sm text-gray-700">
            Software Engineer
          </p>

          <ul class="mt-3 text-sm text-gray-600 space-y-1.5 max-w-prose">
            <li>Developed web applications using Laravel and native PHP in a team environment</li>
            <li>Assisted in migrating a production native PHP application to the Laravel framework</li>
          </ul>
        </div>

        <div class="text-left">
          <p class="text-base font-medium text-gray-900">
            Bulawayo City Council
            <span class="font-normal text-gray-500"></span>
          </p>

          <p class="mt-1 text-sm text-gray-700">
            Electronic Engineering Intern
          </p>

          <ul class="mt-3 text-sm text-gray-600 space-y-1.5 max-w-prose">
            <li>Worked under supervision on microcontroller-based city infrastructure systems, supporting maintenance and troubleshooting</li>
            <li>Followed established operational procedures and contributed to technical documentation</li>
          </ul>
        </div>
      </li>

      <li class="bg-gray-100 rounded-lg p-6 space-y-6 divide-y divide-gray-300/95">
        <div class="flex items-center gap-3 pb-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
          </svg>
          <h2 class="font-medium text-lg text-gray-900">Education</h2>
        </div>
        
        <div class="text-left pb-4">
          <p class="text-base font-medium text-gray-900">
            National University of Science and Technology
            <span class="font-normal text-gray-500"></span>
          </p>

          <p class="mt-1 text-sm text-gray-700">
            Bachelor of Electronic Engineering
            <span class="text-gray-500">(In Progress)</span>
          </p>

          <ul class="mt-3 text-sm text-gray-600 space-y-1.5 max-w-prose">
            <li>Studying digital logic, embedded firmware, and electrical system design</li>
            <li>Focus on embedded systems, hardware–software integration, and software development</li>
          </ul>
        </div>

        <div class="text-left">
          <p class="text-base font-medium text-gray-900">
            Harvard University (edX)
            <span class="font-normal text-gray-500">| Online</span>
          </p>

          <p class="mt-1 text-sm text-gray-600">
            Certificate <span class="text-gray-400">(2023) </span>
            <a href="https://certificates.cs50.io/a5b2d26f-7b61-434a-8ef0-d514a21ca8a6.pdf?size=letter" target="_blank">
              <span class="text-gray-500 hover:text-gray-600 hover:underline underline-offset-4 transition">[↗]</span>
            </a>
          </p>

          <ul class="mt-3 text-sm text-gray-600 space-y-1.5 max-w-prose">
            <li>
              CS50x: Algorithms, data structures, C, Python, SQL, Flask, and software design fundamentals
            </li>
            <li>
              Completed a final project applying core development principles
              <a href="https://weather50.vercel.app" target="_blank">
                <span class="text-gray-500 hover:text-gray-600 hover:underline underline-offset-4 transition">[↗]</span>
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>

    <!-- Download Button -->
    <div class="text-center mt-10">
      <a href="/resume.pdf" download target="_blank" class="inline-block bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
        Download Resume
      </a>
    </div>

    
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
</script>
