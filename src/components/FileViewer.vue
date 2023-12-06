<script setup>
import ScreenFrame from './ScreenFrame.vue';




const files = [
    {
        id: 0,
        text: "We have been scanning the anomoly every day. So far there have been no signs of it fluctuating and becoming unstable. Hopefully the incident before was an isolated incident. ",
        date: '10-10-1000',
        author: 'Anelle Blantham',
        title: 'Log No.1'

    }
]

</script>

<template>
    <ScreenFrame>
        <div v-for="file in files" class="mt-4">
            <h1 class="text-xl">{{ file.title}}</h1>
            <div class="flex justify-between border-b border-gray-500">
                <h2>{{ file.author }}</h2>
                <h2>{{ file.date }}</h2>
            </div>
            <div>
                <p>{{ file.text }}</p>
            </div>
        </div>
    </ScreenFrame>
</template>