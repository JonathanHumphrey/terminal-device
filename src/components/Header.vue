<script setup>
import router from '../router';


function goBack(){
    if(router.currentRoute.value.fullPath !== '/')
    {
        router.go(-1)
    }
}
</script>

<template>
    <div class="mt-5 border-b-2 h-10">
        <button class="back-button text-xl" @click="goBack" v-show="router.currentRoute.value.fullPath !== '/'">
            &#8592; Back
        </button>
    </div>
</template>

<style scoped>

.back-button{
    color: white;

}</style>