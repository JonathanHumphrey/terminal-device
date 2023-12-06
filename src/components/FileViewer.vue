<script setup>
import ScreenFrame from './ScreenFrame.vue';

import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';

const route = useRoute()
const id = ref()

onMounted(() => {
    id.value = route.params.id

})

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

</script>

<template>
    <ScreenFrame>
        <div class="mt-4" v-if="files[id]">
            <h1 class="text-xl">{{ files[id].title}}</h1>
            <div class="flex justify-between border-b border-gray-500">
                <h2>{{ files[id].author }}</h2>
                <h2>{{ files[id].date }}</h2>
            </div>
            <div>
                <p>{{ files[id].text }}</p>
            </div>
        </div>
    </ScreenFrame>
</template>