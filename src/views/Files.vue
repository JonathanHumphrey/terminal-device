<script setup>
import ScreenFrame from '../components/ScreenFrame.vue';
import ScreenContent from '../components/ScreenContent.vue'

import {useRoute} from 'vue-router'
import { computed, ref } from 'vue';
import router from '../router';

const route = useRoute()

function openFile(id) {
    console.log(id)
    router.push(`/file/${id}`)
}
const files = [
    {
        id: 0,
        text: "test",
        date: '10-10-1000',
        author: 'jam',
        title: 'Log no.1'

    }
]
</script>

<template>
    <div>
        <ScreenFrame>
            <div >
                <h1 class="text-2xl">Files</h1>
                <ul v-for="file in files" class="ml-5">
                    <li class="hover:bg-white hover:text-black hover:cursor-pointer text-xl" :id="file.id" @click="openFile(file.id)">{{ file.title }}</li>
                </ul>
            </div>
        </ScreenFrame>
    </div>
</template>