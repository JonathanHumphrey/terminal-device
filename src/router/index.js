import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import Files from "../views/Files.vue"
import Terminal from "../views/Terminal.vue"
import FileViewer from '../components/FileViewer.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    }, 
    {
        path: '/files',
        name: 'files',
        component: Files
    },
    {
        path: '/terminal',
        name: 'terminal',
        component: Terminal
    },
    {
        path: '/file/:id',
        name: 'fileViewer',
        component: FileViewer
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;