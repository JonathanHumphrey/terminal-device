<script setup>
import ScreenFrame from '../components/ScreenFrame.vue';
import ScreenContent from '../components/ScreenContent.vue';
</script>

<template>
    
        <ScreenFrame>  
            <h1 class="text-2xl">Welcome To Jonny OS</h1>

            <ul class="w-2/3 ml-5">
                <li class="hover:bg-white hover:text-black hover:cursor-pointer text-xl">
                    <router-link :to="{name: 'files'}" >Files</router-link>
                </li>
                <li class="hover:bg-white hover:text-black hover:cursor-pointer text-xl">
                    <router-link :to="{name: 'terminal'}" >Terminal</router-link>
                </li>            
            </ul>
        </ScreenFrame>
    
</template>