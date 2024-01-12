<script setup>
import router from '../router';
import { onMounted, computed } from 'vue';


const time = computed(() => getCurrentDateTime())

function goBack(){
    if(router.currentRoute.value.fullPath !== '/')
    {
        router.go(-1)
    }
}
function getCurrentDateTime() {
  const now = new Date();

  // Get the components of the date and time
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const year = now.getFullYear();

  // Combine the components to create the formatted string
  const formattedDateTime = `${hours}:${minutes} ${month}/${day}/${year}`;

  return formattedDateTime;
}

</script>

<template>
    <div class="mt-5 border-b-2 h-10 flex">
        <button class="back-button text-xl" @click="goBack" v-show="router.currentRoute.value.fullPath !== '/'">
            &#8592; Back
        </button>
        <div class="absolute right-2">
            <p class="text-white text-l">{{ time }}</p>
        </div>
    </div>
</template>

<style scoped>

.back-button{
    color: white;

}</style>