import {createRouter,createWebHistory,RouteRecordRaw} from 'vue-router'
import Home from '@/src/views/home.vue'
import Vuex from '@/src/views/vuex.vue'
const routes: Array<RouteRecordRaw>=[
    {
        path:'/',
        name:'home',
        components:Home
    },{
        path:'vuex',
        name:'vuex',
        components:Vuex
    },
    {
        path:'/axios',
        name:'axios',
        component:()=>import('@/views/axios')
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router;