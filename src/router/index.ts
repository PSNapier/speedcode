import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// Auto-import all views in subfolders of `views`
const pages = import.meta.glob('../views/**/*.vue');

// Convert to route definitions
const routes = Object.entries(pages).map(([path, componentImport]) => {
     const routePath = path
          .replace('../views', '')
          .replace(/\.vue$/, '')
          .replace(/\/?index$/i, '/')
          .toLowerCase();

     return {
          path: routePath === '' ? '/' : routePath,
          name: routePath.replace(/^\//, '').replace(/\//g, '-'),
          component: defineAsyncComponent(componentImport), // wrap import fn here
     };
});

const router = createRouter({
     history: createWebHistory(import.meta.env.BASE_URL),
     routes,
});

export default router;
