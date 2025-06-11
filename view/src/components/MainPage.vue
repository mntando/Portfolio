<template>
  <main class="min-h-screen bg-gray-50 text-gray-800 font-inter">
    <header class="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-10">
      <h1 class="text-3xl font-extrabold tracking-tight">Mvuselelo Ntando Ndhlovu</h1>
      <nav class="space-x-6 text-lg font-medium">
        <a href="#about" class="hover:text-blue-600 transition">About</a>
        <a href="#projects" class="hover:text-blue-600 transition">Projects</a>
        <a href="#contact" class="hover:text-blue-600 transition">Contact</a>
      </nav>
    </header>

    <section class="p-16 text-center bg-gradient-to-br from-blue-100 to-blue-200">
      <h2 class="text-5xl font-bold mb-6">Aspiring Software & Embedded Systems Developer</h2>
      <p class="max-w-2xl mx-auto text-lg leading-relaxed">Final-year engineering student passionate about digital innovation, smart systems, and software development. Experienced in C, Python, JavaScript, IoT, and traffic automation solutions.</p>
    </section>

    <section id="about" class="p-16 bg-white">
      <h3 class="text-3xl font-semibold mb-6 border-b-2 border-blue-300 inline-block pb-1">About Me</h3>
      <p class="max-w-4xl mx-auto text-lg leading-relaxed">I'm pursuing my Bachelor's in Engineering at NUST and currently working on a final-year project titled <strong class="text-blue-700">"Automated Smart Traffic Signal System with Real-Time Monitoring and Integrated Emergency Vehicle Priority"</strong>. I have hands-on experience with ESP32 microcontrollers, digital systems, and web-based dashboards. I enjoy building intelligent systems that improve urban life, and I'm eager to grow in the fields of software, IoT, and digital technologies.</p>
    </section>

    <section id="projects" class="p-16 bg-gray-50">
      <h3 class="text-3xl font-semibold mb-10 border-b-2 border-blue-300 inline-block pb-1">Projects</h3>
      <div class="grid md:grid-cols-2 gap-10">
        <div class="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h4 class="text-2xl font-bold mb-2">Smart Traffic Signal System</h4>
          <p class="text-gray-700 mb-4">IoT-based adaptive traffic signal with emergency vehicle priority. Uses ESP32, sensors, and web interface for monitoring.</p>
          <a href="https://github.com/yourusername/smart-traffic-system" class="text-blue-600 hover:underline">View on GitHub</a>
        </div>

        <div class="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h4 class="text-2xl font-bold mb-2">Digital Learning Dashboard</h4>
          <p class="text-gray-700 mb-4">A simple Vue dashboard to manage student digital learning paths, assignments, and reports.</p>
          <a href="https://github.com/yourusername/digital-learning-dashboard" class="text-blue-600 hover:underline">View on GitHub</a>
        </div>
      </div>
    </section>

    <section class="p-16 bg-white">
      <h3 class="text-3xl font-semibold mb-6 border-b-2 border-blue-300 inline-block pb-1">Resume</h3>
      <a href="/resume.pdf" target="_blank" class="text-blue-600 hover:underline text-lg">Download my resume</a>
    </section>

    <section id="contact" class="p-16 bg-gradient-to-br from-blue-50 to-white">
      <h3 class="text-3xl font-semibold mb-6 border-b-2 border-blue-300 inline-block pb-1">Contact</h3>
      <ul class="space-y-2 text-lg">
        <li>Email: <a href="mailto:mvuselelo.ndhlovu@example.com" class="text-blue-600 hover:underline">mvuselelo.ndhlovu@example.com</a></li>
        <li>GitHub: <a href="https://github.com/yourusername" class="text-blue-600 hover:underline">github.com/yourusername</a></li>
        <li>LinkedIn: <a href="https://linkedin.com/in/yourusername" class="text-blue-600 hover:underline">linkedin.com/in/yourusername</a></li>
      </ul>
    </section>

    <footer class="text-center text-sm text-gray-500 py-6 bg-white border-t">
      © 2025 Mvuselelo Ntando Ndhlovu
    </footer>
  </main>
</template>

<script setup>
// Vue 3 Composition API - No logic yet, purely static portfolio
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

.font-inter {
	font-family: 'Inter', sans-serif;
}
</style>
