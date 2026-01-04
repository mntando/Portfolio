<template>
  <NavBar class="bg-gray-900 text-gray-200"/>
    <div class="p-6 max-w-7xl mx-auto text-center">
        <h1 class="text-xl font-bold mb-4">404 - Page Not Found</h1>
        <p class="leading-relaxed text-gray-700 mb-8">
        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <a href="/" class="inline-block bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
        Go Back to Home
        </a>
    </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
</script>