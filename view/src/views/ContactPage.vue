<template>
  <NavBar class="bg-gray-900 text-gray-200" />

  <div class="p-6 max-w-3xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">Contact Me</h1>
    <p class="text-lg text-gray-700 mb-6">
      Got a project idea, collaboration request, or just want to say hi? I’d love to hear from you.
    </p>

    <!-- Contact Form -->
    <form @submit.prevent="handleSubmit" class="rounded-xl shadow-sm mt-8 p-6 space-y-8">
      <div>
        <label class="block text-sm text-left font-medium">Name:</label>
        <input v-model="name" type="text" required class="w-full mt-1 p-2 border rounded-md" />
      </div>
      <div>
        <label class="block text-sm text-left font-medium text-gray-700">Email:</label>
        <input v-model="email" type="email" required class="w-full mt-1 p-2 border rounded-md" />
      </div>
      <div>
        <label class="block text-sm text-left font-medium text-gray-700">Message:</label>
        <textarea v-model="message" rows="4" required class="w-full mt-1 p-2 border rounded-md"></textarea>
      </div>
      <!-- <button type="submit" class="bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
        Send Message
      </button> -->
      <button type="submit" :disabled="submitting" class="bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed">
        {{ submitting ? 'Sending...' : 'Send Message' }}
      </button>
    </form>

    <!-- Contact Info -->
    <div class="rounded-xl p-6 mt-8 items-center">
      <div class="flex gap-8">
        <a href="https://github.com/mntando" target="_blank" class="text-gray-800">
          <svg class="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/mvuselelo-ntando-ndhlovu-707202294/" target="_blank" class="text-blue-700">
          <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5v-14a5 5 0 00-5-5zm-11 19h-3v-9h3v9zm-1.5-10.3a1.8 1.8 0 01-1.8-1.8 1.8 1.8 0 013.6 0c0 1-.8 1.8-1.8 1.8zm13.5 10.3h-3v-4.8c0-1.2-.4-2-1.4-2s-1.6.9-1.6 2.1v4.7h-3v-9h2.9v1.2c.4-.8 1.3-1.4 2.4-1.4 1.8 0 3.1 1.2 3.1 3.7v5.5z"/>
          </svg>
        </a>
        <a href="https://x.com/MvuseleloNtando" target="_blank" class="text-gray-800">
          <svg class="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.56c-.88.39-1.82.65-2.81.77a4.92 4.92 0 0 0 2.16-2.71c-.95.56-2 .97-3.13 1.19a4.92 4.92 0 0 0-8.39 4.48c-4.09-.2-7.72-2.17-10.15-5.15a4.93 4.93 0 0 0-.66 2.48c0 1.71.87 3.22 2.19 4.1-.81-.03-1.57-.25-2.24-.62v.06c0 2.39 1.7 4.39 3.95 4.84-.41.11-.84.17-1.29.17-.31 0-.61-.03-.9-.08.61 1.91 2.39 3.3 4.5 3.34a9.87 9.87 0 0 1-6.1 2.1c-.4 0-.79-.02-1.18-.07a13.94 13.94 0 0 0 7.56 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63a10.06 10.06 0 0 0 2.46-2.57z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NavBar from '../components/NavBar.vue';

const name = ref('');
const email = ref('');
const message = ref('');

const submitting = ref(false);

const handleSubmit = async () => {
  submitting.value = true;

  try {
    const response = await fetch('https://formspree.io/f/manjbdka', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value
      })
    });

    if (response.ok) {
      alert(`Thanks, ${name.value}! Your message has been sent.`);
      name.value = '';
      email.value = '';
      message.value = '';
    } else {
      alert('Something went wrong. Please try again.');
    }
  } catch (err) {
    console.error(err);
    alert('There was an error sending your message.');
  }

  submitting.value = false;
};
</script>
