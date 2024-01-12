import {defineStore} from 'pinia'

export const useAppStore = defineStore('data', {
    state: () => ({
        userInput : '',
        hasPower: false
    }), 
    actions: {
        togglePower() {
            this.hasPower = !this.hasPower;
        }
    }
})

