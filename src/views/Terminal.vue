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
        text: `Available Commands:\n-help: displays available commands\n-admin: sign into the administrator account\n-firewall: access firewall settings and status`
    }
    ,
    {
        id: 1,
        alias: 'admin',
        text: 'Due to a recent service interruption, the administrator state is on lockdown. Please try again in 9999999 days'
    }
    ,
    {
        id: 2,
        alias: 'firewall',
        text: 'Firewall has been breached by IP address: 192:0000000-1-1-%%%%%. Unable to transfer data until the breach has been resolved. Sign in as an administrator to reslove firewall settings'
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
    const responseLines = response.split('\n');
    responseLines.forEach((line, index) => {
      outputLines.value.push({ id: Date.now() + index + 1, type: 'output', text: line });
    });
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


</style>