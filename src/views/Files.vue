<script setup>
import ScreenFrame from '../components/ScreenFrame.vue';

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
    {
        id: 2,
        text: "There has been an accident. About 200m past the anomoly, Doctor Brannic started feeling unwell and exhibited signs of decompression sickness, despite the instruments reading only 1 atm of pressure. It seems that the deeper we go, the more real the affects on our instruments become. I do not believe that the anomoly is electromagnetic, strictly.",
        date: "10-17-2023",
        author: "Anelle Blantham",
        title: "Strange Symptoms"
    },
    {
        id: 3,
        text: "Progress has halted since my last update. Doctor Brannic has made a recovery, but refuses to delve deeper again. Wise man, in my opinion. A small group of doctors decided to prod more at the same location that Doctor Brannic first fell ill. They took a barometer, thermometer, geiger counter, and electromagnetic sensor. It seems that the anomoly, when deeper in the cave, has a deeper and more profound effect. Each of the instruments reported what we thought to be superficial effects is in fact reporting accurately. Each of the doctors recieved a near deadly dose of radiation exactly 10 seconds after the first electromagnetic pulse. Their condition quickly worsened due to the decompression sickness. All of the doctors in the exploratory party have passed. ",
        date: "10-18-2023",
        author: "Anelle Blantham",
        title: "Another Incident"
    }
    ,
    {
        id: 4,
        text: "We have been blessed with a resolution to our problems. It turns out that the data gathered on previous expeditions was being altered by a scientist by the name of Anelle Bentham. They have been releieved of duty and further reports will be published showing our TRUE findings in the cave. We will send further correspondance when necessary. ",
        date: "10-20-2023",
        author: "Unknown",
        title: "Resolved"
    }
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