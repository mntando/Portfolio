// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '../views/MainPage.vue'
import About from '../views/AboutPage.vue'
import Skills from '../views/SkillsPage.vue'
import Projects from '../views/ProjectsPage.vue'
import Contact from '../views/ContactPage.vue'

const routes = [
	{ path: '/', component: MainPage }, // default route
	{ path: '/about', component: About },
	{ path: '/skills', component: Skills },
	{ path: '/projects', component: Projects },
	{ path: '/contact', component: Contact },
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
