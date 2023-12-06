<script setup>
import ScreenFrame from '../components/ScreenFrame.vue';
import ScreenContent from '../components/ScreenContent.vue'

import {useRoute} from 'vue-router'
import { computed, ref } from 'vue';
import router from '../router';

const route = useRoute()
const files = [
    {
        id: 0,
        text: "We have been scanning the anomoly every day. So far there have been no signs of it fluctuating and becoming unstable. Hopefully the incident before was an isolated incident. ",
        date: '10-10-2023',
        author: 'Anelle Blantham',
        title: 'Log No.1'

    }
    ,
    {
        id: 1,
        text: "The other doctors don't seem to see the anomoly as something worth keeping an eye on. They want to go deeper into the cave, but I really think we should understand what this thing is before we go any deeper. As far as we understand it, the anomoly is electromagnetic in nature and in it's stable state emits a pulse every 23 seconds. The pulse has a minor effect on our instrumentation, but remains strictly electromagnetic.  ",
        date: '10-15-2023',
        author: 'Anelle Blantham',
        title: 'Status Update'

    }
    ,
]

function openFile(id) {
    router.push(`/file/${id}`)
}

</script>

<template>
    <div>
        <ScreenFrame>
            <div >
                <h1 class="text-2xl">Files</h1>
                <ul v-for="file in files" class="ml-5">
                    <li class="flex justify-between hover:bg-white hover:text-black hover:cursor-pointer text-xl" :id="file.id" @click="openFile(file.id)">
                        <h1>{{ file.title }}</h1>
                        <h2>{{ file.date }}</h2>
                    </li>
                </ul>
            </div>
        </ScreenFrame>
    </div>
</template>