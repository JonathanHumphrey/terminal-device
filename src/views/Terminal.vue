<script setup>
import { ref } from 'vue';

import ScreenFrame from '../components/ScreenFrame.vue';

const outputLines = ref([
    {
        id: 0,
        type: 'input',
        text: 'Type "help" for commands'
    }
]);
const commands = ref([
    {
        id: 0,
        alias: 'help',
        text: `Available Commands:\n-test\n-test`
    }
])
const currentInput = ref('');

const processInput = () => {
    const inputText = currentInput.value.trim();


    if (inputText !== '') {
    // Display the user's input
    outputLines.value.push({ id: Date.now(), type: 'input', text: `$ ${inputText}` });

    // Process the command and generate a response (you can customize this logic)
    const response = processCommand(inputText);

    // Display the response
    outputLines.value.push({ id: Date.now() + 1, type: 'output', text: response });

    // Clear the input for the next command
    currentInput.value = '';
    }
};

const processCommand = (command) => {
    console.log(commands.value)
    
    for(let i = 0; i < commands.value.length; i++){
        console.log(commands.value[i])
        if(commands.value[i].alias == command){
            return `${commands.value[i].text}`
        }
    }
    return `Command "${command}" executed successfully!`;
};

</script>

<template>
    <div>
        <ScreenFrame>
            <div class="terminal">
                <div class="output" v-for="line in outputLines" :key="line.id">
                    <span :class="line.type">{{ line.text }}</span>
                </div>
                <input class="bg-transparent focus:ring-0 border focus:border-transparent focus:outline-none" autofocus v-model="currentInput" @keydown.enter.prevent="processInput" placeholder="..." />
            </div>
        </ScreenFrame>
    </div>
</template>



<style scoped>
.terminal{
}

</style>