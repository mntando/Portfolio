<template>
  <div class="z-20 fixed top-0 left-0 w-full text-gray-100">
    <ul class="flex flex-row justify-between items-center space-x-12 py-4 pl-18 pr-4">
      <li @click="activeComponent = 'MainPage'" class="text-gray-900">
        <a href="#home" class="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="w-6 h-6" viewBox="0 0 120 120">
            <path fill="currentColor" stroke="currentColor" stroke-width="3" d="M88.2,108.4h-16.6c-1.4,0-2.6-1.2-2.6-2.6v-29.2h-17.9v29.2c0,1.4-1.2,2.6-2.6,2.6h-16.6c-6.6,0-11.9-5.9-11.9-13.2v-31.8h-6.6c-2.6,0-5-1.7-5.9-4.4-1-2.9-.2-6.1,2.1-8L56.2,13c2.3-1.8,5.4-1.8,7.7,0l46.7,38.1h0c2.3,1.9,3.1,5.1,2.1,8-.9,2.7-3.3,4.4-5.9,4.4h-6.6v31.8c0,7.3-5.3,13.2-11.9,13.2ZM74.2,103.2h14c3.7,0,6.7-3.6,6.7-8v-34.4c0-1.4,1.2-2.6,2.6-2.6h9.2c.6,0,.9-.6,1-.9.2-.7.2-1.6-.5-2.1L60.5,17c-.3-.3-.7-.3-1,0L12.7,55.2c-.7.5-.7,1.5-.5,2.1.1.3.4.9,1,.9h9.2c1.4,0,2.6,1.2,2.6,2.6v34.4c0,4.4,3,8,6.7,8h14v-29.2c0-1.4,1.2-2.6,2.6-2.6h23.1c1.4,0,2.6,1.2,2.6,2.6v29.2Z"/>
          </svg>
        </a>
      </li>
      <div class="flex flex-row space-x-12">
        <li @click="activeComponent = 'AboutPage'"><a href="#about">About</a></li>
        <li @click="activeComponent = 'SkillsPage'"><a href="#skills">Skills</a></li>
        <li @click="activeComponent = 'ProjectsPage'"><a href="#projects">Projects</a></li>
        <li>
          <a href="#contact">
            <button @click="activeComponent = 'ContactPage'" class="rounded-full bg-gray-100 text-black px-4 py-1 hover:bg-gray-300 transition-colors duration-200 ease-in-out">Contact</button>
          </a>
        </li>
      </div>
    </ul>
  </div>
  <component :is="activeComponent"></component>
</template>

<script>
import MainPage from './components/MainPage.vue'
import AboutPage from './components/AboutPage.vue';
import SkillsPage from './components/SkillsPage.vue';
import ProjectsPage from './components/ProjectsPage.vue';

export default {
  name: 'App',
  components: {
    MainPage,
    AboutPage,
    SkillsPage,
    ProjectsPage,
  },
  data() {
    return {
      activeComponent: 'MainPage', // Default component
    };
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
